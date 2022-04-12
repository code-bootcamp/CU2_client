import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../../../commons/types/generated/types";

import UserLikePostsUI from "./Likeposts.Presenter";
import { FETCH_BLOG_LIKE } from "./Likeposts.Queries";

export default function UserLikePosts() {
  const { data } = useQuery<Pick<IQuery, "fetchBloglike">>(FETCH_BLOG_LIKE);

  return <UserLikePostsUI data={data} />;
}
