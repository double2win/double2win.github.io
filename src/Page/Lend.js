import React, { useEffect, useState } from "react";
import MainImg from "../assets/main_Graphic.svg";
import { ethers } from "ethers";
import DescriiptorABI from "../abi/Descriptor.json";

const provider = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/a1ac3a707d90454eb92624852b96e497"
);
const CONTRACT_ADDR = "0x5Ecf59189c24286E5397805Bb5b06c0eD0ca5382";
const descriptorContract = new ethers.Contract(
  CONTRACT_ADDR,
  DescriiptorABI,
  provider
);

export default function Lend() {
  const [svgImage, setSVGImage] = useState("");

  useEffect(() => {
    const generateSVGImage = async () => {
        const tokenID = Math.floor(Math.random() * 10000 + 1);
        const tokenImage = await descriptorContract.generateSVGImage(tokenID);
        const decodedImage = atob(tokenImage);
        setSVGImage(decodedImage);
    }
    const intervalId = setInterval(async () => {
        await generateSVGImage();
    }, 60000);
    
    generateSVGImage();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="main-section">
      <div className="discription">
        <p>The ONE & ONLY LP community.</p>
        <p>
          A DeFi primitive for AMM liquidity providing that solves the liquidity
          challenge for token and doubles ROI for capital.
        </p>
      </div>
      <div class="container">
        <img src={MainImg} alt="Main"/>
        <div dangerouslySetInnerHTML={{ __html: svgImage }} className="svg-container"/>
      </div>
      <div className="footer-text">
        <a
          href="https://medium.com/@double2win/double-to-win-e38001f46e2e"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          <span>Let's Double-To-Win!</span>
        </a>
      </div>
    </div>
  );
}
