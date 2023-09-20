/// <reference types="react" />
import { SidebarItems } from "@src/Sidebar";

export type { SidebarItems }

declare module 'sidebarComponent/sidebar' {
      const RemoteApp: React.FC<SidebarItems>;
    
      export default RemoteApp;
    }