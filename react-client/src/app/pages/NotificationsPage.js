import { default as React} from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from 'react-avatar';

const NotificationsPage = () => {

  return (
	<div>
		<div className="notif-nav">
			<NavLink to='/notif/notifications'  className="notif-nav-item" activeClassName="notif-nav-item-active">
				Notifications
			</NavLink>
			<NavLink to='/notif/messages'  className="notif-nav-item" activeClassName="notif-nav-item-active">
				Messages 
			</NavLink>
		</div>

		<div className="notif-notifications">
			<div className="notif-notifications-item">
				<div className="notif-notifications-item-left">
					<Avatar className="notif-notifications-item-left-img" facebookId="100008343750900" size="45"/>
					<p><b>Jakob Owens</b> liked your route Rothenberg</p>
				</div>
				<p className="notif-notifications-item-right">1h</p>
			</div>

			<div className="notif-notifications-item">
				<div className="notif-notifications-item-left">
					<Avatar className="notif-notifications-item-left-img" facebookId="100008343750400" size="45"/>
					<p><b>Shareon Garcia</b> liked your comment: Mooie baby</p>
				</div>
				<p className="notif-notifications-item-right">1h</p>
			</div>

			<div className="notif-notifications-item">
				<div className="notif-notifications-item-left">
					<Avatar className="notif-notifications-item-left-img" facebookId="100008343750950" size="45"/>
					<p><b>Nico Marks</b> liked your post</p>
				</div>
				<p className="notif-notifications-item-right">1h</p>
			</div>
		</div>
	</div>
  )
};

export default NotificationsPage;