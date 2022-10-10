export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [
        ...state,
        {
          firstName: action.user.firstName,
          lastName: action.user.lastName,
        },
      ];
    default:
      return state;
  }
};
