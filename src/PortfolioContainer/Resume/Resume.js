import React, { useState, useEffect } from "react";
import ScreenHeading from "utilities/ScreenHeading/ScreenHeading";
import ScrollService from "utilities/ScrollService";
import Animations from "utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Education", logoSrc: "education.svg" },
    /*{ label: "Programming Skills", logoSrc: "programming-skills.svg" }, */
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  /*const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];*/

  const projectsDetails = [
    {
      title: "Pepper Tix Page",
      duration: { fromDate: "2018", toDate: "Actual" },
      description:
        "A Web Application for tickets event sales.",
      subHeading: "Technologies Used: Nuxt, Vuetify, Node JS Vuex",
    },
    {
      title: "Pepper Bot ",
      duration: { fromDate: "2017", toDate: "Actual" },
      description:
        "A chat for Facebook Messenger to ask questions about events and sale flow.",
      subHeading:
        "Technologies Used: Mongo DB, Express Js, Node Js.",
    },
    {
      title: "Dashboard for Pepper Tix",
      duration: { fromDate: "2021", toDate: "Actual" },
      description:
        "Dashboard for creation events and  sales flow",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Spotlight Sutdio"}
          subHeading={"Web Application Developer"}
          fromDate={"2017"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MEVN Nuxt stack web and Flutter mobile developer
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an online ticket sales application, searching, performers, cities, events, ticket groups, checkout with credit card and Paypal payment methods.
          </span>
          <br />

          <span className="resume-description-text">
            - Developed a chat bot integrated with Facebook Messenger API and Dialog Flow
          </span>
          <br />


          <span className="resume-description-text">
            - Developed Dashboard for events management
          </span>
          <br />




        </div>
      </div>





    </div>,




    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Unidades Tecnológicas de Santander, Colombia"}
        subHeading={"Telecommunications Engineer"}
        fromDate={"2013"}
        toDate={"2016"}
      />

      <ResumeHeading
        heading={"SENA, Colombia"}
        subHeading={"Technology in Analysis and Development of Information Systems"}
        fromDate={"2003"}
        toDate={"2005"}
      />

    </div>,


    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in GW2, pushing the rank and having interactive gaming sessions excites me the most."
      />
      <ResumeHeading
        heading="Workout"
        description="The feeling that one gets after a good workout is fantastic. This is due to the release of endorphins, hormones that makes me feel great. "
      />

      <ResumeHeading
        heading="Learn new technologies"
        description="I'm ready and willing to teach myself new things and practice my coding skills."
      />

    </div>,

 


  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`assets/images/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
