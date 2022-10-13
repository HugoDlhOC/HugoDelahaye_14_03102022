export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [
        ...state,
        {
          firstName: action.user.firstName,
          lastName: action.user.lastName,
          dateOfBirth: action.user.dateOfBirth,
          startDate: action.user.startDate,
          street: action.user.street,
          state: action.user.state,
          city: action.user.city,
          zipCode: action.user.zipCode,
          department: action.user.department,
        },
      ];
    default:
      return state;
  }
};
