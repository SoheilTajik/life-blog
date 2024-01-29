import React from "react";
import Styles from "./Home.module.css";
import LifeImg from "../images/life.jpg";
import FoodImg from "../images/food.jpg";
import WorkImg from "../images/work.jpg";
import DecoImg from "../images/deco.jpg";
import AboutMe from "../images/about-me.jpg";

const Home = () => {
  return (
    <div className={`${Styles.container} ${Styles.containerFlex}`}>
      <main role={Styles.main}>
        <article className={Styles.articleFeatured}>
          <h2 className={Styles.articleTitle}>Finding simplicity in life</h2>
          <img src={LifeImg} alt="life-image" className={Styles.articleImage} />
          <p className={Styles.articleInfo}>july 23, 2019 | 3 comments</p>

          <p className={Styles.articleBody}>
            <strong>Life can get complicated really quickly</strong>, but it
            doesn't have to be! There are many ways to simplify your life,{" "}
            <a href="#">a few of which we've explored in the past</a>. This week
            we're taking a bit of a approach though, in how you can find
            simplicity in the life you already living. continue reading
          </p>

          <a href="#" className={Styles.articleReadMore}>
            CONTINUE READING
          </a>
        </article>

        <article className={Styles.articleRecent}>
          <div className={Styles.articleRecentMain}>
            <h2 className={Styles.articleTitle}>Keep cooking simple</h2>
            <p className={Styles.articleBody}>
              Food is a very important part of everyone's life. If you want to
              be healthy, you have to eat healthy. One of the easiest ways to do
              that is to keep your cooking nice and simple.
            </p>
            <a href="" className={Styles.articleReadMore}>
              CONTINUE READING
            </a>
          </div>
          <div className={Styles.articleRecentSecondary}>
            <img src={FoodImg} alt="" className={Styles.articleImage} />
            <p className={Styles.articleInfo}>july 19, 2019 | 3 comments</p>
          </div>
        </article>
        <article className={Styles.articleRecent}>
          <div className={Styles.articleRecentMain}>
            <h2 className={Styles.articleTitle}>Simplicity and work</h2>
            <p className={Styles.articleBody}>
              Work is often a major source of stress. People get frustrated, it
              ruins their relationship with others and it leads to burnout. By
              keeping your work life as simple as possible, it will help balance
              everything out.
            </p>
            <a href="" className={Styles.articleReadMore}>
              continue reading
            </a>
          </div>
          <div className={Styles.articleRecentSecondary}>
            <img src={WorkImg} alt="" className={Styles.articleImage} />
            <p className={Styles.articleInfo}>july 12, 2019 | 3 comments</p>
          </div>
        </article>
        <article className={Styles.articleRecent}>
          <div className={Styles.articleRecentMain}>
            <h2 className={Styles.articleTitle}>Simple decorations</h2>
            <p className={Styles.articleBody}>
              A home isn't a home until you've decorated a little. People either
              don't decorate, or they go overboard and it doesn't have the
              impact they were hoping for. Staying simple will help draw the eye
              where you want it to and make things pop like never before.
            </p>
            <a href="" className={Styles.articleReadMore}>
              continue reading
            </a>
          </div>
          <div className={Styles.articleRecentSecondary}>
            <img
              src={DecoImg}
              alt="decoration"
              className={Styles.articleImage}
            />
            <p className={Styles.articleInfo}>July 3, 2019 | 3 comments</p>
          </div>
        </article>
      </main>
      <aside className={Styles.sidebar}>
        <div className={Styles.sidebarWidget}>
          <h2 className={Styles.widgetTitle}>ABOUT ME</h2>
          <img src={AboutMe} alt="" className={Styles.widgetImage} />
          <p className={Styles.widgetBody}>
            I find life better, and I'm happier, when things are nice and
            simple.
          </p>
        </div>

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

export default Home;
