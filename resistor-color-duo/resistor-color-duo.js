let supportedColor = [
  "black" ,"brown" ,"Red" ,"orange","yellow","Green","blue","violet","grey"
];
const reducer = (accumulator, currentValue) => accumulator + `${supportedColor.findIndex(sc => sc== currentValue)}`;
export const value = (colors) => new Number( colors.reduce(reducer,""));