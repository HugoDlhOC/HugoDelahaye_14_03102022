import Select from "react-select";
import { styleSelect, themeSelect } from "../../services/themeStyleSelect";

const ShowEntriesSelect = ({ onChange, options, defaultValue }) => {
  const handleSelectOption = (item) => {
    onChange(parseInt(item.value));
  };

  return (
    <div className="select-entries-container">
      <label htmlFor={"entries-select"}>Show</label>
      <Select
        id={"entries-select"}
        options={options}
        onChange={handleSelectOption}
        defaultValue={defaultValue}
        styles={styleSelect}
        theme={themeSelect}
        aria-label={"entries-select"}
      />
      <span>entries</span>
    </div>
  );
};

export default ShowEntriesSelect;
