export const pizzaReducer = (state, action) => {
    switch (action.type) {
      case "pizza": {
        return { ...state, [action.field]: action.value };
      }
      case "pizzaInfo": {
        return {
          ...state,
          isDataVisible: !state.isDataVisible,
          action: action.value,
        };
      }
      default: {
        return state;
      }
    }
  };