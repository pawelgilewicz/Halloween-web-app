
import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';
  

dotenv.config();
const port = 80;
const app = express();
app.use(cors());
const db = new pg.Client({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "HalloweenProject1",
  password: process.env.DB_PASSWORD || "zaq1@WSX",
  port: Number(process.env.DB_PORT) || 5432,
});

db.connect()
  .then(() => console.log("database connected"))
  .catch(err => console.error("Connection Error :", err));

app.get('/api/blogBackend/', async (req, res) => {
    try {
    const result = await db.query('SELECT * FROM blog');
    //----------------------------------------------------------
    //Checking Database
    if (!result.rows || result.rows.length === 0) {
      return res.status(404).send('Blank database');
    }

    //----------------------------------------------------------
    const blogPosts = result.rows; //posts

    //Images
    const formattedPosts = blogPosts.map((post) => {
      if (!post.img) {
        return post;
      }
      

      const rawData = post.img.data ? post.img.data : post.img;
      let base64String = Buffer.from(rawData).toString('utf-8');
      
      if (base64String.startsWith('_9j_')) {
        base64String = base64String.replace(/_/g, '/');
      }

      return {
        ...post,
        img: `data:image/jpeg;base64,${base64String}`
      };
    });

    //-----------------------------------------------
    res.json(formattedPosts);

  } catch (err) {
    res.status(500).json({ error: "Błąd bazy danych" });
  }

});

app.listen(port, () => console.log(`Backend working on port ${port}`));
