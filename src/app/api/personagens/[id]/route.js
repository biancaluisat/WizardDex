import { NextResponse } from 'next/server';

const apiBaseUrl = (process.env.HP_API_BASE_URL || 'https://hp-api.onrender.com').replace(/\/$/, '');

export async function GET(_request, { params }) {
  const { id } = await params;

  try {
    const response = await fetch(
      `${apiBaseUrl}/api/character/${encodeURIComponent(id)}`,
      { cache: 'no-store' },
    );
    const data = await response.json();
    const character = Array.isArray(data) ? data[0] : data;

    if (!response.ok || !character) {
      return NextResponse.json({ message: 'Personagem não encontrado.' }, { status: 404 });
    }

    return NextResponse.json({
      ...character,
      species: character.species ?? character.specie ?? '',
    });
  } catch {
    return NextResponse.json(
      { message: 'Não foi possível conectar à HP API.' },
      { status: 502 },
    );
  }
}