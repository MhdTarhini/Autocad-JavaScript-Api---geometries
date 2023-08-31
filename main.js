const listOfCommands = {
  square: () => Acad.Editor.executeCommand("RECTANGLE", "0,0", "10,10"),
  circle: () => Acad.Editor.executeCommand("CIRCLE 17.5,5,0 5"),
  triangle: () => Acad.Editor.executeCommand("PLINE 25,0 30,10 35,0 25,0"),
};

const selectShape = (shape) => listOfCommands[shape]();
