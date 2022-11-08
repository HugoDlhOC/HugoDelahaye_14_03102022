import "react-dropdown/style.css";
import Select from "react-select/base";
import { useState } from "react";
import PropTypes from "prop-types";

/**
 * This component represents the select menu which uses the npm React-select package, the data is expected in props
 * @param data
 * @returns JSX
 */
const DropDownMenuComponent = ({ data }) => {
  const options = [];
  const [selectedOption, setSelectedOption] = useState(null);
  data.forEach((item) => {
    options.push(item.name);
  });
  return (
    <div>
      <Select
        onChange={setSelectedOption}
        defaultValue={selectedOption}
        options={options}
      />
    </div>
  );
};

export default DropDownMenuComponent;

DropDownMenuComponent.propTypes = {
  data: PropTypes.any,
};
