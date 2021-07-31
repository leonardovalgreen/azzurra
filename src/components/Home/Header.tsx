/* eslint-disable @next/next/no-img-element */
import React from "react";
import ReactCardFlip from "react-card-flip";
import styles from "../../styles/Home/Header.module.css";

function handleMove(event: { clientX: number; clientY: number }) {
  const windowWidth = window.innerWidth / 5;
  const windowHeight = window.innerHeight / 5;
  const mouseX = event.clientX / windowWidth;
  const mouseY = event.clientY / windowHeight;
  const fx = document.getElementsByClassName(`${styles.container}`);
  fx[0].style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
}

const Header = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isFlippedRight, setIsFlippedRight] = React.useState(false);

  const [evil, setEvil] = React.useState<boolean | null>(null);

  function handleEnterLeft() {
    setIsFlipped(true);
  }

  function handleOverLeft() {
    setIsFlipped(false);
  }

  function handleEnterRight() {
    setIsFlippedRight(true);
  }

  function handleOverRight() {
    setIsFlippedRight(false);
  }

  function handleGood() {
    setEvil(false);
  }

  function handleEvil() {
    setEvil(true);
  }

  React.useEffect(() => {
    let theImg = document.getElementsByClassName(`${styles.container}`);
    evil === null
      ? (theImg[0].style.background = "url('/bg/bg1.jpg');")
      : evil === false
      ? ((theImg[0].style.background = "url('/bg/bg2.jpg')"),
        (theImg[0].style.backgroundSize = "contain"))
      : ((theImg[0].style.background = "url('/bg/bg3.jpg')"),
        (theImg[0].style.backgroundSize = "cover"));
  }, [evil]);

  return (
    <>
      <div
        className={styles.headFancyFixed}
        style={{ background: evil === false ? "#459fb3" : "#2d2d2d" }}
      >
        <nav
          style={{
            opacity: evil === null ? "0" : "1",
            color:
              evil === null ? "white" : evil === true ? "#f82f40" : "#2d2d2d",
          }}
        >
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
          </ul>
        </nav>

        <h1
          style={{
            gridColumn: evil === null ? "2" : "2",
            color:
              evil === null ? "white" : evil === true ? "#f82f40" : "#2d2d2d",
          }}
        >
          {evil === null
            ? "Escolha seu lado"
            : evil === true
            ? "Bem vindo a Azzurra"
            : "Bem vindo a Azzurra"}
        </h1>
        <nav
          style={{
            opacity: evil === null ? "0" : "1",
            color:
              evil === null ? "white" : evil === true ? "#f82f40" : "#2d2d2d",
          }}
        >
          <ul>
            <li>Menu 3</li>
            <li>Menu 4</li>
          </ul>
        </nav>
      </div>
      <header className={styles.containerHolder} onMouseMove={handleMove}>
        <section className={styles.content}>
          <div className={styles.headFancy}>
            <nav
              style={{
                opacity: evil === null ? "0" : "1",
                color:
                  evil === null
                    ? "white"
                    : evil === true
                    ? "#f82f40"
                    : "#2d2d2d",
              }}
            >
              <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
              </ul>
            </nav>

            <h1
              style={{
                gridColumn: evil === null ? "2" : "2",
                color:
                  evil === null
                    ? "white"
                    : evil === true
                    ? "#f82f40"
                    : "#2d2d2d",
              }}
            >
              {evil === null
                ? "Escolha seu lado"
                : evil === true
                ? "Bem vindo a Azzurra"
                : "Bem vindo a Azzurra"}
            </h1>
            <nav
              style={{
                opacity: evil === null ? "0" : "1",
                color:
                  evil === null
                    ? "white"
                    : evil === true
                    ? "#f82f40"
                    : "#2d2d2d",
              }}
            >
              <ul>
                <li>Menu 3</li>
                <li>Menu 4</li>
              </ul>
            </nav>
          </div>
          <div className={styles.absoluteContent}>
            <div className={styles.cardContainer}>
              {evil === null ? (
                <>
                  {" "}
                  <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div
                      className={styles.fancyCard}
                      onMouseEnter={handleEnterLeft}
                      onClick={handleEvil}
                    >
                      <span className={styles.textEvil}>Luxuria e riqueza</span>
                      <img src="/bg/oni.png" alt="" />
                    </div>
                    <div
                      className={styles.fancyCard}
                      onMouseLeave={handleOverLeft}
                      onClick={handleEvil}
                    >
                      <span className={styles.textEvilIntro}>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Impedit aspernatur quia autem nulla velit dolores
                        atque aliquam et illo, doloremque, ex rerum ipsam. Eaque
                        numquam sint omnis ipsam harum pariatur!
                      </span>
                    </div>
                  </ReactCardFlip>
                  <ReactCardFlip
                    isFlipped={isFlippedRight}
                    flipDirection="vertical"
                  >
                    <div
                      className={styles.fancyCard}
                      onMouseEnter={handleEnterRight}
                      onClick={handleGood}
                    >
                      <span className={styles.textGood}>Honra e Glória</span>
                      <img src="/bg/wolf.png" alt="" />
                    </div>
                    <div
                      className={styles.fancyCard}
                      onMouseLeave={handleOverRight}
                      onClick={handleGood}
                    >
                      <span className={styles.textGoodIntro}>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut eius pariatur repudiandae amet placeat inventore
                        libero odio hic harum ipsam suscipit, impedit quidem!
                        Vitae tempora quasi assumenda quam nesciunt
                        necessitatibus!{" "}
                      </span>
                    </div>
                  </ReactCardFlip>{" "}
                </>
              ) : null}
            </div>
          </div>
        </section>
        <div
          className={styles.container}
          style={{
            background: "url('/bg/bg1.jpg');",
          }}
        />
      </header>
      {evil === null ? null : (
        <div>
          {" "}
          <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p>
          <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p>{" "}
          <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p>{" "}
          <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p>{" "}
          <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p>{" "}
          <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p>{" "}
          <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p>{" "}
          <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p>{" "}
          <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p> <p>teste</p>{" "}
          <p>teste</p> <p>teste</p> <p>teste</p>
        </div>
      )}
    </>
  );
};

export default Header;
