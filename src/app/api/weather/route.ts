import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const lat = 40.4165;
    const lon = -3.7026;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await axios.get(url);

    return new NextResponse(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.log('Error fetching forecast data:', error);

    return new Response('Error fetching forecast data', { status: 500 });
  }
}
