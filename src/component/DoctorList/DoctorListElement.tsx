// map of the list of doctors for getDataApi/DoctorsList
import React from "react";
import { TDoctorListProps, DoctorInfo } from "./index";


const Doctors: React.FC<TDoctorListProps> = ({ items }) => {
  console.log("props", items && items);
  return (
    <div>
      <ul>
        {items &&
          items.map((item: DoctorInfo) => (
            <li key={item.id}>
              <span>{item.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Doctors;
