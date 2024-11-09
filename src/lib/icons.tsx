import React from 'react';
import { BsCloudsFill } from 'react-icons/bs';
import { FaCloud, FaCloudShowersHeavy } from 'react-icons/fa';
import {
  FaCloudMoon,
  FaCloudMoonRain,
  FaCloudSunRain,
  FaMoon,
  FaRegSnowflake,
} from 'react-icons/fa6';
import { IoPartlySunny } from 'react-icons/io5';
import { MdSunny, MdThunderstorm } from 'react-icons/md';
import { RiMistFill } from 'react-icons/ri';

const Icon01d = ({ iconStyle }: { iconStyle: string }) => {
  return <MdSunny className={iconStyle} />;
};
const Icon01n = ({ iconStyle }: { iconStyle: string }) => {
  return <FaMoon className={iconStyle} />;
};

const Icon02d = ({ iconStyle }: { iconStyle: string }) => {
  return <IoPartlySunny className={iconStyle} />;
};

const Icon02n = ({ iconStyle }: { iconStyle: string }) => {
  return <FaCloudMoon className={iconStyle} />;
};

const Icon03d = ({ iconStyle }: { iconStyle: string }) => {
  return <FaCloud className={iconStyle} />;
};

const Icon03n = ({ iconStyle }: { iconStyle: string }) => {
  return <FaCloud className={iconStyle} />;
};

const Icon04d = ({ iconStyle }: { iconStyle: string }) => {
  return <BsCloudsFill className={iconStyle} />;
};

const Icon04n = ({ iconStyle }: { iconStyle: string }) => {
  return <BsCloudsFill className={iconStyle} />;
};

const Icon09d = ({ iconStyle }: { iconStyle: string }) => {
  return <FaCloudShowersHeavy className={iconStyle} />;
};

const Icon09n = ({ iconStyle }: { iconStyle: string }) => {
  return <FaCloudShowersHeavy className={iconStyle} />;
};

const Icon10d = ({ iconStyle }: { iconStyle: string }) => {
  return <FaCloudSunRain className={iconStyle} />;
};

const Icon10n = ({ iconStyle }: { iconStyle: string }) => {
  return <FaCloudMoonRain className={iconStyle} />;
};

const Icon11d = ({ iconStyle }: { iconStyle: string }) => {
  return <MdThunderstorm className={iconStyle} />;
};

const Icon11n = ({ iconStyle }: { iconStyle: string }) => {
  return <MdThunderstorm className={iconStyle} />;
};

const Icon13d = ({ iconStyle }: { iconStyle: string }) => {
  return <FaRegSnowflake className={iconStyle} />;
};

const Icon13n = ({ iconStyle }: { iconStyle: string }) => {
  return <FaRegSnowflake className={iconStyle} />;
};

const Icon50d = ({ iconStyle }: { iconStyle: string }) => {
  return <RiMistFill className={iconStyle} />;
};

const Icon50n = ({ iconStyle }: { iconStyle: string }) => {
  return <RiMistFill className={iconStyle} />;
};

const iconMap: { [key: string]: React.FC<{ iconStyle: string }> } = {
  '01d': Icon01d,
  '01n': Icon01n,
  '02d': Icon02d,
  '02n': Icon02n,
  '03d': Icon03d,
  '03n': Icon03n,
  '04d': Icon04d,
  '04n': Icon04n,
  '09d': Icon09d,
  '09n': Icon09n,
  '10d': Icon10d,
  '10n': Icon10n,
  '11d': Icon11d,
  '11n': Icon11n,
  '13d': Icon13d,
  '13n': Icon13n,
  '50d': Icon50d,
  '50n': Icon50n,
};

interface WeatherIconProps {
  code: string;
  iconStyle: string;
}

export const WeatherIcon = ({ code, iconStyle }: WeatherIconProps) => {
  const IconComponent = iconMap[code];
  return IconComponent && <IconComponent iconStyle={iconStyle} />;
};
