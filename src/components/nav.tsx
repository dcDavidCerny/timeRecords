import styled from "@emotion/styled"
import { Link } from "react-router"

export default function Nav() {
    return (
        <NavWrapper>
            <div>
                <Link to="/about">ABOUT</Link>

            </div>
            <div className="games">

                <Link to="/">GAMES</Link>
            </div>
            <div>

                <Link to="/signup">SIGN UP</Link>
            </div>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
text-align: center;
display: flex;
flex-direction: row;
justify-content: space-between;
height: 7vh;
width: 100%;
background-color: #00c3ff;
margin: 0px;
a {
    color: white;
    text-decoration: none;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    border-bottom: 1px solid yellow;
}
a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
}

div {
    height: 50px;
    margin-top: 20px;
}

.games {
    margin-right: 36px;
}
`