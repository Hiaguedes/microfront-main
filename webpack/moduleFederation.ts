import { container } from "webpack"; 

const { ModuleFederationPlugin } = container;

const moduleFederationConfig =  new ModuleFederationPlugin(({
            name: 'mainApp',
            filename: 'remote.js',
            remotes: {
                sidebar: 'sidebarComponent@https://sidebar-mfe.netlify.app/remote.js',
                pages: 'pages@https://pages-mfe.netlify.app/remote.js',
            }
        }))
    


// const moduleFederationConfig = new container.ModuleFederationPlugin({

// })

export default moduleFederationConfig