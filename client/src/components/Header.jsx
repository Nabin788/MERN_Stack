import { Link, useLocation } from "react-router-dom";
import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export const HeaderSection = () => {
    const path = useLocation().pathname;
    return (
        <header>
            <Navbar className="border-b-2">
                <Link to="/" className="flex gap-1 self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                <img src="/nabin.webp" alt="Nabin Poudel Photo" className="w-9 h-9 rounded-lg"/>
                <span className="px-2 py-2 bg-black text-white rounded">Nabin Poudel</span>
                </Link>

                <form className="hidden lg:inline">
                    <TextInput 
                    type="text" 
                    placeholder="Search..." 
                    rightIcon={AiOutlineSearch}
                    className="hiddden lg:inline" />
                </form>

                <Button className="w-12 h-10 lg:hidden" color="gray" pill>
                    <AiOutlineSearch />
                </Button>

                <div className="flex gap-2 md:order-2">
                    <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
                        <FaMoon />
                    </Button>
                    <Link to="login">
                    <Button className="text-black border-black" outline>Login</Button></Link>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse> 
                        <Navbar.Link active={path === "/"} as={"div"}>
                            <Link to="/">Home</Link>
                        </Navbar.Link>

                        <Navbar.Link active={path === "/about"}  as={"div"}>
                            <Link to="/about">About</Link>
                        </Navbar.Link>

                        <Navbar.Link active={path === "/projects"}  as={"div"}>
                            <Link to="/projects">Projects</Link>
                        </Navbar.Link>

                        <Navbar.Link active={path === "/blog"}  as={"div"}>
                            <Link to="/blog">Blog</Link>
                        </Navbar.Link>

                        <Navbar.Link active={path === "/contact"}  as={"div"}>
                            <Link to="/contact">Contact</Link>
                        </Navbar.Link>
                    </Navbar.Collapse>
            </Navbar>
        </header>
    );
};
