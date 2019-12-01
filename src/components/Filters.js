import React from "react";
import { breedOptions } from "../constants";
import classNames from "classnames";

function Filters(props) {
  console.log(props.activeFilter);
  return (
    <div>
      <ul>
        <h4 className="my-4 ">Cins</h4>
        <li
          className={classNames({
            "list-group-item": true,
            active: !props.activeFilter
          })}
          onClick={() => {
            props.onFilterPets("");
          }}
        >
          Hepsi
        </li>
        {breedOptions.map(breed => {
          return (
            <li
              key={breed}
              className={classNames({
                "list-group-item": true,
                active: breed === props.activeFilter
              })}
              onClick={e => {
                e.preventDefault();
                props.onFilterPets(breed);
              }}
            >
              {breed}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filters;
