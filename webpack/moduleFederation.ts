import { container } from "webpack"; 

const { ModuleFederationPlugin } = container;

const moduleFederationConfig =  new ModuleFederationPlugin(({
            name: 'mainApp',
            filename: 'remote.js',
            remotes: {
                sidebar: 'sidebarComponent@http://localhost:3001/remote.js',
                pages: 'pages@http://localhost:3002/remote.js',
            }
        }))
    


// const moduleFederationConfig = new container.ModuleFederationPlugin({

// })

export default moduleFederationConfig