import type { ReactElement } from 'react'
import React from 'react';
import axios from 'axios';
import Header from '@/components/Text/header'
import GameCard from '@/components/GameCard';

async function getGames() {
  return axios({
    url: `${process.env.GAME_VAULT_URL}/api/v1/games`,
    auth: {
      username: `${process.env.NEXT_PUBLIC_GAME_VAULT_USERNAME}`,
      password: `${process.env.NEXT_PUBLIC_GAME_VAULT_PASSWORD}`
    },
    responseType: 'json',
  }).then(async response => {
    return response.data
  }).catch(function (error) {
    throw new Error(error)
  }).finally(function () {});
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