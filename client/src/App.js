import { createBrowserRouter, RouterProvider, Router, Route } from "react-router-dom";
import NotFound from "./template/notfound";
import Collabo from "./template/Collabo";
import Pmanage from "./template/Pmanage";
import Search from "./template/Search";
import ChatGpt from "./template/ChatGpt";
import Dashboard from "./template/Dashboard";

function App() {
  const router = createBrowserRouter([
    {path : '/', element : <Dashboard />},
    {path : '/collabo', element : <Collabo />},
    {path : '/pmanage', element : <Pmanage />},
    {path : '/search', element : <Search />},
    {path : '/chatgpt', element : <ChatGpt />},
    {path : '*', element : <NotFound />}
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
