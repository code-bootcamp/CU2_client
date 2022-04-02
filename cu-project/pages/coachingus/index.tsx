import CoachingUsMain from "../../src/components/units/coachingus/main/CoachingUsMain.Container";
import { useEffect, useState } from "react";
import CoachingUsLanding from "../../src/components/units/coachingus/landing/CoachingUsLanding.Container";
import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function CoachingUsMainPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [isFavorites, setIsFavorites] = useState(false);
  const [favorList, setFavorList] = useState("");

  useEffect(() => {
    console.log("isLogin", isLogin);
    if (!isLogin) {
      if (localStorage.getItem("favorList")) {
        setFavorList(localStorage.getItem("favorList") || "");
      }
    } else {
      localStorage.removeItem("favorList");
    }
  }, []);

  return (
    <>
      {isFavorites || favorList ? (
        <CoachingUsMain />
      ) : (
        <CoachingUsLanding
          isLogin={isLogin}
          setFavorString={setFavorList}
          setIsFavorites={setIsFavorites}
        />
      )}
    </>
  );
}
