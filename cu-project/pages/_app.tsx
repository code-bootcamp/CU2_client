import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/app";
import { createUploadLink } from "apollo-upload-client";
import "../styles/globals.css";
import { Global } from "@emotion/react";
import { onError } from "@apollo/client/link/error";
import { globalStyles, landingCss } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createContext, Dispatch, SetStateAction, useEffect } from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import useStore from "../src/commons/store/store";
import { getLoggenInUser } from "../src/commons/libraries/getLoggedInUser";
import { useRouter } from "next/router";

// app.tsx 타입 추가
interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const setUserInfo = useStore((state) => state.setUserInfo);
  const { accessToken, setAccessToken } = useStore((state) => state);
  const uploadLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    headers: accessToken && { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);
            operation.setContext({
              headers: {
                ...operation.getContext().response.headers,
                Authorization: `Bearer ${newAccessToken}` || null,
              },
            });
            return forward(operation);
          });
        }
      }
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
    // refresh토큰 관련 이슈
    if (sessionStorage.getItem("accessToken"))
      setAccessToken(sessionStorage.getItem("accessToken") || "");

    if (sessionStorage.getItem("accessToken")) {
      getLoggenInUser().then((userInfo) => {
        console.log("getLoggenInUser", userInfo);
        setUserInfo(userInfo);
      });
      //   if (accessToken)
      //   setAccessToken(sessionStorage.getItem("accessToken") || "");

      // if (accessToken) {
      //   getLoggenInUser().then((userInfo) => {
      //     console.log("getLoggenInUser", userInfo);
      //     setUserInfo(userInfo);
      //   });
      // }
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <Global styles={router.asPath === "/" ? landingCss : globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
