import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLoader from './components/helpers/MainLoader'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorUI from './components/layouts/globals/ErrorUI'

import DashboardLayout from './components/layouts/globals/Dashboard'

//context api states
import UserState from './context/user/userState'
import ResourceState from './context/resource/resourceState'

const Login = React.lazy(() => import('./components/pages/auth/Login'));
// const Register = React.lazy(() => import('./components/pages/auth/Register'));
// const ResetPassword = React.lazy(() => import('./components/pages/auth/ResetPassword'));
// const ForgotPassword = React.lazy(() => import('./components/pages/auth/ForgotPassword'));
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
       
      
                  <Route exact path="/login" component={Login} />
         

                  {/* <Route exact path="/dashboard/student" component={DashboardLayout(StudentDashboard, 'Overview')} />
                  <Route exact path="/dashboard/student/account/update" component={DashboardLayout(StudentProfileUpdate, 'Update Account')} />
                  <Route exact path="/dashboard/student/courses" component={DashboardLayout(StudentCourses, 'My Courses')} />
                  <Route exact path="/dashboard/student/courses/:id" component={DashboardLayout(StudentCourseDetails, 'Course Details', true)} /> */}

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
