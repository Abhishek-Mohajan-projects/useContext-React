export const initialState = {
  users: [
    { id: 1, username: "Anisul Islam" },
    { id: 2, username: "Alex" },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      const filteredUser = [...state.users].filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: filteredUser,
      };

    default:
      return state;
  }
};
