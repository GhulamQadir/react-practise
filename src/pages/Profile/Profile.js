import Links from "../../components/Links/Links";
import { Outlet, useParams, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import useRoutesStore from "../../store/routesStore";
export default function Profile() {
    const navigate = useNavigate()


    const setUser = useRoutesStore((state) => state.setIsUser)

    const logout = () => {
        setUser(false)
        navigate('/')
    }

    const { state } = useLocation()
    // const userName = state.name
    const { id } = useParams();

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get("user"))
    return (
        <div>
            <h1>Profile <span>({id})</span></h1>
            {/* <h2>{userName}</h2> */}
            <Links />
            <br />
            <br />
            <button onClick={logout}>Logout</button>
            <br />
            <br />
            <Outlet />
        </div>
    );
}
