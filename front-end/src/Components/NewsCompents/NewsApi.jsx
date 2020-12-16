import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewsData } from "../../Redux/NewsRedux/ActionCreator";
import Banner from "./Banner";
import TopNews from "./TopNews";
// import BreakingNews from "./BreakingNews";

function NewsApi() {
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(getNewsData());
  });

  return (
    <div className="App">
      <Banner />
      {/* <BreakingNews/> */}
      <TopNews />
    </div>
  );
}

export default NewsApi;
// 1c27e766c09a4c0aad35869cdf3bc0d3
// https://newsapi.org/v2/top-headlines?country=us&apiKey=1c27e766c09a4c0aad35869cdf3bc0d3
