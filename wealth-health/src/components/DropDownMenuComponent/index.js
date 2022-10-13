import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-select/base";
import { useState } from "react";

const DropDownMenuComponent = ({ data }) => {
  const options = [];
  const [selectedOption, setSelectedOption] = useState(null);
  data.forEach((item) => {
    options.push(item.name);
  });
  const defaultOption = options[0];
  return (
    <div>
      <Select
        onChange={setSelectedOption}
        defaultValue={selectedOption}
        options={options}
      />
      {/*onChange disponible*/}
    </div>
  );
};

export default DropDownMenuComponent;
