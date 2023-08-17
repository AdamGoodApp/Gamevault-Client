import type { ReactElement } from 'react'
import React from 'react';
import Header from '@/components/Text/header'
import GameCard from '@/components/GameCard';

interface LibraryEntry {
  backdropUrl: string;
  itemUrl: string;
  name: string;
}

const libraryEntries: LibraryEntry[] = [
  {
    backdropUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/782330/library_600x900_2x.jpg',
    itemUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/782330/library_600x900_2x.jpg',
    name: 'DOOM Eternal',
  },
  {
    backdropUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/387290/library_600x900_2x.jpg',
    itemUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/387290/library_600x900_2x.jpg',
    name: 'Ori and the Blind Forest',
  },
  {
    backdropUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/1145360/library_600x900_2x.jpg',
    itemUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/1145360/library_600x900_2x.jpg',
    name: 'Hades',
  },
  {
    backdropUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/271590/library_600x900_2x.jpg',
    itemUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/271590/library_600x900_2x.jpg',
    name: 'Grand Theft Auto V',
  },
  {
    backdropUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/322500/library_600x900_2x.jpg',
    itemUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/322500/library_600x900_2x.jpg',
    name: 'SUPER HOT',
  },
  {
    backdropUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/379720/library_600x900_2x.jpg',
    itemUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/379720/library_600x900_2x.jpg',
    name: 'DOOM',
  },
  {
    backdropUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/268910/library_600x900_2x.jpg',
    itemUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/268910/library_600x900_2x.jpg',
    name: 'Cuphead',
  },
];

async function getGames() {
  const authHeader = 'Basic ' + btoa(process.env.GAME_VAULT_USERNAME + ':' + process.env.GAME_VAULT_PASSWORD);
  const res = await fetch(`${process.env.GAME_VAULT_URL}/api/v1/games`, {
    headers: {
      'Authorization': authHeader,
    },
    // next: { revalidate: 3600 },
    cache: 'no-store'
  })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Library(): Promise<ReactElement> {
  const { data } = await getGames()

  return (
    <div className='h-screen px-5 ml-16 overflow-scroll py-11 sm:p-11'>
      <Header>Library</Header>
      
      <div className='flex flex-row flex-wrap gap-y-7 sm:gap-7'>
        {
          data.map((game: Game) => { 
            return (
              <GameCard 
                game={game}
                key={game.id}
              />
            )
          })
        }
      </div>
    </div>
  )
}