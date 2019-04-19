import React, { Component } from 'react';
import Blogposts from './Blogposts';
import News from './News';
import wakeup from '../images/wakeup.png';
import code from '../images/coding.png';
import tech from '../images/techtoday.jpg';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
    state = {
        blogposts: [
            { 
              date: '04/04/2019', 
              title: 'Why do we wake up early?', 
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed nulla pariatur non proident, sunt in culpa qui officia deserunt mollit anim id est laborumimage", 
              image: wakeup, 
              id: 1
            },
              
            { 
              date: '03/06/2019', 
              title: 'The Benefits of Learning to Code', 
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed nulla pariatur non proident, sunt in culpa qui officia deserunt mollit anim id est laborumimage", 
              image: code, 
              id: 2
            },
            { date: '04/26/2018', 
              title: 'Technology Today', 
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed nulla pariatur non proident, sunt in culpa qui officia deserunt mollit anim id est laborumimage", 
              image: tech, 
              id: 3
            }
          ]
    }

    render() {
        return (
            <div className="container">
                <Header />

                <div className="main">
                    <div className="main-blog">
                        <Blogposts blogposts = { this.state.blogposts } />
                    </div>
                </div>

                <div className="news-info">
                    <News items = { this.state.items } />
                </div>

                <Footer />
            </div>
        )
    } 
}

export default Home;