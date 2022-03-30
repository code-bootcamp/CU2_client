import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    resotreAccessToken
  }
`;

export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
      process.env.NEXT_PUBLIC_GRAPHQL_URL!,
      {
        credentials: "include",
      }
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);

    // console.log("두번째로 실행되어야 하는거");
    const newAccessToken = result.resotreAccessToken;

    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
