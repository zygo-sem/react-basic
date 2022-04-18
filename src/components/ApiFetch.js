import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

const ApiFetch = () => {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  const [clicked, setClicked] = useState(false)

  const handlerClicked = () => {
    setClicked(!clicked)
    setId(previd=>previd+1)
  }

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(res => {
    //   setPosts(res.data)
    // })

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  },[clicked])

  return (
    <div>
      <input type='text' value={id} onChange={evt => setId(evt.target.value)} />
      <button type='button' onClick={handlerClicked}>Get post</button>
      <div>
        {posts.title}
      </div>
      {/* <ul>
        {
          posts.map(post => <li key={post.id}> {post.title} </li>)
        }
      </ul> */}
    </div>
  )
}

export default ApiFetch
