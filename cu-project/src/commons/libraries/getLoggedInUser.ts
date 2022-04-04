import { gql, GraphQLClient } from "graphql-request";
import { IQuery } from "../types/generated/types";

const FETCH_MY_USER = gql`
  query fetchmyuser {
    fetchmyuser {
      id
      name
      email
      nickname
      point
      score
      role
      phonenumber
      coachProfile {
        job
      }
    }
  }
`;

export const getLoggenInUser = async (accessToken: string) => {
  try {
    const graphQLClient = new GraphQLClient(
      process.env.NEXT_PUBLIC_GRAPHQL_URL!,
      {
        headers: {
          authorization: `Bearer ${
            accessToken
          }`,
        },
        credentials: "include",
      }
    );
    const result = await graphQLClient
      .request(FETCH_MY_USER)
    return result.fetchmyuser;
  } catch (error) {
  }
};
