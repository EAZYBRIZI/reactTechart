import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToDoList from "../../modules/toDoList";
import NotMain from "../../modules/notMain";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ToDoList/>
    },
    {
        path: "/notmain",
        element: <NotMain/>
    }
])

const Route = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default Route