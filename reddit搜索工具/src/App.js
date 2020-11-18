import React, { useEffect, useState } from "react";
import moment from "moment";
import "./App.css";

let initialKeyWordList = [
  "learnjavascript",
  "reactJS",
  "javascript",
  "vuejs",
];
const KEY = "lsRedditKey";
export function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

function Reddit({ searchTerms }) {
  const [posts, setPosts] = useState([]);
  const [error, seterror] = useState(null)

  useEffect(() => {
    // Fetch the data when the component mounts
    fetch(`https://www.reddit.com/r/${searchTerms}.json`)
      .then((resp) => resp.json())
      .then((json) =>
        // Save the posts into state
        setPosts(json.data.children.map((c) => c.data))
      )
      .catch((e) => {
        console.error(e);
        seterror(e)
      })
  }, [searchTerms, setPosts]);

  return (
    <>
          {error&&<p>出错了{error};</p>}

    <ul>
      {posts.map((word,idx) => (
        <li key={word.id}>
          <a href={word.url}>{idx+1} .&nbsp;{htmlDecode(word.title)}</a>
          <span className="time">
            {"update "}
            {moment(word.created * 1000).fromNow()}
          </span>
        </li>
      ))}
    </ul>
    </>
  );
}

export default function App() {
  //输入的数值
  const [inputValue, setInputValue] = useState("");
  //搜索词
  const [searchTerms, setSearchTerms] = useState("reactjs");
  const [history, setHistory] = useState(initialKeyWordList);
  //隐藏不重要的搜索记录
  const [isHided, setisHided] = useState(true);
  //是否可以删除或者置顶
  const [delState, setEditState] = useState(false);
  const [onTop, setonTop] = useState(false);
  //coding technology software cscareerquestions
  // Update the searchTerms when the user presses enter
  useEffect(() => {
    const keyWordJson = localStorage.getItem(KEY);
    if (keyWordJson) {
      setHistory(JSON.parse(keyWordJson));
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
    setSearchTerms(inputValue);
    if (!history.includes(inputValue)){
      setHistory([...history, inputValue]);
    }

    setInputValue("");
  };
  const handleWord = (word, e) => {
    //删除该按钮
    if (delState) {
      setHistory((history) => history.filter((h) => h !== word));
      // setEditState(() => !delState);
      return;
    } else if (onTop) {
      const topItem = e.target.textContent.trim();
      setHistory([topItem, ...history.filter((item) => item !== topItem)]);
      // setonTop(() => !onTop);
    }
    setSearchTerms(e.target.textContent.trim());
  };
  const handleBackground = () => {
    setisHided(() => !isHided);
  };
  console.log(history);
  console.log(isHided);

  return (
    <>
      <h1>Reddit贴吧</h1>
      <form onSubmit={handleSubmit}>
        <label for="searchTerm"><span role="img" aria-label="搜索放大镜">🔎</span> </label>
        <input
          id="searchTerm"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => setEditState(() => !delState)}>
          {delState ? "删除模式" : "搜索模式"}
        </button>
        <button className="toTop" onClick={() => setonTop(!onTop)}>
          {onTop ? "关闭置顶" : "置顶标签"}
        </button>
        <p className={isHided ? "lessImportantTag" : ""}>
          {history.map((word) => (
            <button onClick={(e) => handleWord(word, e)} title={word}>
              {word}{" "}
            </button>
          ))}
        </p>

        {/* <button className="toTop" onClick={() => setonTop(!onTop)}>
          {onTop ? "关闭置顶" : "开启置顶"}
        </button> */}

        <button onClick={handleBackground} className="BackgroundToggle">
          {isHided ? "更多" : "隐藏"}
        </button>
        <div>
          <p className="searchResultLabel">当前搜索关键词:{searchTerms}</p>
        </div>
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
