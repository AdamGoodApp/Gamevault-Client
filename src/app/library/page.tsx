import type { ReactElement } from 'react'
import React, { useState } from 'react';
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

export default function Library(): ReactElement {
  return (
    <div className='h-screen ml-16 overflow-scroll p-11'>
      <Header>Library</Header>
      
      <div className='flex flex-row flex-wrap gap-7'>
        {
          libraryEntries.map((entry, index) => { 
            return (
              <GameCard 
                image={entry.backdropUrl}
                title={entry.name}
                downloadPath={entry.itemUrl}
                key={index}
              />
            )
          })
        }
      </div>
    </div>
  )
}