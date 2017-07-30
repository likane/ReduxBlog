import React, { Component} from 'react';
import {connect } from 'react-redux';
import {fetchPosts } from '../action/index';

class PostsIndex extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>list of posts</div>
			);
	}
}



export default connect(null, {fetchPosts})(PostsIndex);