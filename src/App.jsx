import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import HomeLayout from './Components/HomeLayout'
import Error from './Components/Error'
import Navbar from './Components/NavFoot/Navbar'
import Footer from './Components/NavFoot/Footer'
import CoursesCard from './Components/Courses/CoursesCard'
import About from './Components/About/AboutDesign'
import LongTermsCourses from './Components/LongTerms/LongTermsCourses'
import ConsentFormContent from './Components/LongTerms/ConsentFormContent'
import LongTermsDetailsCard from './Components/LongTerms/LongTermsDetailsCard'
import CourseDetails from './Components/Courses/CourseDetails'

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
)

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <HomeLayout />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: 'agreement-form',
          element: <ConsentFormContent />
        },
        {
          path: '/courses',
          element: <CoursesCard />
        },
        {
          path: '/long-terms',
          element: <LongTermsCourses />
        },
        {
          path: '/long-terms/:id',
          element: <LongTermsDetailsCard />
        },

        {
          path: '/CourseDetails/:title',
          element: <CourseDetails />
        }

      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App