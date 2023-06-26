import { useEffect, useState } from "react";

export const Effecttest = () => {

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
    return () => {return false}
  }, [])

  useEffect(()=> {
    setFilteredPosts(posts.filter(
      post => post.title.toLowerCase().includes(input)
    ))
  }, [input])

  useEffect(()=> {
    setFilteredPosts(posts)
  }, [posts])

  return (
    <div>
      <input type="text" className="search" onInput={(e)=>{ setInput(e.target.value)}} />
      {
      filteredPosts.map(
        post => <h3 key={post.id}>{post.title}</h3>
      )
      }
    </div>
  )
}
