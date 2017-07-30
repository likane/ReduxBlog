import React, { Component} from 'react';
import {connect } from 'react-redux';
import {fetchPosts } from '../action/index';
import {Link } from 'react-router';

class PostsIndex extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to ="/posts/new" className="btn btn-primary" />
				</div>
			list of posts
			</div>
			);
	}
}



export default connect(null, {fetchPosts})(PostsIndex);