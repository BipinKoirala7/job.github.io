import { createBrowserRouter,Outlet, RouterProvider } from 'react-router-dom'
import './App.css'

import HomeNavbar from './components/HomeNavbar'
import Home from './Home/home'
import FindJob from './FindJob/findJob'
import Faqs from './FAQs/Faqs'
import UploadJob from './UploadJob/UploadJob'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Root />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/find-job',
            element: <FindJob />
          },
          {
            path: '/upload-job',
            element: <UploadJob />
          },
          {
            path: '/faqs',
            element: <Faqs />
          }
        ]
      }
    ]
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
const Root = ():JSX.Element => {
  return (
    <main className='flex flex-col gap-2 bg-primary text-secondary min-h-[100vh] w-full'>
      <HomeNavbar/>
      <div className='px-2'>
        <Outlet />
      </div>
    </main>
  )
}

export default App
