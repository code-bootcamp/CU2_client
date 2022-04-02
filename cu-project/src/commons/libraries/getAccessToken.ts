import { gql, GraphQLClient } from "graphql-request";
import useStore from "../store/store";

const RESTORE_ACCESS_TOKEN = gql`
  mutation resotreAccessToken {
    resotreAccessToken
  }
`;

export async function getAccessToken(accessToken : string) {
  try {
    // if(!accessToken)return
    const graphQLClient = new GraphQLClient(
      process.env.NEXT_PUBLIC_GRAPHQL_URL!,
      {
        credentials: "include",
      }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    console.log("result 여기가 계속 실행돼요", result);
    const newAccessToken = result.resotreAccessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return "";
  }
}
