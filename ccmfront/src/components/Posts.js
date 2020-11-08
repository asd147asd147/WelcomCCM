import React, { Component } from 'react';
import './ProblemContent.css';

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount(){
        fetch('http://127.0.0.1:3001/')
            .then(res => res.json())
            .then(data => this.setState({
                posts: data
            }));
    }
    render() {
        const { posts } = this.state;
        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default Posts;