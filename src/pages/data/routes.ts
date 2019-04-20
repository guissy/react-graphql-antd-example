// Routes

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */

// We're using `react-router-dom` to handle routing, so grab the `RouteProps`
// type that we'll use to ensure our own types conform to the expected configuration
import { RouteProps } from "react-router-dom";
// @ts-ignore
import _404 from '@/pages/404';
// @ts-ignore
// import * as Analysis from '@/pages/dashboard/Analysis';
// @ts-ignore
// import * as Monitor from '@/pages/dashboard/Monitor';
// @ts-ignore
// import * as Workplace from '@/pages/dashboard/Workplace';

/* Local */

// Components

// By default, pull in the ReactQL example. In your own project, just nix
// the `src/components/example` folder and replace the following line with
// your own React components
import Example from "@/pages/example/example";
import Login from '@/pages/login/Login';
import Index from "@/pages/main/Main";
import BasicLayout from '@/layouts/BasicLayout';
import Abc from '@/pages/Dashboard/Abc';

// ----------------------------------------------------------------------------

// Specify the routes. This is provided as an array of `RouteProp`, which is
// a type provided by `react-router-dom` for rendering a route. Typically, this
// will contain at least a component and a path
const routes: RouteProps[] = [
  {
    component: Example, // <-- this is the component that'll be rendered
    exact: true, // <-- this says to ONLY match when the path is exactly '/'
    path: "/ab" // <-- ... and this is the actual path to match on
  },
  {
    component: Index, // <-- this is the component that'll be rendered
    exact: true, // <-- this says to ONLY match when the path is exactly '/'
    path: "/index" // <-- ... and this is the actual path to match on
  },
  {
    component: Login, // <-- this is the component that'll be rendered
    exact: true, // <-- this says to ONLY match when the path is exactly '/'
    path: "/login" // <-- ... and this is the actual path to match on
  },
  // { path: '/', exact: true, redirect: '/dashboard/analysis', authority: ['admin', 'user'] } as any,
  {
    path: '/',
    exact: true,
    component: BasicLayout,
  },
  {
    component: _404,
  },
];

export default routes;
