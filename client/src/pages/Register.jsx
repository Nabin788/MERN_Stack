import { Link } from "react-router-dom";
import {Button, Label, TextInput} from "flowbite-react";

export const RegisterPage = () => {
    return (
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">
                <div className="flex-1 self-center ">
                    <Link to="/" className="font-bold dark:text-white text-4xl">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500
                 via-purple-500 to-pink-500 rounded rounded-lg text-white">Nabin Portfolio</span>
                    </Link>
                </div>
                <div className="m-4 flex-1">
                    <form className="flex flex-col gap-5">
                        <div>
                            <Label value="Your username"/>
                            <TextInput type="text" placeholder="Username" id="username"/>
                        </div>
                        <div>
                            <Label value="Your email"/>
                            <TextInput type="email" placeholder="example@gmail.com" id="email"/>
                        </div>
                        <div>
                            <Label value="Your password"/>
                            <TextInput type="password" placeholder="Password" id="password"/>
                        </div>
                        <Button gradientDuoTone="purpleToPink" type="submit">Sing Up</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>have an account?</span>
                        <Link to="/register" className="text-blue-500">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}