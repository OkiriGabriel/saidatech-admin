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
const Home = React.lazy(() => import('./components/pages/Home'));
const Courses = React.lazy(() => import('./components/pages/Courses'));
const About = React.lazy(() => import('./components/pages/About'));
const Blog = React.lazy(() => import('./components/pages/blog/Blog'));
const Events = React.lazy(() => import('./components/pages/Event'));
const Contact = React.lazy(() => import('./components/pages/Contact'));
const Instructors = React.lazy(() => import('./components/pages/Instructor'));
const InstructorDetails = React.lazy(() => import('./components/pages/InstructorDetails'));
const FAQs = React.lazy(() => import('./components/pages/FAQs'));

const Login = React.lazy(() => import('./components/pages/auth/Login'));
const Register = React.lazy(() => import('./components/pages/auth/Register'));
const ResetPassword = React.lazy(() => import('./components/pages/auth/ResetPassword'));
const ForgotPassword = React.lazy(() => import('./components/pages/auth/ForgotPassword'));
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
                <Route exact path="/" component={Home} />
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/about" component={About} />
                <Route exact path="/event" component={Events} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/instructors" component={Instructors} />
                <Route exact path="/instructor-details" component={InstructorDetails} />
                <Route exact path="/Faqs" component={FAQs} />
                <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/blog" component={Blog} />
                  <Route exact path="/reset-password/:token" component={ResetPassword} />
                  <Route exact path="/forgot-password" component={ForgotPassword} />
                  <Route exact path="/no-network" component={NetworkUi} />

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