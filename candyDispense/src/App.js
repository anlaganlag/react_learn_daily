import React from "react";
import "./App.css"

function App() {
  const initialChoices = ["传普", "彭思", "白登", "希腊利"];
  const [Presidents, setPresidents] = React.useState(initialChoices);
  const [list, setList] = React.useState([]);

  const choosePresident = ((candidate) => {
    setPresidents((allCandidates) => allCandidates.filter((c) => c !== candidate));
    setList([...list, candidate]);
  })
  return (
    <>
      <h1> 总统甜心排序</h1>
      <div>
        <div>可选总统</div>
          <button
            onClick={() => {
              setPresidents(initialChoices);
              setList([]);
            }}
          >
            重选
          </button>
          <ul>
            {Presidents.map((candidate) => (
              <li key={candidate}>
                <button onClick={() => choosePresident(candidate)}>选Ta</button> {candidate}
              </li>
            ))}
          </ul>
        <ul>
          {list.map((candidate, index) => (
            <li key={index} >
              <p>{`${index + 1}. ${candidate}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default App;
