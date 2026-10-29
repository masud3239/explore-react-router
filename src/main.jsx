import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Mobile from './components/Mobile/Mobile';
import Laptops from './components/Laptops/Laptops';
import Users from './components/Users/Users';
import Users2 from './components/Users2/Users2';
import UsersDetails from './components/UsersDetails/UsersDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import NotFound from './components/NotFound/NotFound';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users') .then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobile', Component: Mobile},
      {path: 'laptops', Component: Laptops},
      {
        path: 'users', 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users 
      },
      {
        path: 'users2', 
        element: <Suspense fallback={<span>Loading....</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),

        Component: UsersDetails
      },
      {
        path: 'posts',
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts
      },
      {
        path:'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      },
      
    ],
  },
  
  {
        path: '*',
        Component: NotFound
      }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
