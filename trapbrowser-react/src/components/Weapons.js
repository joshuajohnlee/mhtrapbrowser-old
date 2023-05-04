import {useState} from "react";
import weaponsList from '../assets/weapons.json';
import WeaponCard from "./WeaponCard";
const _ = require("lodash");

export default function Weapons() {
  
  const [currentFilter, setCurrentFilter] = useState(
    {
      power_type: "Tactical",
      min_power: 0,
      max_power: 7000,
      min_power_bonus: 0.1,
      max_power_bonus: 1,
      min_attr_bonus: 0,
      max_attr_bonus: 1,
      min_luck: 0,
      max_luck: 500,
      limited: true,
    }
  )

  const [currentSort, setCurrentSort] = useState(["title_req"])

  let filteredList = weaponsList.filter(x =>
    x.power_type == currentFilter.power_type &&
    x.power >= currentFilter.min_power &&
    x.power <= currentFilter.max_power &&
    x.power_bonus >= currentFilter.min_power_bonus &&
    x.power_bonus <= currentFilter.max_power_bonus &&
    x.attr_bonus >= currentFilter.min_attr_bonus &&
    x.attr_bonus <= currentFilter.max_attr_bonus &&
    x.luck >= currentFilter.min_luck &&
    x.luck <= currentFilter.max_luck &&
    x.limited == currentFilter.limited
    );

  let sortedAndFilteredList = _.sortBy(filteredList, currentSort);

  return(
    <>
      <div className="card-container">
        {sortedAndFilteredList.map((weapon) => (
          <WeaponCard weapon={weapon}/>
        ))}
      </div>
    </>
  );

}