export function splitMarkDown(mdString: string) {
  const splitArr = mdString?.split(/!\[([-_.]?[0-9a-zA-Z])*\]\(/);
  const gubunArr = [];
  let cnt = 0;
  for (let i = 0; i < splitArr?.length; i++) {
    if (!splitArr[i]) continue;
    if (splitArr[i].startsWith("https")) {
      gubunArr.push({
        gubun: "image",
        value: splitArr[i].split(")")[0],
        index: cnt,
      });
      cnt++;
      if (splitArr[i].split(")")[1]) {
        gubunArr.push({
          gubun: "text",
          value: splitArr[i]
            .split(")")
            .filter((_, idx) => idx !== 0)
            .join(")"),
          index: cnt,
        });
        cnt++;
      }
    } else {
      gubunArr.push({ gubun: "text", value: splitArr[i], index: cnt });
      cnt++;
    }
  }

  return gubunArr;
}
export const getIndexFromMD = (mdString: string) => {
  if (!mdString) return [""];
  const splitArr = mdString.split("\n");
  const indexArr = [];
  let isSummary = false;
  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i].startsWith("```")) isSummary = !isSummary;
    if (isSummary) continue;
    if (splitArr[i].startsWith("#")) {
      if (splitArr[i].startsWith("####")) continue;
      indexArr.push(splitArr[i]);
    }
  }
  return indexArr;
};

export const getImagesFromMD = (mdString: string) => {
  const splitArr = splitMarkDown(mdString);
  const images = splitArr
    .filter((el) => el.gubun === "image")
    .map((el) => el.value);
  return images;
};

export const getTextFromMD = (mdString: string) => {
  let text = mdString;
  while (
    text.indexOf("\n") >= 0 ||
    text.indexOf("#") >= 0 ||
    text.indexOf("*") >= 0 ||
    text.indexOf("`") >= 0
  ) {
    text = text.replace(/\n+|#+|\*|`/, "");
  }
  const splitArr = splitMarkDown(text);

  if(splitArr.filter(el => el.gubun === "text").length < 1) return "";
  return splitArr.filter(el => el.gubun === "text")[0].value.trimStart() ?? "";
};
