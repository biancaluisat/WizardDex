import axios from 'axios';
import { NextResponse } from 'next/server';

const mockCharacters = [
  {
    id: 1,
    name: 'Harry Potter',
    house: 'Gryffindor',
    species: 'Humano',
    patronus: 'Fênix',
    actor: 'Daniel Radcliffe',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    dateOfBirth: '31-07-1980',
    eyeColour: 'Verde',
    hairColour: 'Castanho',
    alive: true,
  },
  {
    id: 2,
    name: 'Hermione Granger',
    house: 'Gryffindor',
    species: 'Humano',
    patronus: 'Lontra',
    actor: 'Emma Watson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    dateOfBirth: '19-09-1979',
    eyeColour: 'Castanho',
    hairColour: 'Castanho',
    alive: true,
  },
  {
    id: 3,
    name: 'Ron Weasley',
    house: 'Gryffindor',
    species: 'Humano',
    patronus: 'Jack Russell Terrier',
    actor: 'Rupert Grint',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    dateOfBirth: '01-03-1980',
    eyeColour: 'Azul',
    hairColour: 'Ruivo',
    alive: true,
  },
];

let charactersStore = [...mockCharacters];

export async function GET() {
  if (!process.env.API_URL_PERSONAGENS || !process.env.API_KEY) {
    return NextResponse.json(charactersStore, { status: 200 });
  }

  try {
    const response = await axios.get(process.env.API_URL_PERSONAGENS, {
      headers: {
        'x-api-key': process.env.API_KEY,
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    const status = error.response?.status || 500;
    const data = error.response?.data || { message: 'Erro ao buscar personagens' };

    return NextResponse.json(data, { status });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    if (!process.env.API_URL_PERSONAGENS || !process.env.API_KEY) {
      const newCharacter = {
        ...body,
        id: Date.now(),
        alive: body.alive ?? true,
      };

      charactersStore = [newCharacter, ...charactersStore];
      return NextResponse.json(newCharacter, { status: 201 });
    }

    try {
      const response = await axios.post(process.env.API_URL_PERSONAGENS, body, {
        headers: {
          'x-api-key': process.env.API_KEY,
          'Content-Type': 'application/json',
        },
      });

      return NextResponse.json(response.data, { status: response.status });
    } catch (apiError) {
      const status = apiError.response?.status;

      if (status === 404 || status === 405 || status === 403 || status === 400) {
        const newCharacter = {
          ...body,
          id: Date.now(),
          alive: body.alive ?? true,
        };

        charactersStore = [newCharacter, ...charactersStore];
        return NextResponse.json(newCharacter, { status: 201 });
      }

      throw apiError;
    }
  } catch (error) {
    const status = error.response?.status || 500;
    const data = error.response?.data || { message: 'Erro ao criar personagem' };

    return NextResponse.json(data, { status });
  }
}
