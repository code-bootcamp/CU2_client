import { useRouter } from "next/router";
import React from "react";
import CoachingUsCommentsUI from "./CoachingUsComments.Presenter";
import {} from "./CoachingUsComments.Queries";

export default function CoachingUsCommentsPage() {
  const coachComments = [
    {
      id: 0,
      title: "멘토질문글멘토질문글멘토질문글멘토질문글",
      contents:
        "멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. ",
      hits: 250,
      likes: 124,
    },
    {
      id: 1,
      title: "멘토질문글멘토질문글멘토질문글멘토질문글",
      contents: "멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. ",
      hits: 250,
      likes: 124,
    },
    {
      id: 2,
      title: "멘토질문글멘토질문글멘토질문글멘토질문글",
      contents: "멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. ",
      hits: 250,
      likes: 124,
    },
    {
      id: 3,
      title: "멘토질문글멘토질문글멘토질문글멘토질문글",
      contents: "멘토 답변 글입니다. 멘토 답변 글입니다. 멘토 답변 글입니다. ",
      hits: 250,
      likes: 124,
    },
  ];
  return <CoachingUsCommentsUI coachComments={coachComments} />;
}
