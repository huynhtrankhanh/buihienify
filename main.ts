const stripDiacritics = (x: string) =>
  x
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");

const changeTrToCh = (x: string) => x.replace(/\btr/g, "ch").replace(/\bTr/g, "Ch");
const changeGiToD = (x: string) => x.replace(/\bgi/g, "d").replace(/\bGi/g, "D");
const changeXToS = (x: string) => x.replace(/\bx/g, "s").replace(/\bX/g, "S");

const buihienify = (x: string) => {
  const result = stripDiacritics(x)
    .split(" ")
    .map(word => changeTrToCh(changeGiToD(changeXToS(word))))
    .join(" ");
  return result;
};
