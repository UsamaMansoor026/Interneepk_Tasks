import React from "react";
import Typed from "typed.js";
import styles from "../Hero/Hero.module.css";

const TypingText = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "On your desire domain",
        "Give hands on experience",
        "Get a competitive Job",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.typeContainer}>
      <span
        className={styles.tagline}
        style={{ color: "#35b14a", marginRight: "8px" }}
        ref={el}
      />
      <span className={styles.bar}></span>
    </div>
  );
};

export default TypingText;
