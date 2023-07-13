const getCategoryBackgroundColor = (theme, value) => {
  switch (value) {
    case "OPEN":
      return theme.colors.open;

    case "CONTACTED":
      return theme.colors.contacted;

    case "WRITTENTEST":
      return theme.colors.writtentest;

    case "WRITTENTESTCOMPLETED":
      return theme.colors.writtencompleted;

    default:
      return theme.colors.primary;
  }
};

export default getCategoryBackgroundColor;
