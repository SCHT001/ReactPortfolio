import React, { useState } from "react";
import "./navbarCss.css"
function IndexPage() {
  return (
    <>
      <div id="mainBody">
        <div id="intro" >
          <h2 id="hey" style={{fontSize:"3em", fontWeight:"lighter"}}>Hi, I'm Sachet</h2>
          <div id="explanation" style={{fontSize:"1.4em"}}>
            I am a software developer with 1+ years of experience as a
            freelancer . I have a strong background in programming and am
            proficient in various frameworks and architectures. I have a proven
            track record of developing and maintaining software applications. I
            am seeking opportunities to continue learning and growing as a
            developer. I have experience with various tools and technologies and
            have a track record of successfully using them to deliver
            high-quality software solutions.
            <br />
            <div id="learnBtn">
              <a href="About/index.html">Learn more</a>
            </div>
          </div>
        </div>
        <div id="photo"></div>
      </div>
    </>
  );
}
export default IndexPage;
