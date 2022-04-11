import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import useStore from "../../../commons/store/store";
import { IQuery } from "../../../commons/types/generated/types";

const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      id
      email
      name
      phonenumber
      nickname
      score
      point
      role
    }
  }
`;

export function useGetUserInfo() {
  const { accessToken, setAccessToken, setUserInfo } = useStore(
    (state) => state
  );
  const [isLogin, setIsLogin] = useState(false);

  const [fetchmyuser, { data }] =
    useLazyQuery<Pick<IQuery, "fetchmyuser">>(FETCH_MY_USER);

  useEffect(() => {
    async function Auth() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        setAccessToken(newAccessToken);
        if (newAccessToken) {
          setIsLogin(true);
          await fetchmyuser();
          if (data) setUserInfo(data.fetchmyuser);
        }
      }
    }

    Auth();
  }, []);

  return {
    isLogin,
  };
}
