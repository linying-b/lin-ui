import { each } from "lodash-es";
import type { App, Plugin } from "vue";


export function makeInstaller(components:Plugin[]){

    const installer = (app:App)=>each(components,(c)=>app.use(c))


    return installer as Plugin
}

export const WithInstall = <T>(component:T)=>{
    (component as SFCWithInstall<T>).install =(app:App)=>{
        const name = (component as any).name
        app.component(name,component as Plugin)
    }

    return component as SFCWithInstall<T>
}