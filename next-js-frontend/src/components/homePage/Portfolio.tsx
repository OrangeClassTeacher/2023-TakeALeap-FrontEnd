import styles from "../../styles/portfolio.module.css";
import Link from "next/link";
interface Card {
  name: string;
  prof: string;
  bio: string;
}

interface Box {
  cards: Card[];
}

const box: Box = {
  cards: [
    {
      name: "Baatraa",
      prof: "Back-End Developer",
      bio: "Tiim ym bnaa iim ym bnaa",
    },
    {
      name: "Daria",
      prof: "Full-Stack Developer",
      bio: "Tiim ym bnaa iim ym bnaa",
    },
    {
      name: "Baatraa",
      prof: "Front-End Developer",
      bio: "Tiim ym bnaa iim ym bnaa",
    },
  ],
};

// Accessing the card information
box.cards.forEach((card, index) => {
  console.log(`Card ${index + 1}:`);
  console.log(`Name: ${card.name}`);
  console.log(`Profession: ${card.prof}`);
  console.log(`Bio: ${card.bio}`);
  console.log("-----------------");
});

export default function Portfolio(): JSX.Element {
  return (
    <div>
      <div className="flex  justify-around">
        <h1 className="text-center uppercase text-3xl p-16">About Us</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full justify-center">
        <div className={styles.card}>
          <div className={styles.info}>
            <p className={styles.name}>Baatraa</p>
            <p className={styles.prof}> Back-End Developer</p>
            <p className={styles.divider}>{""}</p>
            <p className={styles.bio}>
              Me personally specializes in server-side programming and is
              responsible for building and maintaining the core functionality of
              web applications.{" "}
            </p>
            <Link
              href={"https://github.com/moog2474"}
              className="flex justify-center">
              <button className={styles.button}>Contact me</button>
            </Link>
          </div>
          <div className={styles.photo}>{""}</div>
          {/* <Link href="#">
            <p className={styles.asmash}>My portfolio</p>
          </Link> */}
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.name}>Daria</div>
            <div className={styles.prof}>Full-Stack Developer</div>
            <div className={styles.divider}>{""}</div>
            <div className={styles.bio}>
              {" "}
              My hard-skill is proficient in both front-end and back-end
              technologies, capable of working on all layers of a web
              application including databases, frameworks.
            </div>
            <Link
              href={"https://github.com/Daria61"}
              className="flex justify-center">
              {" "}
              <button className={styles.button}>Contact me</button>
            </Link>
          </div>
          <div className={styles.photo2}>{""}</div>
          {/* <Link href="#">
            <p className={styles.asmash}>My portfolio</p>
          </Link> */}
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.name}>Moonlight</div>
            <div className={styles.prof}> Front-End Developer</div>
            <div className={styles.divider}>{""}</div>
            <div className={styles.bio}>
              Well my skill focuses on creating the user-facing aspects of a
              website or application. I am skilled in more front-end frameworks,
              to design and implement intuitive user interfaces.{" "}
            </div>
            <Link
              href={"https://github.com/Mnlght0312"}
              className="flex justify-center">
              <button className={styles.button}>Contact me</button>
            </Link>
          </div>
          <div className={styles.photo3}>{""}</div>
          {/* <Link href="#">
            <p className={styles.asmash}>My portfolio</p>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
