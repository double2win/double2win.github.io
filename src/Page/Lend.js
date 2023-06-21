import React, { useEffect, useState } from "react";
import MainImg from "../assets/main_Graphic.svg";
import { ethers } from "ethers";
import DescriiptorABI from "../abi/Descriptor.json";
import Discord from '../assets/Discord Icon.svg'
import Twitter from '../assets/Twitter Icon.svg'
import Medium from '../assets/Medium Icon.svg'
import Doc from '../assets/Doc Icon.svg'

const provider = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/a1ac3a707d90454eb92624852b96e497"
);
const CONTRACT_ADDR = "0xC066540F305978B391D802d0fC863b8174dd8383";
const descriptorContract = new ethers.Contract(
  CONTRACT_ADDR,
  DescriiptorABI,
  provider
);

export default function Lend() {
  const [svgImage, setSVGImage] = useState("");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const generateSVGImage = async () => {
        const tokenID = Math.floor(Math.random() * 10000 + 1);
        const tokenImage = await descriptorContract.generateSVGImage(tokenID);
        const decodedImage = atob(tokenImage);
        setOpacity(0);
        setTimeout(() => {
          setSVGImage(decodedImage);
          setOpacity(1);
        }, 500);
    }
    const intervalId = setInterval(async () => {
        await generateSVGImage();
    }, 60000);
    
    generateSVGImage();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const style = {
    opacity: opacity,
    transition: 'opacity 0.5s ease'
  };

  return (
    <div className="main-section">
      <div className="discription">
        <p>The ONE & ONLY AMM LP community.</p>
        <p>
          A DeFi primitive for AMM liquidity providing that solves the liquidity
          challenge for token and doubles ROI for capital.
        </p>
      </div>
      <div className="container">
        <img src={MainImg} alt="Main"/>
        <div dangerouslySetInnerHTML={{ __html: svgImage }} className="svg-container" style={style}/>
      </div>
      <div className="footer-text">
        <a
          href="https://medium.com/@double2win/double-down-to-genesis-on-celo-be46547d22cf"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "black" }}
        >
          <span>Double Down to Genesis on Celo</span>
        </a>
      </div>
      <div className="social-icons social-bottom">
          <div className="social-icon"><a href="https://discord.gg/ycyr8Fp3Wu" target="_blank" rel="noreferrer"><img src={Discord} alt='discord'/></a></div>
          <div className="social-icon"><a href="https://twitter.com/double2winwin" target="_blank" rel="noreferrer"><img src={Twitter} alt='twitter'/></a></div>
          <div className="social-icon"><a href="https://medium.com/@double2win/double-down-to-genesis-on-celo-be46547d22cf" target="_blank" rel="noreferrer"><img src={Medium} alt='medium'/></a></div>
          <div className="social-icon"><a href="https://www.double2win.xyz/docs/" target="_blank" rel="noreferrer"><img src={Doc} alt='doc'/></a></div>
      </div>
    </div>
  );
}
