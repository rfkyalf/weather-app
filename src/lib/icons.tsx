import React from 'react';
import { BsCloudsFill } from 'react-icons/bs';
import { FaCloud, FaCloudShowersHeavy } from 'react-icons/fa';
import { FaCloudSunRain, FaRegSnowflake } from 'react-icons/fa6';
import { IoPartlySunny } from 'react-icons/io5';
import { MdSunny, MdThunderstorm } from 'react-icons/md';
import { RiMistFill } from 'react-icons/ri';

const Icon01d = ({ iconStyle }: { iconStyle: string }) => {
  return <MdSunny className={iconStyle} />;
};

const Icon02d = ({ iconStyle }: { iconStyle: string }) => {
  return <IoPartlySunny className={iconStyle} />;
};

const Icon03d = ({ iconStyle }: { iconStyle: string }) => {
  return <FaCloud className={iconStyle} />;
};

const Icon04d = ({ iconStyle }: { iconStyle: string }) => {
  return <BsCloudsFill className={iconStyle} />;
};

const Icon09d = ({ iconStyle }: { iconStyle: string }) => {
  return <FaCloudShowersHeavy className={iconStyle} />;
};

const Icon10d = ({ iconStyle }: { iconStyle: string }) => {
  return <FaCloudSunRain className={iconStyle} />;
};

const Icon11d = ({ iconStyle }: { iconStyle: string }) => {
  return <MdThunderstorm className={iconStyle} />;
};

const Icon13d = ({ iconStyle }: { iconStyle: string }) => {
  return <FaRegSnowflake className={iconStyle} />;
};

const Icon50d = ({ iconStyle }: { iconStyle: string }) => {
  return <RiMistFill className={iconStyle} />;
};

const iconMap: { [key: string]: React.FC<{ iconStyle: string }> } = {
  '01d': Icon01d,
  '02d': Icon02d,
  '03d': Icon03d,
  '04d': Icon04d,
  '09d': Icon09d,
  '10d': Icon10d,
  '11d': Icon11d,
  '13d': Icon13d,
  '50d': Icon50d,
};

interface WeatherIconProps {
  code: string;
  iconStyle: string;
}

export const WeatherIcon = ({ code, iconStyle }: WeatherIconProps) => {
  const IconComponent = iconMap[code];
  return IconComponent ? <IconComponent iconStyle={iconStyle} /> : null;
};
