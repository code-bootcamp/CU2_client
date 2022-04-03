import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchblogoneArgs } from "../../../../../src/commons/types/generated/types";
import CodingUsBlogWrite from "../../../../../src/components/units/codingus/blog/write/BlogWrite.Container";


export const FETCH_BLOG_ONE = gql`
  query fetchblogone($blogid: String!){
    fetchblogone(blogid: $blogid){
      id
      title
      contents
      user {
        nickname
      }
      like
      dislike
      blogtag {
        tag
      }
      blogcategorytag {
        tag
      }
      createAt
    }
  }
`;


export default function CodingUsBlogEditPage () {
    const router = useRouter();
    const { data } = useQuery<Pick<IQuery, "fetchblogone">, IQueryFetchblogoneArgs>(FETCH_BLOG_ONE,{variables: {blogid: String(router.query.blogId)}}) 
    return <CodingUsBlogWrite isEdit={true} data={data?.fetchblogone}/>;
}