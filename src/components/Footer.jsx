import React from 'react'
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="flex items-center justify-center text-4xl gap-10">
          <a href="https://www.linkedin.com/in/nikhil-kamble19/">
              <AiFillLinkedin />
          </a>
          <a href="https://github.com/Nikhil19-hub">
              <AiFillGithub />
          </a>
          <a href="mailto: nikhiil.kamble08@gmail.com">
              <AiFillMail />
          </a>
          <AiFillFacebook />
          <AiFillInstagram />
        </div>
  )
}
