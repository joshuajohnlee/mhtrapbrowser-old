import { useState } from "react";
import weaponsList from '../assets/weapons.json';
import WeaponCard from "./WeaponCard";
import FilterForm from "./FilterForm";
import SortButton from "./SortButton";
import lodash from "lodash";

export default function Weapons() {

  const DEFAULT_FILTERS = {
    power_type: {
      "Arcane": false,
      "Draconic": false,
      "Forgotten": false,
      "Hydro": false,
      "Law": false,
      "Parental": false,
      "Physical": false,
      "Rift": false,
      "Shadow": false,
      "Tactical": false,
    },
    min_power: 0,
    max_power: 16500,
    min_power_bonus: 0,
    max_power_bonus: 35,
    min_attr_bonus: 0,
    max_attr_bonus: 40,
    min_luck: 0,
    max_luck: 40,
    min_title_req: 0,
    max_title_req: 19,
    min_cheese_effect: -6,
    max_cheese_effect: 6,
    limited: 'any'
  }

  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  let filteredList = weaponsList.filter(x => {

    if(filters.power_type[x.power_type] === false) {
      return false;
    }

    if (x.power < filters.min_power || x.power > filters.max_power) {
      return false;
    }

    if (x.power_bonus < (filters.min_power_bonus / 100) || x.power_bonus > (filters.max_power_bonus / 100)) {
      return false;
    }

    if (x.attr_bonus < (filters.min_attr_bonus / 100) || x.attr_bonus > (filters.max_attr_bonus / 100)) {
      return false;
    }

    if (x.luck < filters.min_luck || x.luck > filters.max_luck) {
      return false;
    }

    if (x.title_req < filters.title_req || x.title > filters.title_req) {
      return false;
    }

    if (x.cheese_effect < filters.cheese_effect || x.cheese_effect > filters.cheese_effect) {
      return false;
    }

    if (filters.limited !== 'any' && filters.limited !== x.limited) {
      return false;
    }

    return true;
  });

  // console.log('weaponList', weaponsList);
  // console.log('filteredList', filteredList);

  // create a sort (can take multiple columns)
  // TO DO: find out how to change sort direction
  const [currentSortField, setCurrentSortField] = useState(["power"])
  const [currentSortDirection, setCurrentSortDirection] = useState("asc")

  let sortedAndFilteredList = lodash.orderBy(filteredList, [currentSortField, "power"], currentSortDirection);

  // return the page
  return (
    <>
      <FilterForm
        setFilters={setFilters}
        filters={filters}
      // childSetSort={setCurrentSort}
      />

      <SortButton
        setCurrentSortDirection={setCurrentSortDirection}
        setCurrentSortField={setCurrentSortField}
      />

      <div className="card-container">
        {sortedAndFilteredList.map((weapon) => (
          <WeaponCard key={weapon.name} weapon={weapon} />
        ))}
      </div>

    </>

  );

}