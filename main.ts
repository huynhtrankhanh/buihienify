const stripDiacritics = (x: string) =>
  x
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d").replace(/Đ/g, "D");

const changeTrToCh = (x: string) => x.replace(/^tr/, "ch").replace(/^Tr/, "Ch");
const changeGiToD = (x: string) => x.replace(/^gi/, "d").replace(/^Gi/, "D");
const changeXToS = (x: string) => x.replace(/^x/, "s").replace(/^X/, "S");

const buihienify = (x: string) => {
  const [result] = [x]
    .map(([x]) => stripDiacritics(x))
    .map(([x]) => changeTrToCh(x))
    .map(([x]) => changeGiToD(x))
    .map(([x]) => changeXToS(x))
}
