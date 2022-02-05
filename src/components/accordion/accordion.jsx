import React, { useState } from "react";

const Accordion = ({ items }) => {
  // useState() => primitive hook, takes in initial value
  // function that lets you use state in a functional component
  // const [(piece of state), (function to change state) = useState(initial value)]
  const [activeIndex, setActiveIndex] = useState(null);

  // helper component in function component
  // not as helpful in non Class based components
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
