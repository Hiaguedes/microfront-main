import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';

type Routes = [{path: string, name: string, element: React.JSX.Element}]
const App = () => {
    const [routes, setRoutes] = useState<Routes>({} as Routes)

    useEffect(() => {
        const getRoutes = async () => {
            const routes = await import('pages/routes'!) as { default: Routes };

            setRoutes(routes.default);
        }

        getRoutes();
    }, [])

    const RoutesToRender = Array.isArray(routes) && routes.map(route => (
        <Route path={route.path} element={<Layout routes={routes}>{route.element}</Layout>} />
    ))

   return  (
        <BrowserRouter basename='/'>
            <h1>H1</h1>
            <Routes>
                <Route path='/' element={<Layout routes={routes}><h1>Index</h1></Layout>} />
                {Array.isArray(routes) && RoutesToRender}
            </Routes>
        </BrowserRouter>               
    )
}

export default App;