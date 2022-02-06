import React, { useState } from "react";

import Accordion from "../components/accordion/accordion";
import Search from "../components/search/search";
import Dropdown from "../components/dropdown/dropdown";

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Green",
    value: "green",
  },
];

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        option={options}
      />
    </div>
  );
};

export default App;

// <Search />
// <Accordion items={items} />
