import Home from "./Pages/Home/Home"
import Users from "./Pages/Users/Users"
import NewUsers from "./Pages/NewUsers/NewUsers"
import Products from './Pages/Products/Products'
import MainCourse from "./Pages/MainCourse/MainCourse"
import MainProduct from "./Pages/MainProduct/MainProduct"

let routes = [
    {path: '/', element: <Home/>},
    {path: '/users', element: <Users/>},
    {path: '/users/:id', element: <MainCourse/>},
    {path: '/newusers', element: <NewUsers/>},
    {path: '/products', element: <Products/>},
    {path: '/products/:id', element: <MainProduct/>},
]

export default routes