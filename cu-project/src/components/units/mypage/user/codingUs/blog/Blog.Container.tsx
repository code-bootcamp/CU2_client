import { useQuery } from "@apollo/client";
import {} from "../../../../../../commons/types/types";
import UserBlogUI from "./Blog.Presenter";
import { FETCH_MY_BLOG } from "./Blog.Queries";

export default function UserBlog() {
  const { data } = useQuery(FETCH_MY_BLOG);

  return <UserBlogUI data={data} />;
}
