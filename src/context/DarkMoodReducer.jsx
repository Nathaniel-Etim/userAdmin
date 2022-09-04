const DarkModeReducer = (state, action) => {
  if (action.type === `LIGHT`) {
    return {
      darkMode: false,
    };
  }
  if (action.type === `DARK`) {
    return {
      darkMode: true,
    };
  }
  if (action.type === `TOOGLE`) {
    return {
      darkMode: !state.darkMode,
    };
  }
};

export default DarkModeReducer;
