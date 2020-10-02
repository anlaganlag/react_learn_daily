import React, { useEffect, useState } from "react";

function Reddit({ searchTerms }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Fetch the data when the component mounts
    fetch(`https://www.reddit.com/r/${searchTerms}.json`)
      .then((resp) => resp.json())
      .then((json) =>
        // Save the posts into state
        setPosts(json.data.children.map((c) => c.data))
      );
  }, [searchTerms, setPosts]);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}><a href={post.url}>{post.title}</a> </li>



      ))}
    </ul>
  );
}
// 4. Pass "reactjs" as a prop:

export default function App() {
  // 2 pieces of state: one to hold the input value,
  // another to hold the current searchTerms.
  const [inputValue, setInputValue] = useState("");
  const [searchTerms, setSearchTerms] = useState("reactjs");
  // Update the searchTerms when the user presses enter
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerms(inputValue);
  };
  return (
    <>
      <h1>Reddit贴吧(去广告版)</h1>
      <form onSubmit={handleSubmit}>
        <label for="searchTerm" >🔎 </label>
        <input id="searchTerm" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <p>当前搜索关键词:{searchTerms}</p>
      </form>
      <Reddit searchTerms={searchTerms} />
    </>
  );
}
