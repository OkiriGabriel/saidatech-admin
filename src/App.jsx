import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLoader from './components/helpers/MainLoader'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorUI from './components/layouts/globals/ErrorUI'

import DashboardLayout from './components/layouts/globals/Dashboard'

//context api states
import UserState from './context/user/userState'
import ResourceState from './context/resource/resourceState'

// components: lazyload pages
const StudentOverview = React.lazy(() => import('./components/pages/dashboard/students/Overview'));
const StudentDetails = React.lazy(() => import('./components/pages/dashboard/students/Details'));

const InstructorOverview = React.lazy(() => import('./components/pages/dashboard/instructor/Overview'));
const InstructorDetails = React.lazy(() => import('./components/pages/dashboard/instructor/Details'));

const CourseOverview = React.lazy(() => import('./components/pages/dashboard/course/Overview'));
const CourseDetails = React.lazy(() => import('./components/pages/dashboard/course/Details'));

const Login = React.lazy(() => import('./components/pages/auth/Login'));
const NotFound = React.lazy(() => import('./components/pages/404'));
const NetworkUi = React.lazy(() => import('./components/pages/NetworkUI'));

const App = () => {

  const errorHandler = (err, info) => {

    console.log(err, 'logged error');
    console.log(info, 'logged error info');

  }
  
  return(

    <Router>

      <UserState>

          <ResourceState>

            <Suspense fallback={MainLoader.MainLoader()}>

              <ErrorBoundary fallback={ErrorUI()} onError={errorHandler} >

                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/no-network" component={NetworkUi} />

                  <Route exact path="/dashboard/student" component={DashboardLayout(StudentOverview, 'Student Overview')} />
                  <Route exact path="/dashoard/student/:id" component={DashboardLayout(StudentDetails, 'Student Details', true)} />

                  <Route exact path="/dashboard/instructor" component={DashboardLayout(InstructorOverview, 'Instructor Overview')} />
                  <Route exact path="/dashboard/instructor/:id" component={DashboardLayout(InstructorDetails, 'Instructor Details', true)} />

                  <Route exact path="/dashboard/course" component={DashboardLayout(CourseOverview, 'Course Overview')} />
                  <Route exact path="/dashboard/course/:id" component={DashboardLayout(CourseDetails, 'Course Details', true)} />

                  <Route exact path="*" component={NotFound} />
                </Switch>

              </ErrorBoundary>

            </Suspense>

          </ResourceState>
        
      </UserState>
                

    </Router>
    
  )
}

export default App;