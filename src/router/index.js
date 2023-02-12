import React from 'react';
import { Navigate } from 'react-router-dom';
import NotFound from '@/views/404';
// 懒加载
// import Home from "@/views/home"  使用懒加载 是异步加载 所以会打印2次结果
const Home = React.lazy(() => import('@/views/home'));
const Entrie = React.lazy(() => import('@/views/entrie'));
const Detail = React.lazy(() => import('@/views/detail'));

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/entrie',
    element: <Entrie />,
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '*',
    element: <NotFound />
  }
]


export default routes