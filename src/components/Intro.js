import React from "react";
import { BsFacebook } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Tooltip as ReactTooltip } from "react-tooltip";

/* This Component just for introducing Myself ( applicants ) */

const Intro = () => {
  const tooltipStyle = { backgroundColor: "black" };
  return (
    <>
      <ReactTooltip
        id="facebook"
        place="top"
        content="Facebook"
        style={tooltipStyle}
      />
      <ReactTooltip
        id="portfolio"
        place="top"
        content="Portfolio"
        style={tooltipStyle}
      />
      <ReactTooltip
        id="github"
        place="top"
        content="Github"
        style={tooltipStyle}
      />
      <ReactTooltip
        id="linkedin"
        place="top"
        content="Linkedin"
        style={tooltipStyle}
      />
      <div className="text-center">
        <div>
          <h1 className="text-black font-semibold">MD Taijul Islam Tanmoy</h1>
          <p>Fronted Developer</p>
        </div>
        <div className="flex items-center justify-center gap-5 py-5">
          <a
            href="https://www.facebook.com/dmtaijul9"
            data-tooltip-id="facebook"
            rel="noreferrer"
            target="_blank"
          >
            <BsFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://devtaijul.com/"
            target="_blank"
            rel="noreferrer"
            data-tooltip-id="portfolio"
          >
            <CgWebsite className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/devtaijul/"
            target="_blank"
            data-tooltip-id="linkedin"
            rel="noreferrer"
          >
            <AiFillLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/dmtaijul9"
            target="_blank"
            rel="noreferrer"
            data-tooltip-id="github"
          >
            <AiFillGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
