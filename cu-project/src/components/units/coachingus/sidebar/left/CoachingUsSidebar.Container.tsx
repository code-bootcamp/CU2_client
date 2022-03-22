import { useEffect, useState, memo } from "react";
import CoachingUsSidebarUI from "./CoachingUsSidebar.Presenter";

function CoachingUsSidebarPage() {
  const [favorList, setFavorList] = useState("");

  useEffect(() => {
    if (localStorage.getItem("favorList")) {
      setFavorList(localStorage.getItem("favorList") || "");
    }
  }, []);

  return <CoachingUsSidebarUI favorList={favorList} />;
}

export default memo(CoachingUsSidebarPage);
