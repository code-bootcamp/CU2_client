import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationLoginArgs } from "../../../src/commons/types/generated/types";
import { gql as plus, GraphQLClient } from "graphql-request";
import { useEffect } from "react";
const LOGIN = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password)
}
`

const PLUS_USER_SCORE = plus`
mutation plususerscore($score: Float!){
    plususerscore(score: $score){
        score
    }
}
`
export default function creatDummy () {
    

    const [login] = useMutation<Pick<IMutation,"login">,IMutationLoginArgs>(LOGIN);
      useEffect(() => {
          
          const loginAndPlus = async(index: number) => {
            const token = await (await login({variables: {email: `test${index}@test.com`, password: "asd123!@#"}})).data?.login;

            const graphQLClient = new GraphQLClient(
                process.env.NEXT_PUBLIC_GRAPHQL_URL!,
                {
                  headers: {
                    authorization: `Bearer ${
                      token
                    }`,
                  },
                  credentials: "include",
                }
              );

              const result = await graphQLClient.request(PLUS_USER_SCORE,{score: (27 - index) * 10});
          }

          for(let i = 0; i < 26; i++){
              loginAndPlus(i);
          }
      }, [])

    return <div/>;
}