import React, {useEffect, useState } from 'react';
import axios from "axios";
const [posts, setPosts] = useState([
  { userId: 1, id: 200, title: `lorem`, body: "body1" },
  { userId: 2, id: 300, title: `score`, body: "body2" },
]);


// jsx
const App = () => {
  const [posts, setPosts] = useState([
    { userId: 1, id: 200, title: `lorem`, body: "body1" },
    { userId: 2, id: 300, title: `score`, body: "body2" },
  ]);
  const [userId, setuserId] = useState("");
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addPost = ()=>{
    setPosts([...posts,{userId:userId,id:id,title:title,body:body}]);
  }
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res)=>{
        setPosts(res.data);
      })
    },[]);
  return (
    <>
    {posts.map((post, i) => {
      return (
        <div key={i}>
          <p><h1>Body:</h1> {post.body}</p>
          <p><h1>Title:</h1> {post.title}</p>
        </div>
      );
    })}
      <input type="text" placeholder="id" onChange={(e) => {
        setID(e.target.value)
      }}/>
      <input type="text" placeholder="UserID" onChange={(e) => {
        setuserId(e.target.value)
      }}/>
      <input typ="text" placeholder="title" onChange={(e) => {
        setTitle(e.target.value)
      }}/>
      <input type="text" placeholder="body" onChange={(e) => {
        setBody(e.target.value)
      }}/>
      <button onClick={addPost}>Click me </button>
      <p>{posts.body}</p>
    </>
  );
};
export default App;
