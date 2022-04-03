import { gql } from "@apollo/client";

export const FETCH_BLOG_DATA_COMMON = gql`
    query fetchBlogCommentorderbycreate($blogid: String!){
        fetchBlogCommentorderbycreate(blogid: $blogid){
            id
        }
    }
`
export const FETCH_BLOG_DATA_LOGGENIN = gql`
    query fetchBloglike{
        fetchBloglike{
            id
        }
    }
`
        