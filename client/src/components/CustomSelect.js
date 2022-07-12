import React from "react";
import Select from "react-select";

const aquaticCreatures = [
  { label: "Shark", value: "Shark" },
  { label: "Dolphin", value: "Dolphin" },
  { label: "Whale", value: "Whale" },
  { label: "Octopus", value: "Octopus" },
  { label: "Crab", value: "Crab" },
  { label: "Lobster", value: "Lobster" },
];

function CustomSelect(props) {
  return (
    <div>
      <Select
        options={aquaticCreatures}
        onChange={(opt) => console.log(opt.label, opt.value)}
      />
    </div>
  );
}

export default CustomSelect;
