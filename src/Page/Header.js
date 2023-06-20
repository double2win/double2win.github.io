import React from "react";
import Discord from '../assets/Discord Icon.svg'
import Twitter from '../assets/Twitter Icon.svg'
import Medium from '../assets/Medium Icon.svg'
import DoubleLogo from '../assets/Double Logo.svg'
import Doc from '../assets/Doc Icon.svg'

export function Header() {
    return (
        <div className="header-section">
            <div className="logo">
                <img src={DoubleLogo} alt="double"/>
            </div>
            <div className="social-icons">
                <div className="social-icon"><a href="https://discord.gg/ycyr8Fp3Wu" target="_blank" rel="noreferrer"><img src={Discord} alt='discord'/></a></div>
                <div className="social-icon"><a href="https://twitter.com/double2winwin" target="_blank" rel="noreferrer"><img src={Twitter} alt='twitter'/></a></div>
                <div className="social-icon"><a href="https://medium.com/@double2win/double-down-to-genesis-on-celo-be46547d22cf" target="_blank" rel="noreferrer"><img src={Medium} alt='medium'/></a></div>
                <div className="social-icon"><a href="https://www.double2win.xyz/docs/" target="_blank" rel="noreferrer"><img src={Doc} alt='doc'/></a></div>
                <a className={'primary-button'} href="https://app.double2win.xyz/">
                    <p>{'Launch App'}</p>
                </a>
            </div>
        </div>
    )
}