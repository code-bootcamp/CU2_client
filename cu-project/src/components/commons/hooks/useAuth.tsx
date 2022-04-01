import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import useStore from "../../../commons/store/store";

export function useAuth() {
  const router = useRouter();
  const accessToken = useStore((state) => state.accessToken);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    async function Auth() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          alert("로그인을 먼저 해주세요!!!");
          router.push("/login");
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
