import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const DropDownMenuComponent = ({ data }) => {
  const options = [];
  data.forEach((item) => {
    options.push(item.name);
  });
  const defaultOption = options[0];
  return (
    <div>
      <Dropdown
        options={options}
        value={defaultOption}
        placeholder="Select an option"
      />
    </div>
  );
};

export default DropDownMenuComponent;
