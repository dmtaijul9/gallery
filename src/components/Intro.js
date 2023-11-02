import React from "react";
import { BsFacebook } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Intro = () => {
  return (
    <>
      <ReactTooltip
        id="facebook"
        place="top"
        content="Facebook"
        style={{ backgroundColor: "black" }}
      />
      <ReactTooltip id="portfolio" place="top" content="Portfolio" />
      <ReactTooltip id="github" place="top" content="Github" />
      <ReactTooltip id="linkedin" place="top" content="Linkedin" />
      <div class="text-center">
        <div>
          <h1 className="text-black font-semibold">MD Taijul Islam Tanmoy</h1>
          <p>Fronted Developer</p>
        </div>
        <div class="flex items-center justify-center gap-5 py-5">
          <a
            href="https://www.facebook.com/dmtaijul9"
            data-tooltip-id="facebook"
            target="_blank"
          >
            <BsFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://devtaijul.com/"
            target="_blank"
            data-tooltip-id="portfolio"
          >
            <CgWebsite className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/devtaijul/"
            target="_blank"
            data-tooltip-id="linkedin"
          >
            <AiFillLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/dmtaijul9"
            target="_blank"
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
