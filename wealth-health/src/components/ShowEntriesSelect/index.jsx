import Select from "react-select";
import { styleSelect, themeSelect } from "../../services/themeStyleSelect";

const ShowEntriesSelect = ({ onChange, options, defaultValue }) => {
  const handleSelectOption = (item) => {
    onChange(parseInt(item.value));
  };

  return (
    <div className="select-entries-container">
      <span>Show</span>
      <Select
        name={"entries-select"}
        options={options}
        onChange={handleSelectOption}
        defaultValue={defaultValue}
        styles={styleSelect}
        theme={themeSelect}
      />
      <span>entries</span>
    </div>
  );
};

export default ShowEntriesSelect;
