import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import backgroundMobile from "images/pattern-background-mobile.svg";
import styles from "styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />

        <title>Order Summary Card</title>
      </Head>
      <main>
        <Image src={backgroundMobile} />
        {/* Order Summary You can now listen to millions of songs, audiobooks, and
        podcasts on any device anywhere you like! Annual Plan $59.99/year Change
        Proceed to Payment Cancel Order */}

        <div className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Jalen Greene</a>.
        </div>
      </main>
    </>
  );
};

export default Home;
