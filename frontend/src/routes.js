import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import TodoPage from './pages/examples/TodoPage';
import StudentPage from './pages/examples/StudentPage';
import AppointmentPage from './pages/examples/AppointmentPage';
import ForbiddenPage from './pages/errors/ForbiddenPage';
import NotFoundPage from './pages/errors/NotFoundPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const routes = [
  {
    path: '/app',
    component: DashboardLayout,
    routes: [
      {
        path: '/app/examples/students',
        component: StudentPage
      },
      {
        path: '/app/examples/todos',
        component: TodoPage
      },
      {
        path: '/app/examples/appointments',
        component: AppointmentPage
      },      
      {
        path: '/app/home',
        component: HomePage
      },
      {
        path: '/app/about',
        component: AboutPage
      },
      {
        path: '/app/forbidden',
        component: ForbiddenPage
      },
      {
        path: '/app/notfound',
        component: NotFoundPage
      },
      {
        path: '*',
        component: NotFoundPage
      },
    ],
  },
  {
    path: '/',
    component: MainLayout,
    routes: [
      {
        path: "/",
        component: HomePage
      },
      {
        path: "*",
        component: NotFoundPage
      },
    ]
  }
];

export default routes;
