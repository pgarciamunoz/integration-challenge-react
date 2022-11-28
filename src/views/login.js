import { useState } from "react"
import { useNavigate } from "react-router"
import { post } from "../services/api"
import './login.css'


const LoginView = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        }
    )

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userResponse = await post({
                customerId: "dummy",
                action: "init",
                customerSessionId: "jgh875wdwlv0skue63",
                activityType: "LOGIN",
                uuid: "tdfvhewdwd",
                brand: "SD",
                solution: "ATO"
            });
            console.log("User Response", userResponse);
            navigate("/homeview");
            //window.location.reload();
        } catch (error) {
            console.log(error)
        }

        setUser({
            email: "",
            password: ""
        })
    }

    return (
        <div className="container mt-5">
            
            <form className="form">
                <input
                    onChange={handleChange}
                    name="email"
                    value={user.email}
                    className="form-control" type="text" placeholder="email" />
                <input
                    onChange={handleChange}
                    name="password"
                    value={user.password}
                    className="form-control" type="password" placeholder="password" />
                <button
                    onClick={handleSubmit}
                    className="form-control btn ">
                    LOG IN
                </button>
            </form>
        </div>
    )
}


export default LoginView;