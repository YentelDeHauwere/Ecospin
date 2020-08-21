import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { ContactPage, HomePage, NotFoundPage, WelcomePage, SignInPage, SignUpPage, PostsPage, PostDetailPage, TestPage, DetailPage, SearchPage, LandingsPage, ProfilePostsPage, ProfileRoutesPage, MessagesPage, NotificationsPage  } from './pages';
import { AdminPage } from './admin/pages';
import { BackofficeLayout, PageLayout, ErrorLayout, AuthLayout, MapboxLayout, LandingLayout, ProfileLayout, NotifLayout } from './layouts';
import { AuthRouteWithLayout, RouteWithLayout } from './utilities';
import * as Routes from './routes';
import { ApiProvider, AuthProvider } from './services';

import './app.scss';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <ApiProvider>
          <Router basename='/'>
            <Switch>
				<RouteWithLayout exact path={Routes.TEST} component={TestPage} layout={PageLayout} />

				<RouteWithLayout exact path={Routes.LANDINGSPAGE} component={LandingsPage} layout={LandingLayout} />

				// Welcome
				<RouteWithLayout exact path={Routes.WELCOME} component={WelcomePage} layout={PageLayout} />

				// Authentication
				<RouteWithLayout exact path={Routes.AUTH_SIGN_IN} component={SignInPage} layout={AuthLayout} />
				<RouteWithLayout exact path={Routes.AUTH_SIGN_UP} component={SignUpPage} layout={AuthLayout} />

				// Product Pages
				<RouteWithLayout exact path={Routes.DETAIL} component={DetailPage} layout={MapboxLayout} />
				<RouteWithLayout exact path={Routes.SEARCH} component={SearchPage} layout={MapboxLayout} />

				// Account Pages
				<RouteWithLayout exact path={Routes.PROFILE_POSTS} component={ProfilePostsPage} layout={ProfileLayout} />
				<RouteWithLayout exact path={Routes.PROFILE_ROUTES} component={ProfileRoutesPage} layout={ProfileLayout} />

				// Notifications Pages
				<RouteWithLayout exact path={Routes.NOTIF_MESSAGES} component={MessagesPage} layout={NotifLayout} />
				<RouteWithLayout exact path={Routes.NOTIF_NOTIFICATIONS} component={NotificationsPage} layout={NotifLayout} />

				<RouteWithLayout exact path={Routes.CONTACT} component={ContactPage} layout={PageLayout} />
				<RouteWithLayout exact path={Routes.POSTS} component={PostsPage} layout={PageLayout} />
				<RouteWithLayout exact path={Routes.POST_DETAIL} component={PostDetailPage} layout={PageLayout} />
				<RouteWithLayout path={Routes.BACKOFFICE_LANDING} component={AdminPage} layout={BackofficeLayout} />

					// Home with a redirect
				<RouteWithLayout exact path={Routes.HOME} component={HomePage} layout={MapboxLayout} />
				<Redirect from={Routes.HOME} to={Routes.LANDING} />

				// Hier mag geen enkele route achter komen
				<RouteWithLayout component={NotFoundPage} layout={ErrorLayout} />
            </Switch>
          </Router>
        </ApiProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
