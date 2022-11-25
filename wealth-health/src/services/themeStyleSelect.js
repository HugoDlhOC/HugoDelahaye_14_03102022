export const styleSelect = {
  singleValue: (baseStyles) => ({
    ...baseStyles,
    fontSize: "15px",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    fontSize: "15px",
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    height: 34,
    minHeight: 34,
    alignContent: "center",
    border: "2px solid #564949",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    width: 30,
    minWidth: 30,
    alignContent: "center",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    width: 0,
    minWidth: 0,
  }),
};

export const themeSelect = (theme) => ({
  ...theme,
  borderRadius: 5,
  colors: {
    ...theme.colors,
    primary25: "white",
    primary: "#564949",
  },
});
