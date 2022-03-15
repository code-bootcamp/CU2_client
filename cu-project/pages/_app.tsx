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
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "APIURL",
    credentials: "include",
  });

  const client = new ApolloClient({
    // link: ApolloLink.from([errorLink, uploadLink]),
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
