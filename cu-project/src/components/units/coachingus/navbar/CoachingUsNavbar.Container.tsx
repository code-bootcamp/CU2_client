import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import CoachingUsNavbarUI from "./CoachingUsNavbar.Presenter";

export default function CoachingUsNavbarPage() {
  const router = useRouter();
  const { moveToPage } = useMoveToPage();
  const currentPath = router.asPath;

  return (
    <CoachingUsNavbarUI moveToPage={moveToPage} currentPath={currentPath} />
  );
}
