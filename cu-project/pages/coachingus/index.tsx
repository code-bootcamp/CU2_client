import CoachingUsMain from "../../src/components/units/coachingus/main/CoachingUsMain.Container";
import { useEffect, useState } from "react";
import CoachingUsLanding from "../../src/components/units/coachingus/landing/CoachingUsLanding.Container";

export default function CoachingUsMainPage() {
  const [isFavorites, setIsFavorites] = useState(false);
  const [favorList, setFavorList] = useState("");

  useEffect(() => {
    if (localStorage.getItem("favorList")) {
      setFavorList(localStorage.getItem("favorList") || "");
    }
    console.log(favorList);
  }, []);

  return (
    <>
      {isFavorites || favorList ? (
        <CoachingUsMain />
      ) : (
        <CoachingUsLanding setIsFavorites={setIsFavorites} />
      )}
    </>
  );
}
