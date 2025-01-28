import React, { Component } from "react";
import classNames from "classnames";
import blog from "./blogData";
import "./blog.css";

export default class BlogMenu extends Component {
  renderContent = (blog) => {
    return blog.map((blog, index) => (
      <div key={index} className={`blog-sub-container-${index + 1}`}>
        <h3>{blog.title}</h3>
        <img src={blog.image} alt={blog.title}></img>
        <div className="blog-description">{blog.description}</div>
        <div className="link-container">
          <a href={blog.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={blog.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>
    ));
  };

  render() {

    return (
      <div className="blog-menu">

        <div className="blog-sub-container">
          {this.renderContent([blog[1]])}
        </div>

        <div className="blog-sub-container">
          {this.renderContent([blog[2]])}
        </div>

        <div className="blog-sub-container">
          {this.renderContent([blog[3]])}
        </div>

      

      </div>
    );
  }
}