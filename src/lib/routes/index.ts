const Routes = {
    Initial:"/",
    Registration: "/join",
    Login: "/login",
    Search: "/search",
    Picture:(id:number | string)=>`/picture/${id}`
}


export default Routes;
