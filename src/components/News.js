import React, { Component } from 'react';
import axios from 'axios'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=")
          .then(res => {
            console.log(res)
              const data = res.data.articles.slice(0,6);
              this.setState({isLoaded: true, items: data})
              console.log("get the news!");
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              })
            })
      }, 5000) //5 seconds

    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      const { error, isLoaded, items } = this.state;
          if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
              return <div>Loading...</div>;
          } else {
            console.log(this.state.items);
              return (
                <div className="news=items">
                  {items.map(item => (
                    <div key={item.title}>
                      <div className="news-title">{item.title}</div>
                      <a href= {item.url} target="_blank" rel="noopener noreferrer">
                        <img src= {item.urlToImage} alt="news story"></img>
                      </a>
                    </div>
                  ))}
                </div>
              );
            }

    }
}

export default News;