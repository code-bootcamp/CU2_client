import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import useStore from "../../../commons/store/store";

const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      role
    }
  }
`;

export function useAuth() {
  const router = useRouter();

  const accessToken = useStore((state) => state.accessToken);
  const [isLogin, setIsLogin] = useState(false);

  const { data } = useQuery(FETCH_MY_USER);
  const [isCoach, setIsCoach] = useState(false);

  useEffect(() => {
    async function Auth() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          alert("로그인을 먼저 해주세요!!!");
          router.push("/login");
        } else {
          setIsLogin(true);
        }
      }
    }

    Auth();
    if (data?.fetchmyuser.role !== "COACH") {
      setIsCoach(true);
    }
  }, []);

  return {
    isLogin,
    isCoach,
  };
}
