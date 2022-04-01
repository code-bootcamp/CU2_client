import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ISearchProps } from "../../../../commons/types/types";
import SearchUI from "./Search.Presenter";
import {} from "./Search.Queries";

export default function Search(props: ISearchProps) {
  const router = useRouter();
  const [category, setCategory] = useState(router.query.category);

  const onClickPeriodCategory = (gubun: string) => () => {
    setCategory(gubun);
  };

  useEffect(() => {
    setCategory(router.query.category);
  }, [router]);

  return (
    <SearchUI
      category={category}
      onClickPeriodCategory={onClickPeriodCategory}
    />
  );
}
