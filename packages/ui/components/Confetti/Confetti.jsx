import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import styles from './Confetti.module.css';

// Confetti component for celebratory animations
// Props:
// - trigger: Boolean, when true, fires confetti
// - colors: Array of strings, custom colors for confetti (default: festive colors)
// - particleCount: Number, number of confetti particles (default: 100)
// - spread: Number, spread angle of confetti (default: 70)
// - duration: Number, milliseconds for confetti animation (default: 3000)
const Confetti = ({ trigger, colors = ['#ff0a5b', '#00f4e2', '#f9e900'], particleCount = 100, spread = 70, duration = 3000 }) => {
  useEffect(() => {
    if (trigger) {
      // Fire confetti with randomized origin for fun
      confetti({
        particleCount,
        spread,
        colors,
        origin: { x: Math.random(), y: Math.random() * 0.6 + 0.2 },
        disableForReducedMotion: true, // Respect accessibility preferences
      });

      // Clean up after duration
      const timeout = setTimeout(() => {
        confetti.reset();
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [trigger, colors, particleCount, spread, duration]);

  return <div className={styles.confettiContainer} aria-hidden="true"></div>;
};

export { Confetti };