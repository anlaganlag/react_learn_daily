import React, { useState } from "react";
import Search from "./Search";
import axios from "axios";
import ImageList from "./ImageList";

function App() {
  const [state, setState] = useState({ images: [] });
  const searchURL =
    "https://api.unsplash.com/search/photos/?client_id=Uq9ptKE0KiHhkc82EOAcM4w0scD0KZeiyPYxBXpLEcc";

  const onSearchSubmit = (term) => {
    console.log(term);
    axios
      .get(searchURL, {
        params: {
          query: term,
        },
      })
      .then((resp) => {
        setState({ images: resp.data.results });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Search onSearchSubmit={onSearchSubmit} />
      <ImageList images={state.images} />
    </div>
  );
}

export default App;
