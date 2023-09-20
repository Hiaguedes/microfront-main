import React from 'react';
import Sidebar from './Sidebar';

const RemoteSidebar = React.lazy(() => import('sidebar/sidebar'!))

const App = () => {
    return (
        <main style={{
            overflow: 'hidden',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <Sidebar itens={[
                {link: './pagina-1', name: 'Pagina 1'}
            ]}/>
            <div 
                data-testid="content-wrapper"
                style={{
                    padding: '15px',
                    width: '100%',
                    height: '100%',
                }}
                >
                    <React.Suspense fallback="...carregando">
                        <RemoteSidebar
                            itens={[
                                {link: 'testeMicrofront', name: 'Teste microfront'}
                            ]}
                        />
                    </React.Suspense>
            </div>
        </main>
    )
}

export default App;