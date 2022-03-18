// 81392730 => 81,392,730 으로 바꿔주는 hooks
export default function getMoney(number: number | string) {
  const result = String(number)
    .split("")
    .map((el, index) => {
      if (
        String(number).length >= 4 &&
        (String(number).length - index) % 3 === 0 &&
        index !== 0
      ) {
        return `,${el}`;
      } else {
        return el;
      }
    });

  return result;
}
