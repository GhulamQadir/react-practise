import { NavLink } from "react-router-dom";


function Links() {
    return (
        <div>
            <ul>

                <li><NavLink className="underline decoration-4 decoration-green-700 font text-3xl" to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
                <li><NavLink to={'/profile'}>Profile</NavLink></li>
                <li><NavLink to={'/api-data'}>Api Data</NavLink></li>
                <li><NavLink to={'/ecommerce-app'}>Cart Home Page</NavLink></li>
            </ul></div>
    )
}
export default Links;