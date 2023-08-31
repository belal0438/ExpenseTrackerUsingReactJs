import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

// children is a reserve name and the value of these special children props will alwayes be the content between the open amd closing of your custom component Ex:- <Card> ....code..<Card/>
// <Card> these is custom which I have build that why the other code inside the Card dost not support others css class, that why we have to tell then Ex:- classes = 'card ' + props.className;

export default Card;
