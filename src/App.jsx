import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import GlobalStyle from './styles/GlobalStyle.styles';
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<HomePage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'project/:id',
                element: <ProjectDetailPage />
            },
        ]
    }]
)

function App() {
    return(
        <>
        <GlobalStyle />
            <RouterProvider router={router}/>
        </>
    )
}
export default App;