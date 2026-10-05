import { NextResponse } from 'next/server';

const apiBaseUrl = (process.env.HP_API_BASE_URL || 'https://hp-api.onrender.com').replace(/\/$/, '');

export async function GET() {
  try {
    const response = await fetch(`${apiBaseUrl}/api/spells`, { cache: 'no-store' });
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { message: 'Não foi possível conectar à HP API.' },
      { status: 502 },
    );
  }
}