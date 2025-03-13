'use client'

import {
  RiLinkedinFill,
  RiInstagramFill,
  RiTiktokFill,
  RiFacebookBoxFill
} from 'react-icons/ri'

import Link from 'next/link'
import { JSX } from 'react';

interface SocialIcon {
  path: string;
  name: JSX.Element;
}

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const icons: SocialIcon[] = [
  {
    path: 'https://www.linkedin.com/in/korina-javier-59370917a/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://www.instagram.com',
    name: <RiInstagramFill />
  },
  {
    path: 'https://www.tiktok.com',
    name: <RiTiktokFill />
  },
  {
    path: 'https://www.facebook.com',
    name: <RiFacebookBoxFill />
  },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer">
          <div className={iconStyles}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Socials;