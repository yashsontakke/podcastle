// "use client";
import React from 'react'
import { podcastData } from '../../constants'
import PodcastCard from '../../components/ui/PodcastCard'
import {seedUsers } from "../seed/router"

export default  async function page (){
  seedUsers();

  return (
    <section className='flex flex-col  gap-5 p-8 pt-0 w-full'>
      <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>


      <div className="podcast_grid">
        {podcastData?.map(({ description, id, imgURL, title }) => (
          <PodcastCard
            key={id}
            imgUrl={imgURL as string}
            title={title}
            description={description}
            podcastId={id}
          />
        ))}
      </div>
    </section>
  )
}

