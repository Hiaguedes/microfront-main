import React, { FC } from "react";

export type SidebarItems = {
    itens: [{
        link: string,
        name: string,
    }]
}

const Sidebar: FC<SidebarItems> = ({ itens }) => {
    return (
        <aside style={{
            width: '170px',
            height: '100vh',
            overflowY: 'auto',
            backgroundColor: '#e6e6e6',
            padding: '15px',
        }}>
            {
                itens.map(item => (<a href={item.link}>{item.name}</a>))
            }
        </aside>
    )
};

export default Sidebar;