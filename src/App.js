import React, { useState } from 'react';
const [posts, setPosts] = useState([
  { userId: 1, id: 200, title: `lorem`, body: "body1" },
  { userId: 2, id: 300, title: `score`, body: "body2" },
]);

const [userId, setuserId] = useState(0);
const [id, setID] = useState(0);
const [title, setTitle] = useState("");
const [body, setBody] = useState("");

return (
  <>
    {posts.map((post, i) => {
      console.log(post.body);
      return (
        <div key={i}>
          <p>{post.body}</p>
          <p>{post.title}</p>
          
        </div>
      );
    })}

    <p>{posts.body}</p>
  </>
);

export default App