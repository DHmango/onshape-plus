export default function colorStringToRGBA(colorString: string) {
  // the reason i can't wholly rely on the fakestyle method is that some things, like oklch(0.1 0.1 100 /0.5) will not be converted to rgba

  let toReturn = [0, 0, 0, 0];

  //check if its valid using the fakeStyle method
  const fakeStyle = new Option().style;
  fakeStyle.color = colorString; // sets the color to the color provided. it won't stay if invalid. ty stack overflow.
  if (fakeStyle.color == "") {
  } else {
    const cleanedString = fakeStyle.color;
    //if it starts with a #, check the length- 5 or 9 characters has alpha nvm, cleaned uses rgba :sob:
    if (cleanedString.includes("rgba(")) {
      const rgb = cleanedString.slice(5, -1).split(", "); //takes away rgba() and splits it
      toReturn[0] = Number(rgb[0]);
      toReturn[1] = Number(rgb[1]);
      toReturn[2] = Number(rgb[2]);
      toReturn[3] = Number(rgb[3]); // shut up shut up shut up shut up shut
      // if it doesn't, check if it has a slash. I'm p sure all other alphas have a slash. replace slash and beyond with ")" and feed that into canvas method. whats after the slash, you should check if its percent or decimal, and blah blah
    } else if (cleanedString.includes("/")) {
      const colorCanvas = document.createElement("canvas"); // copied from similar thing in main body... but maybe thats gone as you read this
      colorCanvas.width = colorCanvas.height = 1;
      const colorCanvasContext = colorCanvas.getContext("2d", {
        willReadFrequently: true,
      });
      if (colorCanvasContext !== null) {
        // to appease the ts gods... theres no backup plan
        colorCanvasContext.fillStyle = `${cleanedString.split("/")[0]})`;
        colorCanvasContext.fillRect(0, 0, 1, 1);
        const rgb = colorCanvasContext.getImageData(0, 0, 1, 1).data;
        toReturn[0] = rgb[0];
        toReturn[1] = rgb[1];
        toReturn[2] = rgb[2];
      }
      toReturn[3] = Number(cleanedString.split("/")[1].slice(0, -1));
    } else {
      const colorCanvas = document.createElement("canvas"); // copied from similar thing in main body... but maybe thats gone as you read this
      colorCanvas.width = colorCanvas.height = 1;
      const colorCanvasContext = colorCanvas.getContext("2d", {
        willReadFrequently: true,
      });
      if (colorCanvasContext !== null) {
        colorCanvasContext.fillStyle = cleanedString;
        colorCanvasContext.fillRect(0, 0, 1, 1);
        const rgb = colorCanvasContext.getImageData(0, 0, 1, 1).data;
        toReturn[0] = rgb[0];
        toReturn[1] = rgb[1];
        toReturn[2] = rgb[2];
      }
      toReturn[3] = 1;
    }
  }
  return toReturn;
}
