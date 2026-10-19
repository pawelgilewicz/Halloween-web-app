import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";



function Blog() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  axios
    .get("http://localhost:80/api/blogBackend/") // <-- wpisz port swojego serwera
    .then((res) => {
      console.log("odpowiedź:", res.data);
      if (Array.isArray(res.data)) {
        setPosts(res.data);
      } else {
        setError("Serwer nie zwrócił tablicy postów");
      }
    })
    .catch((err) => {
      console.error(err);
      setError("Nie udało się pobrać postów");
    })
    .finally(() => setLoading(false));
}, []);

  // na stronie głównej tylko 4 posty, na podstronie wszystkie
  const visiblePosts = isHome ? posts.slice(0, 4) : posts;

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="blog">
      <h1>Our Blog</h1>

      <div className="containerBlog">
        {visiblePosts.map((post) => (
          <div className="Box" key={post.id}>
            <img
              src={post.images?.[0] || "./assets/header.jpg"}
              alt={post.title}
            />
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>

      {isHome && <button className="buttonBlog">Blog</button>}
    </section>
  );
}

export default Blog;