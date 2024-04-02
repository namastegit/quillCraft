import { Link, Navigate, useNavigate } from "react-router-dom"
import { InputBox } from "./inputbox"
import { useState } from "react"
import { SignupInput } from "@100xdevs/medium-common"
import { Button } from "./button"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Authsignup = ({ type }: { type: "Sign up" | "Sign in" }) => {
    const navigate = useNavigate();
    const [signUPInputs, setSignUPInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: "",

    })
    async function sendRequest() {
        try { const response = await axios.post(`${BACKEND_URL}/api/v1/user${type === "Sign up" ? "/signup" : "/signin"}`,signUPInputs);

    const jwt = response.data;
    localStorage.setItem("token",jwt);
    type === "Sign up" ? navigate("/signin") : navigate("/blog/bulk");
    } catch (e) {
            alert("ERROR OCCURED")
        }

    }
    return <div className=" h-screen flex justify-center flex-col p-2.5">
        <div className="flex justify-center">
            <div >
                <div className="px-20">
                    <div className="text-3xl font-extrabold bg-black-950 p-2.5 rounded-full italic">
                        {type === "Sign in" ? "Sign in Now" : "Create an account"}
                    </div>
                    <div className="pt-1 text-slate-600 text-center italic ">
                        {type === "Sign in" ? "Don't have an account" : "Already have an account?"}
                        <Link className="pl-2 underline italic text-slate-800" to={type === "Sign in" ? "/signup" : "/signin"}>{type === "Sign in" ? "Singup" : "Signin"}</Link></div> </div>
                <div>
                    {type === "Sign up" ? <InputBox label="Name" placeholder="Akshay..." onChange={(e) => {
                    setSignUPInputs({
                        ...signUPInputs, //spread signUPInput object and give name  key
                        name: e.target.value   //overriding name key
                    })
                }} /> : null}


                    <InputBox label="Username" placeholder="akshay123@gmail.com" onChange={(e) => {
                        setSignUPInputs({
                            ...signUPInputs, //spread signUPInput object and give name  key
                            username: e.target.value   //overriding name key
                        })
                    }} />

                    <InputBox label="Password" type={"password"} placeholder="123@abc" onChange={(e) => {
                        setSignUPInputs({
                            ...signUPInputs, //spread signUPInput object and give name  key
                            password: e.target.value   //overriding name key
                        })
                    }} />
                </div>
                <div className="flex justify-center">
                    <Button onClick={sendRequest} label={type} />
                </div>

            </div>
        </div>


    </div>
}