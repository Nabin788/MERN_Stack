import { Link } from "react-router-dom"

export const HeaderSection = () => {
    return (
        <header>
            <Link to="/"><img src="/myImage.web" alt="Nabin Poudel Image" /></Link>
            <nav>
                <ul className="d-flex">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    )
}