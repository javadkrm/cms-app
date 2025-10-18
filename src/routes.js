import Home from "./Pages/Home/Home"
import Users from "./Pages/Users/Users"
import NewUsers from "./Pages/NewUsers/NewUsers"
import Products from './Pages/Products/Products'

let routes = [
    {path: '/', element: <Home/>},
    {path: '/users', element: <Users/>},
    {path: '/newusers', element: <NewUsers/>},
    {path: '/products', element: <Products/>},
]

export default routes