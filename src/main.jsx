import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/About/About'
import Contact from './components/Contact-us/Contact'
import layout from './Layout'
import { Route } from 'react-router-dom'
import User from './components/User/User'
import Github from './components/Github/Github'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: '',
//       element: <Home />
//     },
//     {
//       path: 'about',
//       element: <About />
//     },
//     {
//       path: '/contact-us',
//       element: <Contact />
//     }]
//   }
  
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout />}>
      <Route path= '' element={<Home />} />
      <Route path= 'about' element={<About />} />
      <Route path= 'contact-us' element={<Contact />} />
      <Route path = 'user/:userid' element={<User />} />
      <Route path='github' element={<Github />}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
