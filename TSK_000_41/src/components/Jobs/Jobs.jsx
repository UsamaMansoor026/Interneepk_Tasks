import React from "react";
import styles from "./Jobs.module.css";
import { icons, jobsImages } from "../../assets/assets";

const Jobs = () => {
  return (
    <>
      {/* 1st Job */}
      <section className={styles.jobSection}>
        <div className={styles.chilka}>
          <div>
            <p className={styles.subHeading}>Our own task portal</p>
            <h1 className={styles.heading}>
              Manage Project Via Own Task Portal
            </h1>
          </div>
        </div>

        <div className={styles.jobWrapper}>
          <div
            style={{ marginLeft: "-300px" }}
            className={styles.jobImagePortion}
          >
            <img src={jobsImages.Task} alt="" />
          </div>

          <div className={styles.jobContentPortion}>
            <p className={styles.subHeading2}>Our own task portal</p>
            <p className={styles.tagline}>
              Welcome to internee.pk task portal. Where Tasks Transform Into
              Skills
            </p>

            {/* Remaining Content */}
            <div className={styles.innerWrapper}>
              {/* 1st Row */}
              {/* 1st child */}
              <div className={styles.item}>
                <img src={icons.Play} alt="" />

                <p className={styles.itemDesc}>
                  <span>Hands on Projects</span> we believe in learning by
                  doing. Dive into hands-on projects that simulate real-world
                  scenarios. From coding challenges to creative projects, every
                  task is crafted to impart practical skills that resonate in
                  professional environments.
                </p>
              </div>

              {/* 2nd child */}
              <div className={styles.item}>
                <img src={icons.Account} alt="" />

                <p className={styles.itemDesc}>
                  <span>How to represent yourself</span> More than just
                  completing tasks, It empowers you to showcase your journey.
                  Every completed task contributes to your digital portfolio, a
                  dynamic representation of your skills and accomplishments. Let
                  your work speak volumes about your capabilities.
                </p>
              </div>

              {/* 2nd Row */}
              {/* 3rd child */}
              <div className={styles.item}>
                <img src={icons.CellphoneLink} alt="" />

                <p className={styles.itemDesc}>
                  <span>SDLC Techniques</span> Understanding the Software
                  Development Life Cycle (SDLC) is pivotal in the tech world.
                  Acquire skills that align with industry standards and boost
                  your project management proficiency.
                </p>
              </div>

              {/* 4th child */}
              <div className={styles.item}>
                <img src={icons.PlaylistCheck} alt="" />

                <p className={styles.itemDesc}>
                  <span>Easy to understand</span> Learning shouldn't be
                  complicated. Our tasks are designed to be easily
                  comprehensible, ensuring a smooth learning experience for
                  everyone. Whether you're a seasoned professional or a
                  beginner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Job */}
      <section className={styles.jobSection}>
        <div className={styles.chilka2}>
          <div>
            <p className={styles.subHeading}>Our LMS</p>
            <h1 className={styles.heading}>
              Guided Tutorials in Learning Management System
            </h1>
          </div>
        </div>

        <div className={styles.jobWrapper2}>
          <div className={styles.jobContentPortion2}>
            <p className={styles.subHeading2}>Our LMS</p>
            <p className={styles.tagline}>
              Want to learn something but don't know what's the roadmap or your
              english is not too good? That's why we launch LMS for you.
            </p>

            {/* Remaining Content */}
            <div className={styles.innerWrapper}>
              {/* 1st Row */}
              {/* 1st child */}
              <div className={styles.item}>
                <img src={icons.CloudCheck} alt="" />

                <p className={styles.itemDesc}>
                  <span>Sell Courses and Earn</span> Are you an expert in your
                  field? Share your knowledge on our LMS. Create and sell
                  courses, or contribute as an instructor. Empower others on
                  their learning journey while earning rewards for your
                  expertise.
                </p>
              </div>

              {/* 2nd child */}
              <div className={styles.item}>
                <img src={icons.MagnifyPlus} alt="" />

                <p className={styles.itemDesc}>
                  <span>Certification</span> Complete courses on our LMS and
                  earn certifications that validate your expertise. Showcase
                  your accomplishments to potential employers and stand out in a
                  competitive landscape.
                </p>
              </div>

              {/* 2nd Row */}
              {/* 3rd child */}
              <div className={styles.item}>
                <img src={icons.Info} alt="" />

                <p className={styles.itemDesc}>
                  <span>Courses in Urdu</span> Dive into the world of knowledge
                  with our courses in Urdu. Breaking language barriers, Our LMS
                  ensures that education is accessible and relatable for
                  everyone. Learn, grow, and excel in a language that feels like
                  home.
                </p>
              </div>

              {/* 4th child */}
              <div className={styles.item}>
                <img src={icons.Folder} alt="" />

                <p className={styles.itemDesc}>
                  <span>Practice Exercises</span> Theory is just the beginning.
                  Our LMS goes beyond by offering practical exercises that
                  challenge and refine your skills. Apply your knowledge in
                  real-world scenarios, solidifying your understanding and
                  boosting your confidence.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.jobImagePortion2}>
            <img src={jobsImages.LMS} alt="" />
          </div>
        </div>
      </section>

      {/* 3rd Job */}
      <section className={styles.jobSection}>
        <div className={styles.chilka}>
          <div>
            <p className={styles.subHeading}>
              Are you Tech Instructor or Content Creator?
            </p>
            <h1 className={styles.heading}>
              Create Courses In Local Language & Generate Income
            </h1>
          </div>
        </div>

        <div className={styles.jobWrapper}>
          <div
            style={{ marginLeft: "-300px" }}
            className={styles.jobImagePortion}
          >
            <img src={jobsImages.Instructor} alt="" />
          </div>

          <div className={styles.jobContentPortion}>
            <p className={styles.subHeading2}>
              Are you Tech Instructor or Content Creator?
            </p>
            <p className={styles.tagline}>
              Are you a professional want to start your journey as a tech
              instructor and content creator to make some revenue? Just visit
              Our LMS Intructor Portal
            </p>

            {/* Remaining Content */}
            <div className={styles.innerWrapper}>
              {/* 1st Row */}
              {/* 1st child */}
              <div className={styles.item}>
                <img src={icons.Search} alt="" />

                <p className={styles.itemDesc}>
                  <span>Upload Tutorials & Excersice</span> Transform your
                  expertise into impactful learning materials. As an instructor
                  on Internee.pk LMS, you can effortlessly upload tutorials and
                  exercises, shaping the educational experience for countless
                  learners.
                </p>
              </div>

              {/* 2nd child */}
              <div className={styles.item}>
                <img src={icons.ShapeOutline} alt="" />

                <p className={styles.itemDesc}>
                  <span>Generate Revenue</span> Teach what you love and earn
                  what you deserve. Internee.pk LMS offers instructors the
                  opportunity to generate revenue. Monetize your expertise,
                  reach a global audience, and make a meaningful income from
                  your passion.
                </p>
              </div>

              {/* 2nd Row */}
              {/* 3rd child */}
              <div className={styles.item}>
                <img src={icons.Download} alt="" />

                <p className={styles.itemDesc}>
                  <span>Instructor Identity</span> Internee.pk LMS provides a
                  platform for instructors to build their brand. Showcase your
                  skills, experience, and teaching style, creating a unique and
                  recognizable identity in the world of online education.
                </p>
              </div>

              {/* 4th child */}
              <div className={styles.item}>
                <img src={icons.PlaylistCheck} alt="" />

                <p className={styles.itemDesc}>
                  <span>Perfact Share Ratio</span> We believe in fair
                  partnerships. we enjoy a perfect share ratio that ensures
                  transparency and fairness. Your hard work deserves to be
                  rewarded, and we make sure you get your share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
