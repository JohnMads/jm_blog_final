import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Blogposts extends Component {

    render() {
        const { blogposts } = this.props;
        const blogList = blogposts.map(blog => {
            return (
                <div className="blog" key={blog.id}>
                    <div className="date">{ blog.date }</div>
                    <div className="blog-info">
                        <NavLink style={{ textDecoration: 'none', color: 'black'}} to={'/Blog' + blog.id +'/' + blog.id}>
                            <h1>{ blog.title }</h1>
                        </NavLink>
                        <img src={blog.image} alt="blog"></img>
                        <div className="blog-text">{ blog.desc }</div>
                    </div>
                </div>
            )
        })
        return(
            <div className="blog-list">
               { blogList }
            </div>
        )
    }
}

export default Blogposts;