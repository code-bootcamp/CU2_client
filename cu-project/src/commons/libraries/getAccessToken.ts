import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation resotreAccessToken {
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
    const newAccessToken = result.resotreAccessToken;                        
    return newAccessToken;
  } catch (error) {
    return "";
  }
}
