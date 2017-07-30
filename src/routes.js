 import React from 'react';
 import { Route, IndexRoute} from 'react-router';

 import App from './components/app';
 import PostsIndex from './components/posts_index';
 import PostsNew from './components/PostsNew';

 

 export default (

<Route path="/" component={App}>
	<IndexRoute component={postsIndex}/>
	
	<Route path="posts/new" component={PostsNew} />
</Route>


);

 