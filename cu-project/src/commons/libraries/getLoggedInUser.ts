import { gql, GraphQLClient } from "graphql-request";

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
  if(!accessToken) return;
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
      .request(FETCH_MY_USER).catch();
    return result.fetchmyuser;
  } catch (error) {
  }
};
