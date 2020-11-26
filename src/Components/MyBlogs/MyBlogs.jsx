import React, { useState } from "react";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import MultiSelect from "react-multi-select-component";
import Timeline from "./Timeline";
export const MyBlogs = () => {
  const [selected, setSelected] = useState([]);
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const options = [
    { label: "Grapes ", value: "grapes" },
    { label: "Mango ", value: "mango" },
    { label: "Strawberry ", value: "strawberry", disabled: true },
    { label: "Watermelon ", value: "watermelon" },
    { label: "Pear ", value: "pear" },
    { label: "Apple ", value: "apple" },
    { label: "Tangerine ", value: "tangerine" },
    { label: "Pineapple ", value: "pineapple" },
    { label: "Peach ", value: "peach" },
  ];

  return (
    <div>
      <CountryDropdown value={country} onChange={(e) => setCountry(e)} />
      <RegionDropdown value={region} onChange={(e) => setRegion(e)} />
      <h1>Select Fruits</h1>
      <pre>{selected.length > 0 && JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
      <Timeline />
    </div>
  );
};
