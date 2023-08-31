const listOfCommands = {
  square: () => Acad.Editor.executeCommand(`RECTANG 0,0,0 10,10,0`),
  circle: () => Acad.Editor.executeCommand(`CIRCLE 17.5,5,0 5`),
  triangle: () => Acad.Editor.executeCommand(`PLINE 25,0 30,10 35,0 25,0 c`),
};

const selectShape = (shape) => listOfCommands[shape]();
