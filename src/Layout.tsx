import React from 'react';
import { Link } from 'react-router-dom';

const RemoteSidebar = React.lazy(() => import('sidebar/sidebar'!));

type Routes = [{path: string, name: string, element: React.JSX.Element}]
const Layout = ({children, routes}: { children: React.JSX.Element, routes: Routes }) => {

    const itens = Array.isArray(routes) && routes && routes.map(route => (<Link to={'/'+ route.path}>{route.name}</Link>))

    if(!routes) {
        return <p>Sem rotas</p>
    }

    return (
        <main style={{
            overflow: 'hidden',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <React.Suspense fallback="...carregando">
                <RemoteSidebar
                    itens={itens}
                />
            </React.Suspense>
            <div 
                data-testid="content-wrapper"
                style={{
                    padding: '15px',
                    width: '100%',
                    height: '100%',
                }}
                >
                    {children}
                    
            </div>
        </main>
    )
}

export default Layout;