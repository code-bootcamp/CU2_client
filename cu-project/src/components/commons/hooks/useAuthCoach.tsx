import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      role
    }
  }
`;

export function useAuthCoach() {
  const { data } = useQuery(FETCH_MY_USER);
  const [isCoach, setIsCoach] = useState(false);

  useEffect(() => {
    if (data?.fetchmyuser.role === "COACH") {
      setIsCoach(true);
    }
  }, [data]);

  return {
    isCoach,
  };
}
