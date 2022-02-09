import React, { useState } from "react";

import Accordion from "../components/accordion/accordion";
import Search from "../components/search/search";
import Dropdown from "../components/dropdown/dropdown";
import Translate from "../components/translate/translate";

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
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;

// <Dropdown
//   selected={selected}
//   onSelectedChange={setSelected}
//   option={options}
// />
// <Search />
// <Accordion items={items} />
