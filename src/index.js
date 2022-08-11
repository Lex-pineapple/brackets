module.exports = function check(str, bracketsConfig) {
  const brConf = bracketsConfig;
  let brStr = str.split("");
  console.log(brConf);
  console.log(brStr);
  let brCycler = () => {
    for (let i = 0; i < brConf.length; i++) {
      for (let k = 0; k < brStr.length; k++) {
        while (brStr[k] == brConf[i][0] && brStr[k+1] == brConf[i][1]) {
          brStr.splice(k, 2);
          brCycler();
        }
      }
    }
  }
  brCycler();
  return brStr.length > 0 ? false : true;
}