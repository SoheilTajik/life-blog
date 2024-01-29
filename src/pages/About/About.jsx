import React from "react";
import Styles from "./About.module.css";
import FoodImg from "../images/food.jpg";
import WorkImg from "../images/work.jpg";
import DecoImg from "../images/deco.jpg";
import AboutMe from "../images/about-me.jpg";

const About = () => {
  return (
    <div className={`${Styles.container} ${Styles.containerFlex}`}>
      <main role={Styles.main}>
        <img src={AboutMe} alt="life-image" className={Styles.imageFull} />
        <h2>My name is John and living the simple life saved my life</h2>

        <p>
          <strong>I used to be a pack rat</strong>. I had so many things that I
          thought that I loved, but the truth was I couldn't even appreciate any
          of it because there was too much.
        </p>
        <p>
          Things were terrible. I had a job that I hated, a home that I didn't
          want to live in, and I couldn't hold a relationship.
        </p>

        <h3>How I turned things around</h3>
        <p>
          <strong>
            I was on the verge of a breakdown when I got rid of everything
          </strong>
          . I literally put 90% of my possessions in the garbage, sold my place
          and moved into a smaller apartment, and I quit my job.
        </p>
        <p>
          It wasn't easy at all, but everything around me was in such a bad
          place, I didn't know what else to do. And it worked.
        </p>

        <h3>Now I live the simple life</h3>
        <p>
          Now that I'm living a simple life, things are so much better. I'm less
          stressed, enjoy life and work more, and I have more free time to
          enjoy.
        </p>
        <p className="lastArticle">
          With how much it turned my life around,{" "}
          <strong>
            I felt like I had no choice but to start sharing how I did it
          </strong>
          , and how others can benefit from living a simple life as well, which
          is why I started this site!
        </p>
      </main>
      <aside className={Styles.sidebar}>
        <div className={Styles.sidebarWidget}>
          <h2 className={Styles.widgetTitle}>RECENT POSTS</h2>
          <div className={Styles.widgetRecentPost}>
            <h3 className={Styles.widgetRecentPostTitle}>
              Keep cooking simple
            </h3>
            <img src={FoodImg} alt="" className={Styles.widgetImage} />
          </div>
          <div className={Styles.widgetRecentPost}>
            <h3 className={Styles.widgetRecentPostTitle}>
              Simplicity and work
            </h3>
            <img src={WorkImg} alt="" className={Styles.widgetImage} />
          </div>
          <div className={Styles.widgetRecentPost}>
            <h3 className={Styles.widgetRecentPostTitle}>Simple decoration</h3>
            <img src={DecoImg} alt="" className={Styles.widgetImage} />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default About;
