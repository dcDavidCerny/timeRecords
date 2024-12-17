import styled from "@emotion/styled"
import { useState } from "react";
import { RestartAllProgressModal } from "./RestartAllProgressModal";

export default function Footer() {
    const [showModal, setShowModal] = useState(false);
    return (
        <FooterWrapper>
            <div className="madeBy">

                made by {'\u00A0'}<a href="https://github.com/dcDavidCerny" target="_blank">Dave {'\u00A0'}</a> 2024
            </div>
            <div className="restartProgressBtnDiv">
                <button className="restartProgressBtn" onClick={() => {
                    setShowModal(true);
                }}>RESTART PROGRESS</button>
            </div>

            {showModal && <RestartAllProgressModal />}

        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
background-color: #00c3ff;
height: 5vh;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0px;
color: white;
font-weight: 100;
padding-top: 10px;

.madeBy {
    margin-left: 10px;
    margin-top: 10px;
}

.restartProgressBtnDiv {
    margin-right: 10px;
}

.restartProgressBtn{
    background-color: rgba(243, 255, 51, 0.33);
    color: white;
    font-weight: 600;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.restartProgressBtn:hover {
    background-color: rgba(243, 255, 51, 0.5);
    color: black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

}

a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
}
`