import { useState } from "react";
import weaponsList from '../assets/weapons.json';
import WeaponCard from "./WeaponCard";
import FilterForm from "./FilterForm";
import PageHeader from "./PageHeader";

const lodash = require("lodash");

export default function Weapons() {

  // TO DO: name filter with regex?

  // optional filters which aren't present if the users selects "all" or "any" as an option
  // TO DO: form element should delete and add these as specified by form values
  const [optionalFilters, setOptionalFilters] = useState({
    power_type: "Physical"
  })

  // apply the optional filters (using lodash library)
  let firstFilterList = lodash.filter(weaponsList, optionalFilters)

  // mandatory filters that will always have a value of some sort
  const [mandatoryFilters, setMandatoryFilters] = useState({
    min_power: 0,
    max_power: 7000,
    min_power_bonus: 0.1,
    max_power_bonus: 1,
    min_attr_bonus: 0,
    max_attr_bonus: 1,
    min_luck: 0,
    max_luck: 500,
    min_title_req: 0,
    max_title_req: 15,
    min_cheese_effect: 0,
    max_cheese_effect: 12,
  })

  // Filter the first list further with the manatory filters (not lodash this time)
  let secondFilterList = firstFilterList.filter(x =>
    (x.power_type == mandatoryFilters.power_type || !x.power_type) &&
    x.power >= mandatoryFilters.min_power &&
    x.power <= mandatoryFilters.max_power &&
    x.power_bonus >= mandatoryFilters.min_power_bonus &&
    x.power_bonus <= mandatoryFilters.max_power_bonus &&
    x.attr_bonus >= mandatoryFilters.min_attr_bonus &&
    x.attr_bonus <= mandatoryFilters.max_attr_bonus &&
    x.luck >= mandatoryFilters.min_luck &&
    x.luck <= mandatoryFilters.max_luck &&
    x.title_req >= mandatoryFilters.min_title_req &&
    x.title_req <= mandatoryFilters.max_title_req &&
    x.cheese_effect >= mandatoryFilters.min_cheese_effect &&
    x.cheese_effect <= mandatoryFilters.max_cheese_effect
  );

  // create a sort (can take multiple columns)
  // TO DO: find out how to change sort direction
  const [currentSort, setCurrentSort] = useState(["title_req"])

  let sortedAndFilteredList = lodash.sortBy(secondFilterList, currentSort);

  // return the page
  return (
    <>

      <PageHeader />

      <FilterForm
        childSetMandatory={setMandatoryFilters}
        childSetOptional={setOptionalFilters}
        childSetSort={setCurrentSort}
      />

      <div className="card-container">
        {sortedAndFilteredList.map((weapon) => (
          <WeaponCard key={weapon.name} weapon={weapon} />
        ))}
      </div>

    </>

  );

}