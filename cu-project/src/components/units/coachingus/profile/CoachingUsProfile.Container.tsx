import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ICoachingUsProfileProps } from "../../../../commons/types/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import Loading from "../../../commons/Loading/Loading";
import CoachingUsProfileUI from "./CoachingUsProfile.Presenter";
import { FETCH_COACH_COLUMNS } from "./CoachingUsProfile.Queries";

export default function CoachingUsProfile(props: ICoachingUsProfileProps) {
  const router = useRouter();
  const [component, setComponent] = useState("/");
  const [isLoading, setIsLoading] = useState(true);
  const [coachColumnsList, setCoachColumnsList] = useState([]);

  const { data } = useQuery(FETCH_COACH_COLUMNS);

  const { moveToPage } = useMoveToPage();

  const getCoachColumns = () => {
    const result = data?.fetchColumnList?.filter(
      (column) => column.user.id === router.query.coachId
    );
    setCoachColumnsList(result);
  };

  useEffect(() => {
    getCoachColumns();
  }, [isLoading, data]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <CoachingUsProfileUI
      moveToPage={moveToPage}
      setComponent={setComponent}
      component={component}
      coachColumnsList={coachColumnsList}
    />
  );
}
