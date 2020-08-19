import { default as React} from 'react';

const NotFoundPage = ({children}) => {
  return (
    <div className="">
      <h1 className="title">404</h1>
      <p className="sub-title">The page you're looking for doesn't exist.</p>
	  <a className="description" href="/home" target="_self"> back home</a>
    </div>
  );
};

export default NotFoundPage;