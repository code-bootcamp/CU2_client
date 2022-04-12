import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../../../commons/types/generated/types";
import {} from "../../../../../../commons/types/types";
import UserBlogUI from "./Blog.Presenter";
import { FETCH_MY_BLOG } from "./Blog.Queries";

export default function UserBlog() {
  const { data } = useQuery<Pick<IQuery, "fetchmyBlog">>(FETCH_MY_BLOG);

  return <UserBlogUI data={data} />;
}
