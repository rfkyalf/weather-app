'use client';

import { useGlobalContext } from '@/context/globalContext';

export default function Temperature() {
  const { forecast } = useGlobalContext();

  const { main, timezone, name, weather } = forecast;

  if (!forecast || !weather) return <div>Loading...</div>;
  return <div>Temperature</div>;
}
