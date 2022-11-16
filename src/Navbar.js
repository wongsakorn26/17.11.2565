import { AiFillHome } from "react-icons/ai";
import { AiFillContainer } from "react-icons/ai";
export default function Navbar() {
    return <nav className="nav">
        <a href="/" className = "site-title"><AiFillHome />&nbsp; Nummerrical </a>
        <ul>
            <li className="active">
                <a  href="/RootOfEquation"><AiFillContainer />&nbsp;Root of Equation</a>
            </li>
            <li>
                <a href="/LinearAlgebraicEquation"><AiFillContainer />&nbsp;Linear Algebraic Equation</a>
            </li>
        </ul>
    </nav>
}