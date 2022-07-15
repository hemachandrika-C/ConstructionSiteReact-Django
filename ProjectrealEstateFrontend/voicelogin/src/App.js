import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';

import AboutPage from './Pages/AboutPage/AboutPage';

import GalleryPage from './Pages/GalleryPage/GalleryPage';

import UpcomingProject from './Pages/upcomingProjects/upComingProject';

import OngoingProject from './Pages/onGoingProjectPage/onGoingProjectPage';

import Login from './containers/Login';

import Signup from './containers/signup';

import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';

import AskRecipes from './Pages/AskRecipes/askRecipes'



import {Provider} from 'react-redux'
import store from './store'


import Layout from './hocs/layout';

const App = () => (

    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                  
                    <Route path="/" component={HomePage}  exact/>
                    <Route path="/about" component={AboutPage}  exact/>
                    <Route path="/Gallery" component={GalleryPage}  />
                    <Route path="/UpComingProject" component={UpcomingProject}  />
                    <Route path="/OnGoingProject" component={OngoingProject}  />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/reset_password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                    <Route exact path='/askrecipe' component={AskRecipes}></Route>
                </Switch>
            </Layout>
        </Router>
      </Provider>
   
);

export default App;