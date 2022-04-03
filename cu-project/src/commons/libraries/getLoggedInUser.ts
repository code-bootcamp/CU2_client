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
      .catch((el) => console.log(el));
    return result.fetchmyuser;
  } catch (error) {
    if (error instanceof Error) console.log("getLoggenInUser", error.message);
  }
};
