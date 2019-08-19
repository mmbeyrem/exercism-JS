export const transform = (oldScore) => {
  let r = {}
  for (let [key, value] of Object.entries(oldScore)) {
    value.forEach(vi => r[`${vi}`.toLowerCase()]= new Number(key));
}
return r;
};
