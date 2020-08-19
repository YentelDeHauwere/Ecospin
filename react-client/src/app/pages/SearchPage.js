import { default as React, useState, useCallback, useEffect } from 'react';
import { Navbar, Inputbox, Slider, SlideItem } from '../components';

import { useApi } from '../services';

const HomePage = ({children, amount, onReadMore, className, ...rest}) => {

	const { findAllPosts } = useApi();
	const [ posts, setPosts ] = useState();
  
	const initFetch = useCallback(
	  () => {
		const fetchPosts = async () => {
		  const data = await findAllPosts({
			limit: amount,
			skip: 1
		  });
		  setPosts(data.docs);
		}
  
		fetchPosts();
	  },
	  [findAllPosts, amount],
	)
  
	useEffect(() => {
	  initFetch();
  
	  return () => {
		// no cleanup
	  }
	}, [initFetch]);
	
	const handleReadMore = (ev, postId) => {
	  ev.preventDefault();
	  if (typeof onReadMore === 'function') {
		onReadMore(postId);
	  }
	};

  return (
	<div>
		<Inputbox/>
		<Navbar />
		<Slider id="slider" >
		{posts && posts.map((post, index) => (
			<SlideItem id="slide-1" title={post.title} adress={post.adress} battery={post.battery} batteryDuration={post.batteryDuration}/>
		))}
		</Slider>
	</div>
  )

};

export default HomePage;