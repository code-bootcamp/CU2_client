

    export function splitMarkDown (mdString:string) {
        const splitArr = mdString.split(/!\[([-_.]?[0-9a-zA-Z])*\]\(/);
        const gubunArr = [];
        let cnt = 0;
        for (let i = 0; i < splitArr.length; i++) {
          if (!splitArr[i]) continue;
          if (splitArr[i].startsWith("data")) {
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