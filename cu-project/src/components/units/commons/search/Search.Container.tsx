import { useState } from "react";
import { ISearchProps } from "../../../../commons/types/types";
import SearchUI from "./Search.Presenter";
import {} from "./Search.Queries";
import Router from "next/router";

export default function Search(props: ISearchProps) {
  const [gubun, setGubun] = useState("Total");
  const onClickPeriodGubun = (gubun: string) => () => {
    setGubun(gubun);
  };

  const SendQuery = () => {
    Router.push({
      pathname: `/search/`,
      query: { gubun: gubun, keyword: "keyword" },
    });
  };

  return (
    <SearchUI
      SendQuery={SendQuery}
      gubun={gubun}
      onClickPeriodGubun={onClickPeriodGubun}
    />
  );
}
