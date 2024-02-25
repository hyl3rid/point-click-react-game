import './Animal.css';
import { useState, useEffect, useRef } from 'react';
import Modal from './Modal';

function NoAudioIcon() {

  return (
    <>      
        <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        xmlnsserif="http://www.serif.com/"
        style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "square",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5"
        }}
        >
        <g transform="matrix(1,0,0,1,-1.31631,-0.907802)">
            <circle cx="14.916" cy="16.908" r="6.786" style={{ fill: "white" }} />
        </g>
        <g transform="matrix(1,0,0,1,-4.5844,-0.13617)">
            <path
            d="M29.146,7.716L14.213,16L29.146,24.556L29.146,7.716Z"
            style={{ fill: "white" }}
            />
        </g>
        <ellipse
            cx="14.213"
            cy="17.078"
            rx="1.18"
            ry="1.078"
            style={{ fill: "rgb(235,235,235)" }}
        />
        <g transform="matrix(1,0,0,1,-1.8156,1.56596)">
            <path
            d="M26.377,4.448L7.904,24.42"
            style={{ fill: "none", stroke: "white", strokeWidth: "3.51px" }}
            />
        </g>
        </svg>
    </>
  );
}

export default NoAudioIcon;
