import React, { Component } from "react";
import Axios from "axios";
import NewsItem from "./newsitem.js";
class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }
  refresh() {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-09-28&sortBy=publishedAt&apiKey=1ebca334d9c642699f6eaa8b72c6fb38"
      );
      console.log(res);
      this.setState({
        articles: res.data.articles
      });
    };
    getArticles();
  }
  render() {
    return (
      <div>
        <button onClick={() => this.refresh()}>
          <i className="fa fa-refresh" style={{ marginRight: "0px" }}></i>
        </button>
        <br />
        <br />
        <div className="newsapicontainer">
          {this.state.articles.map(
            ({ title, description, url, urlToImage }) => (
              <NewsItem
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default News;
