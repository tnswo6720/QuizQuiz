// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";
import "react-quill/dist/quill.snow.css"; // 여기에 추가

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      {/* Fragment를 사용하여 여러 자식 요소들을 하나로 묶습니다. */}
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloSetting>
  );
}
