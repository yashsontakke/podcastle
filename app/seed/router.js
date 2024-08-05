import { db } from '@vercel/postgres';

async function setupDatabase() {
  const client = await db.connect();

  try {
    await client.sql`
      -- Create the users table
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        imageUrl VARCHAR(255) NOT NULL,
        clerkId VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL
      );

     

      -- Create the podcasts table
      CREATE TABLE IF NOT EXISTS podcasts (
        id SERIAL PRIMARY KEY,
        userId INTEGER NOT NULL,
        podcastTitle VARCHAR(255) NOT NULL,
        podcastDescription TEXT NOT NULL,
        audioUrl VARCHAR(255),
        audioStorageId INTEGER,
        imageUrl VARCHAR(255),
        imageStorageId INTEGER,
        author VARCHAR(255) NOT NULL,
        authorId VARCHAR(255) NOT NULL,
        authorImageUrl VARCHAR(255) NOT NULL,
        voicePrompt TEXT NOT NULL,
        imagePrompt TEXT NOT NULL,
        voiceType VARCHAR(255) NOT NULL,
        audioDuration INTEGER NOT NULL,
        views INTEGER NOT NULL
      );

      -- Create indexes for the search fields
      CREATE INDEX IF NOT EXISTS search_author ON podcasts (author);
      CREATE INDEX IF NOT EXISTS search_title ON podcasts (podcastTitle);
      CREATE INDEX IF NOT EXISTS search_body ON podcasts (podcastDescription);
    `;

    console.log("Database setup complete.");
  } catch (err) {
    console.error("Error setting up the database:", err);
  } finally {
    client.release();
  }
}

export async function GET(){
    try {
        setupDatabase()
    } catch (error) {
        onsole.error("Unexpected error:", error)
    }
}


