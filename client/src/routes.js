import Home from "./components/Home";
import HomePage from "./components/HomePage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import route from "./utils/route";

const routes = [
    {
        path: '/',
        isAuth: true,
        component: <HomePage />,
        exact : true
    },
    {
        path: '/home',
        isAuth: true,
        component: <HomePage />,
        exact : true
    },
    {
        path: `/${route.LOGIN}`,
        isAuth: true,
        component: <Login />,
        exact : true
    },
    {
        path: `/${route.REGISTER}`,
        isAuth: true,
        component: <Register />,
        exact : true
    },
    {
        path: `/${route.CHAT}`,
        isAuth: true,
        component: <Home />,
        exact : true
    }
]

export default routes;