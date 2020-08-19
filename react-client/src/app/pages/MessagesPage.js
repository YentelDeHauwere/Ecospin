import { default as React} from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from 'react-avatar';
import { FiSearch } from "react-icons/fi";

const MessagesPage = () => {

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
		<div className="notif-notifications-item search">
			<div className="notif-notifications-item-search"><FiSearch/> Search in chat</div>
		</div>
		<div className="notif-notifications-item">
			<div className="notif-notifications-item-left">
				<Avatar className="notif-notifications-item-left-img" facebookId="100008343750290" size="45"/>
				<p><b>Emira Okutan</b> Yea, ill let you know</p>
			</div>
			<p className="notif-notifications-item-right">12:13</p>
		</div>

		<div className="notif-notifications-item">
			<div className="notif-notifications-item-left">
				<Avatar className="notif-notifications-item-left-img" facebookId="100008343754400" size="45"/>
				<p><b>Mark West</b> You: Idk man, ask Casey</p>
			</div>
			<p className="notif-notifications-item-right">11:59</p>
		</div>

		<div className="notif-notifications-item">
			<div className="notif-notifications-item-left">
				<Avatar className="notif-notifications-item-left-img" facebookId="100008343750450" size="45"/>
				<p><b>Casey Lambrechts</b> And that's on Jesus</p>
			</div>
			<p className="notif-notifications-item-right">Thu</p>
		</div>

		<div className="notif-notifications-item">
			<div className="notif-notifications-item-left">
				<Avatar className="notif-notifications-item-left-img" facebookId="100008243750450" size="45"/>
				<p><b>Seth Doyle</b> Hey</p>
			</div>
			<p className="notif-notifications-item-right">7 apr</p>
		</div>
	</div>
</div>
  )
};

export default MessagesPage;