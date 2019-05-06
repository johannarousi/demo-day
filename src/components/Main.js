import React from "react";
import finnishGif from "../img/giphy.gif";

const Main = () => {
  return (
    <main className="content">
      <img className="content-img-default" src={finnishGif} alt="Finnish Gif" />
      <div className="subtitle">
        <p className="subtitle-para">
          Yöllä taas mä menin parvekkeelle <span>nukkumaan</span>, Jotta lähempänä mua ois hän
        </p>
        <button className="subtitle-btn">
          <a href="#words" className="hvr-pulse-shrink">
            <i className="fas fa-play" />
          </a>
        </button>
      </div>

      <div className="subtitle">
        <p className="subtitle-para">
          Ennalleen en saa mä vaan ootan että sut nään vielä uudestaan ja tuun sun luo <span>nukkumaan</span>
        </p>
        <button className="subtitle-btn">
          <a href="#words" className="hvr-pulse-shrink">
            <i className="fas fa-play" />
          </a>
        </button>
      </div>

      <div className="subtitle">
        <p className="subtitle-para">
          Elin vuosia liian vähillä unilla, koska en halunnut mennä aikaisin <span>nukkumaan</span>. Illat olivat
          laatuaikaani: luin kirjoja ja lehtiä, katsoin telkkaria, ...
        </p>
        <button className="subtitle-btn">
          <a href="#words" className="hvr-pulse-shrink">
            <i className="fas fa-play" />
          </a>
        </button>
      </div>

      <div className="subtitle">
        <p className="subtitle-para">
          Näin opin <span>nukkumaan</span> - poppakonsteja ei ole
        </p>
        <button className="subtitle-btn">
          <a href="#words" className="hvr-pulse-shrink">
            <i className="fas fa-play" />
          </a>
        </button>
      </div>
    </main>
  );
};

export default Main;
