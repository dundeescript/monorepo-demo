
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero__title}>Hero</h1>
      <p className={styles.hero__description}>
        I am a hero section.
      </p>
    </section>
  );
}
