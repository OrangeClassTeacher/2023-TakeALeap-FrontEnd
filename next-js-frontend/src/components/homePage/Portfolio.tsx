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
      prof: "Developer",
      bio: "Tiim ym bnaa iim ym bnaa",
    },
    {
      name: "Baatraa",
      prof: "Developer",
      bio: "Tiim ym bnaa iim ym bnaa",
    },
    {
      name: "Baatraa",
      prof: "Developer",
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

export default function Portfolio() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <h1 className="pt-12 about font-black text-[40px]">About Us</h1>
      </div>
      <div className={styles.box}>
        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.name}>Baatraa</div>
            <div className={styles.prof}> Back-End Developer</div>
            <div className={styles.divider}></div>
            <div className={styles.bio}>Tiim ym bnaa iim ym bnaa</div>
            <button className={styles.button}>Contact me</button>
          </div>
          <div className={styles.photo}></div>
          <Link href="#">
            <p className={styles.asmash}>My portfolio</p>
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.name}>Daria</div>
            <div className={styles.prof}>Full-Stack Developer</div>
            <div className={styles.divider}></div>
            <div className={styles.bio}>Tiim ym bnaa iim ym bnaa</div>
            <button className={styles.button}>Contact me</button>
          </div>
          <div className={styles.photo2}></div>
          <Link href="#">
            <p className={styles.asmash}>My portfolio</p>
          </Link>
        </div>
        <div className={styles.card}>
          <div className={styles.info}>
            <div className={styles.name}>Moonlight</div>
            <div className={styles.prof}> Front-End Developer</div>
            <div className={styles.divider}></div>
            <div className={styles.bio}>Tiim ym bnaa iim ym bnaa</div>
            <button className={styles.button}>Contact me</button>
          </div>
          <div className={styles.photo3}></div>
          <Link href="#">
            <p className={styles.asmash}>My portfolio</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
