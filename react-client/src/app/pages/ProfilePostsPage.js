import { default as React} from 'react';
import { Profile } from '../components';
import { CustomPlaceholder } from 'react-placeholder-image';

const ProfilePostsPage = () => {

  return (
	<div className="container-profile">
		<Profile />
		<div className="posts">

			{Array(30).fill(1).map(() =>
				<CustomPlaceholder className="post col-6 col-md-4" width={100} height={100}/>
			)}

		</div>
	</div>
  )
};

export default ProfilePostsPage;