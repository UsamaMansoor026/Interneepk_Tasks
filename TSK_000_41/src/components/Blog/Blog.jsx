import React from "react";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <section className={styles.blog}>
      <p>Our Blog</p>
      <h2>Recent Blog</h2>

      <div className={styles.container}>
        {/* 1st Item */}
        <div className={styles.item}>
          <h1 className={styles.itemHeading}>
            Complete all of the task but didn't get certification yet? 😓
          </h1>
          <p className={styles.itemDesc}>
            📧 Drop us a quick email at issues@internee.pk with the subject
            "Didn't get certification yet." Our team will swiftly resolve the
            matter, ensuring you get your recognition promptly.
          </p>
        </div>
        {/* 2nd Item */}
        <div className={styles.item}>
          <h1 className={styles.itemHeading}>
            We've hit a major milestone: 20,000 followers on LinkedIn!
          </h1>
          <p className={styles.itemDesc}>
            Thank you for being a part of our incredible journey towards
            empowering students and professionals in the world of IT and
            services. Your support means the world to us! 🚀
          </p>
        </div>
        {/* 3rd Item */}
        <div className={styles.item}>
          <h1 className={styles.itemHeading}>
            🚀Calling communities to Empower Students, Collaborate with
            Internee.pk!✌
          </h1>
          <p className={styles.itemDesc}>
            We'd love to discuss how a collaboration with Internee.pk can
            benefit your universites , socities, institutes and educational
            institutions and specially with students.
          </p>
        </div>
        {/* 4th Item */}
        <div className={styles.item}>
          <h1 className={styles.itemHeading}>
            Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟
          </h1>
          <p className={styles.itemDesc}>
            To complete the process, send us all the task details via email at
            careers@internee.pk. This ensures that we have all the necessary
            information to validate your certification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
