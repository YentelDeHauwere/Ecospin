import { default as React} from 'react';
import { Profile } from '../components';
import { CustomPlaceholder } from 'react-placeholder-image';


const ProfileRoutesPage = () => {

  return (
	<div className="container-profile">
		<Profile />
		<div className="routes">

			{Array(10).fill(1).map(() =>
				<CustomPlaceholder className="route col-12 col-md-6 col-lg-4" width={300} height={200}/>
			)}

		</div>
	</div>
  )
};

export default ProfileRoutesPage;