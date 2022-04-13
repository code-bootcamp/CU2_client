const calcTimeDiff = (date: Date) => {
  let dateString = "";
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diff / (1000 * 60 * 60));
  const diffMin = Math.floor(diff / (1000 * 60));
  const diffSec = Math.floor(diff / 1000);

  if (diffSec < 60) dateString = `방금 전`;
  else if (diffMin < 60) dateString = `${diffMin}분 전`;
  else if (diffHour < 24) dateString = `${diffHour}시간 전`;
  else if (diffDay < 8) dateString = `${diffDay}일 전`;

  return dateString;
};

export const getTimeDiff = (dateTime: string | Date) => {
  const date = new Date(dateTime);
  let dateString = calcTimeDiff(date);
  if (!dateString) dateString = String(dateTime).split("T")[0];
  return dateString;
};

export const getDateString = (dateTime: string | Date, separator?: string) => {
  const date = new Date(dateTime);
  let dateString = calcTimeDiff(date);
  if (!dateString) dateString = String(dateTime).split("T")[0];
  if (separator) {
    const newArr = dateString.split("");
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === "-") newArr[i] = separator;
    }
    dateString = newArr.join("");
  }
  return dateString;
};

const day = ["일", "월", "화", "수", "목", "금", "토"];
export const getShortDateString = (dateTime: string | Date) => {
  const date = new Date(dateTime);
  let dateString = calcTimeDiff(date);
  if (!dateString)
    dateString = `${date.getMonth() + 1}.${date.getDate()}.${
      day[date.getDay()]
    }`;
  return dateString;
};

export const getYYYYMMDD = (dateTime: string | Date) => {
  const date = new Date(dateTime);
  let dateString = calcTimeDiff(date);
  if (!dateString)
    dateString = `${date.getFullYear()}.${
      date.getMonth() + 1
    }.${date.getDate()}`;
  return dateString;
};
