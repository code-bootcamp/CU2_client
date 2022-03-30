import { useEffect, useState } from "react";
import { ISearchProps } from "../../../../commons/types/types";
import SearchUI from "./Search.Presenter";
import {} from "./Search.Queries";
import { useRouter } from "next/router";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

export default function Search(props: ISearchProps) {
  const router = useRouter();
  const [gubun, setGubun] = useState(router.query.category);

  const onClickPeriodGubun = (gubun: string) => () => {
    setGubun(gubun);
  };

  useEffect(() => {
    setGubun(router.query.category);
  }, [router]);

  return <SearchUI gubun={gubun} onClickPeriodGubun={onClickPeriodGubun} />;
}
