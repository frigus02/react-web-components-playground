import { useState } from "react";
import Head from "next/head";
import MyGreeting from "../MyGreetingSSR";

function Home() {
  const [waved, setWaved] = useState(0);
  const greetingProps = {
    salutation: "Hi",
    traits: ["very nice", "super smart"],
    onWave: e => setWaved(e.detail)
  };

  return (
    <div className="Home">
      <Head>
        <title>React &amp; Web Components Playground</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MyGreeting {...greetingProps}>people</MyGreeting>
      <small>you waved {waved} times</small>
      <style jsx>{`
        .Home {
          text-align: center;
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        }
      `}</style>
      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}

export default Home;
