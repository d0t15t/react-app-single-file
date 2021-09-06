import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";
import "./index.css";

const isDev = process.env.REACT_APP_ENVIRONMENT === "development";
const token = process.env.REACT_APP_INSTAGRAM_USER_TOKEN;
const itemCount = process.env.REACT_APP_INSTAGRAM_ITEM_COUNT || 3;

const getData = () => {
  if (isDev) {
    return { containerId: "dev", count: itemCount, userToken: token };
  } else {
    const { instagram_feed } = drupalSettings;
    const { container_id, item_count, user_token } = instagram_feed;
    return {
      containerId: container_id,
      count: item_count,
      userToken: user_token,
    };
  }
};

const { containerId, count, userToken } = getData();

const Root = () => {
  const [content, setContent] = useState(null);
  useEffect(
    () => setContent(<InstagramFeed token={userToken} counter={count} />),
    []
  );
  return content;
};

render(<Root />, document.getElementById(containerId));
