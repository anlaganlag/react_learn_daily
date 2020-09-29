import React, { useEffect, useState } from "react";
function App() {
  // Initialize state to hold the posts
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Fetch the data when the component mounts
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((res) => res.json())
      .then((json) =>
        // Save the posts into state
        setPosts(json.data.children.map((c) => c.data))
      );
  }); // <-- we didn't pass the 2nd arg. what will happen?
  // Render as usual
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}> {post.title} </li>
      ))}
    </ul>
  );
}
export default App;
