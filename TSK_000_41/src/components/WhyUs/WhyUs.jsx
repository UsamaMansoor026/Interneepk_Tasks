import React from "react";
import "./WhyUs.css";
import { icons } from "../../assets/assets";
import ProframmingImg from "../../assets/programing.jpg";

const WhyUs = () => {
  return (
    <section className="whyUs">
      {/* Left Portion */}
      <div className="leftPortion">
        <h1>Why Internee.pk?</h1>

        {/* Parent of List Items */}
        <div className="listParent">
          {/* Single Item 1 */}
          <div className="listItem">
            <div className="listItemImgContainer">
              <img src={icons.Message} alt="" />
            </div>
            <h2 className="listItemText">5500+ Students already registered</h2>
          </div>

          {/* Single Item 2 */}
          <div className="listItem">
            <div className="listItemImgContainer">
              <img src={icons.Message} alt="" />
            </div>
            <h2 className="listItemText">
              Task based projects that based on hands on experience
            </h2>
          </div>

          {/* Single Item 3 */}
          <div className="listItem">
            <div className="listItemImgContainer">
              <img src={icons.Message} alt="" />
            </div>
            <h2 className="listItemText">
              Massive Courses with high-quality videos on LMS
            </h2>
          </div>

          {/* Single Item 4 */}
          <div className="listItem">
            <div className="listItemImgContainer">
              <img src={icons.Message} alt="" />
            </div>
            <h2 className="listItemText">
              Empowering youth towards IT revolution & technology
            </h2>
          </div>

          {/* Single Item 5 */}
          <div className="listItem">
            <div className="listItemImgContainer">
              <img src={icons.Message} alt="" />
            </div>
            <h2 className="listItemText">
              Hands on Experience via Virtual internship
            </h2>
          </div>

          {/* Single Item 6 */}
          <div className="listItem">
            <div className="listItemImgContainer">
              <img src={icons.Message} alt="" />
            </div>
            <h2 className="listItemText">
              Complete your task and get market competent job
            </h2>
          </div>

          {/* Single Item 7 */}
          <div className="listItem">
            <div className="listItemImgContainer">
              <img src={icons.Message} alt="" />
            </div>
            <h2 className="listItemText">
              Direct Collaboration with companies for direct hiring
            </h2>
          </div>
        </div>
      </div>

      {/* Right Portion */}
      <div className="rightPortion">
        <img src={ProframmingImg} alt="" />
      </div>
    </section>
  );
};

export default WhyUs;
