//背誦一下useEffect的代碼..

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ hits: [] });
  const URL = "https://hn.algolia.com/api/v1/search?query=redux";

  useEffect(() => {
    const foo = async function () {
      const res = await axios(URL);
      setData(res.data);
    };

    foo();
  }, []);

  return <div>這是Effect...</div>;
}

export default App;
