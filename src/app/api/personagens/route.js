import { NextResponse } from 'next/server';

const apiBaseUrl = (process.env.HP_API_BASE_URL || 'https://hp-api.onrender.com').replace(/\/$/, '');
const houses = ['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'];

const normalizeCharacter = (character) => ({
  ...character,
  species: character.species ?? character.specie ?? '',
});

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const scope = searchParams.get('scope');
  let endpoint = '/api/characters';

  if (scope === 'students') {
    endpoint += '/students';
  } else if (scope === 'staff') {
    endpoint += '/staff';
  } else if (scope === 'house') {
    const house = searchParams.get('house')?.toLowerCase();
    if (!houses.includes(house)) {
      return NextResponse.json({ message: 'Casa de Hogwarts inválida.' }, { status: 400 });
    }
    endpoint += `/house/${house}`;
  }

  try {
    const response = await fetch(`${apiBaseUrl}${endpoint}`, { cache: 'no-store' });
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    const characters = Array.isArray(data) ? data : [data];
    return NextResponse.json(characters.map(normalizeCharacter));
  } catch {
    return NextResponse.json(
      { message: 'Não foi possível conectar à HP API.' },
      { status: 502 },
    );
  }
}
