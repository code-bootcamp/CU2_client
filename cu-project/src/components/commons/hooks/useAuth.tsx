import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export function useAuth() {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    async function Auth() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          alert("로그인을 먼저 해주세요!!!");
          router.push("/accounts/login");
        } else {
          setIsLogin(false);
        }
      }
    }
    Auth();
  }, []);

  return {
    isLogin,
  };
}
