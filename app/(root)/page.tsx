// "use client";
import React from 'react'
import { podcastData } from '../../constants'
import PodcastCard from '../../components/ui/PodcastCard'
import seedUsers from "../seed/router"
import { db } from '@vercel/postgres';

export default async function page() {

  const client = await db.connect();
  const users = await client.sql`SELECT * FROM USERS `;
  const rows = users.rows;
  console.log(rows);


  return (
    <section className='flex flex-col  gap-5 p-8 pt-0 w-full'>
      <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>    

      <ul>
        {rows.map((user) => (
          <li key={user.id} className="bg-gray-800 p-4 rounded-lg">
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>


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

