import { useQuery } from "@apollo/client";
import { useState } from "react";

import UserLikePostsUI from "./Likeposts.Presenter";
import { FETCH_BLOG_LIKE } from "./Likeposts.Queries";

export default function UserLikePosts() {
  const { data } = useQuery(FETCH_BLOG_LIKE);

  return <UserLikePostsUI data={data} />;
}
