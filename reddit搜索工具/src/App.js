import React, { useEffect, useState } from "react";
import moment from "moment";
import "./App.css";

let v = [
  "learnjavascript",
  "reactJS",
  "javascript",
  "vueJS",
  "techsupport",
  "CodingHelp",
  "Careerguidance",
  "learnprogramming",
  "cscareerquestions",
  "computerscience",
  "technews",
  "jobs",
  "Interviews",
  "economy",
  "economics",
  "finance",
  "usnews",
  "worldnews",
  "geopolitics",
  "longreads",
];
const KEY = "lsRedditKey";

function Reddit({ searchTerms }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Fetch the data when the component mounts
    fetch(`https://www.reddit.com/r/${searchTerms}.json`)
      .then((resp) => resp.json())
      .then((json) =>
        // Save the posts into state
        setPosts(json.data.children.map((c) => c.data))
      )
      .catch((e) => alert(e));
  }, [searchTerms, setPosts]);

  return (
    <ul>
      {posts.map((word) => (
        <li key={word.id}>
          <a href={word.url}>{word.title}</a>
          <span className="time">
            {"update "}
            {moment(word.created * 1000).fromNow()}
          </span>
        </li>
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
  const [history, setHistory] = useState(v);
  const [isDark, setisDark] = useState(true);
  const [editState, setEditState] = useState(false);
  const [onTop, setonTop] = useState(false);
  //coding technology software cscareerquestions
  // Update the searchTerms when the user presses enter
  useEffect(() => {
    const keyWordJson = localStorage.getItem(KEY);
    if (keyWordJson) {
      const obj = JSON.parse(keyWordJson);
      setHistory(obj);
    }
  }, []);

  useEffect(
    () => localStorage.setItem(KEY, JSON.stringify(history)),

    [history]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      return;
    }
    if (history.includes(inputValue)) {
      alert("搜索值已经存在");
      return;
    }
    setSearchTerms(inputValue);

    setHistory([...history, inputValue]);
    setInputValue("");
  };
  const handleWord = (word, e) => {
    //删除该按钮
    if (editState) {
      setHistory((history) => history.filter((h) => h !== word));
      setEditState(() => !editState);
      return;
    }
    else if (onTop){
      const topItem = e.target.textContent.trim()
      setHistory([
        topItem,
        ...history.filter((item)=>item!=topItem),
      ]);
      setonTop(()=>!onTop)

    }
    setSearchTerms(e.target.textContent.trim());
  };
  const handleBackground = () => {
    setisDark(() => !isDark);
  };
  console.log(history);
  console.log(isDark);

  return (
    <>
      <h1>Reddit贴吧(去广告版)</h1>
      <form onSubmit={handleSubmit}>
        <label for="searchTerm">🔎 </label>
        <input
          id="searchTerm"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p className={isDark ? "green" : ""}>
          关键词:
          {history.map((word) => (
            <button onClick={(e) => handleWord(word, e)} title={word}>
              {word}{" "}
            </button>
          ))}
          <div>
            <button onClick={() => setEditState(() => !editState)}>
              {editState ? "清除标签模式" : "搜索模式"}
            </button>
          </div>
        </p>
        <button className="toTop" onClick={()=>setonTop(!onTop)}>
          {onTop ? "关闭置顶" : "开启置顶"}
        </button>
        <button onClick={handleBackground} className="BackgroundToggle">
          {isDark ? "隐藏次要标签" : "显示次要标签"}
        </button>

        <p>当前搜索关键词:{searchTerms}</p>
      </form>
      <Reddit searchTerms={searchTerms} />
      <button className="toTop">
        <a href="#top" title="回到顶部">
          回到顶部
        </a>
      </button>
    </>
  );
}
