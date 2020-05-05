import React from "react";
import Head from "next/head";
import HomeContainer from "../components/HomeContainer/HomeContainer";

class Home extends React.Component {
  render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Home</title>
        </Head>
        <HomeContainer />
      </>
    );
  }
}

export default Home;
