import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import backgroundMobile from "images/pattern-background-mobile.svg";
import backgroundDesktop from "images/pattern-background-desktop.svg";
import hero from "images/illustration-hero.svg";
import iconMusic from "images/icon-music.svg";
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
      <main className={styles["main"]}>
        <div className={styles["background__mobile"]}>
          <Image src={backgroundMobile} />
        </div>

        <div className={styles["background__desktop"]}>
          <Image src={backgroundDesktop} />
        </div>

        <section className={styles["section"]}>
          <Image src={hero} layout="responsive" />

          <div className={styles["section__content"]}>
            <h1>Order Summary</h1>

            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>

            <section className={styles["section__plan"]}>
              <div className={styles["img-container"]}>
                <Image src={iconMusic} layout="responsive" />
              </div>

              <div className={styles["price"]}>
                <span>Annual Plan</span>
                <span>$59.99/year</span>
              </div>

              <a href="#">Change</a>
            </section>

            <button className={styles["section__payment"]}>
              Proceed to Payment
            </button>

            <button className={styles["section__cancel"]}>Cancel Order</button>
          </div>
        </section>

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
