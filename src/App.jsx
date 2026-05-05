import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?limit=10')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>loading......</p>

  return (
    <div>
      <h1>Posts from  (jsonplaceholder)API (By Navraj)</h1>
      {posts.map(post => (
        <div key={post.id} style={{border: "1px solid black", margin: "10px", padding: "10px", color: "green", borderBlockColor: "red"}}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default App
