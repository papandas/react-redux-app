import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(data => (
            <div key={data.id} style={{'borderBottom': '1px Solid #00FF00'}}>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
});

export default connect(mapStateToProps, {fetchPosts})(Posts);
