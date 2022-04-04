import { gql } from "@apollo/client";

export const FETCH_MY_COLUMN_COMMENT = gql`
    query fetchMyColumnComment{
        fetchMyColumnComment{
           id
           contents
            
        }
    };
`;
