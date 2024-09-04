import React from 'react'
import { RiTwitterXFill, RiLinkedinBoxFill,RiGithubFill } from "react-icons/ri";
import SocialIcon from '../nav/SocialIcon';


export default function SocialIcons() {
  return (
    <div className="flex justify-center space-x-4">
    <SocialIcon icon={<RiTwitterXFill />} link="https://x.com/ta3nda_" />
    <SocialIcon icon={<RiLinkedinBoxFill />} link="https://www.linkedin.com/in/tatendan" />
    <SocialIcon icon={<RiGithubFill />} link="https://github.com/invincyx" />
  </div>
  )
}
