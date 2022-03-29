import { useEffect, useState } from "react";
import { ISearchProps } from "../../../../commons/types/types";
import SearchUI from "./Search.Presenter";
import {} from "./Search.Queries";
import Router from "next/router";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

export default function Search(props: ISearchProps) {
  // const [gubun, setGubun] = useState(String(props.query.category));
  const onClickPeriodGubun = (gubun: string) => () => {
    SendQuery(gubun);
  };

  const SendQuery = (gubun) => {
    Router.push({
      pathname: `/search/`,
      query: { gubun: gubun, keyword: props.query.keyword },
    });
  };

  // useEffect(() => {
  //   setGubun(props.query.category);
  //   console.log("gugugugu", gubun);
  // }, []);

  return (
    <SearchUI
      // SendQuery={SendQuery}
      query={props.query}
      // gubun={gubun}
      onClickPeriodGubun={onClickPeriodGubun}
    />
  );
}
