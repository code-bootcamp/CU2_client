import { useEffect, useState } from "react";
import CodingUsLanding from "../../src/components/units/codingus/landing/CodingUsLanding.Container";
import CodingUsMain from "../../src/components/units/codingus/main/CodingUsMain.Container copy";

export default function CodingUsMainPage() {
  const [isInterest, setIsInterest] = useState(false);
  const [interestList, setInterestList] = useState("");
  useEffect(() => {
    if (localStorage.getItem("interestList")) {
      setInterestList(localStorage.getItem("interestList") || "");
    }
  }, []);
  return <>
  {isInterest || interestList ? (
    <CodingUsMain />
  ) : (
    <CodingUsLanding setIsFavorites={setIsInterest} />
  )}
</>
}
