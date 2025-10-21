export default function AppReducer(state, action) {
  switch (action.type) {
    case "check":
      return state.map((item) =>
        item.id === action.id ? { ...item, checked: !item.checked } : item
      );

    case "rate":
      return state.map((item) =>
        item.id === action.id ? item.rating >= 10 ? { ...item, rating: 0 } : { ...item, rating: item.rating + 1 } : item
      );
    case "delete":
      return state.filter((el) => el.id != action.id);
  }
}
