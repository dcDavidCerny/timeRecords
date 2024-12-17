import styled from "@emotion/styled"
import { Modal } from "./Modal";
import { useEffect, useState } from "react";

export const RestartAllProgressModal = () => {

    const [allowToClick, setAllowToClick] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setAllowToClick(true);
        }, 3000);
    }, []);
    return (
        <Modal narrow>
            <RestartAllProgressModalWrapper>
                <div className="informationDiv">

                    <h1>Restart All Progress?</h1>
                    <p>Are you sure you want to restart all progress?</p>
                </div>
                <div className="btnsDiv">
                    <button className={"btnYes" + (allowToClick ? " allowed" : "")} onClick={() => {
                        if (allowToClick) {

                            localStorage.clear();
                            window.location.reload();
                        }
                    }}>Yes</button>
                    <button onClick={
                        () => {
                            window.location.reload();
                        }
                    }>Cancel</button>
                </div>



            </RestartAllProgressModalWrapper>
        </Modal >
    )
}
// if (3s)

const RestartAllProgressModalWrapper = styled.div`

.informationDiv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 300px;
    h1 {
        color: red;
        margin-bottom: 1rem;
    }
    p {
        color: red;
    }
}

.btnsDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

button {
    width: 150px;
    font-weight: 600;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #00c3ff;
}

.btnYes {
   background-color: rgba(0, 195, 255, 0.33);
   animation: allowToClickTrans 3s forwards linear;
}

@keyframes allowToClickTrans {
    0% {
        background-color: rgba(150, 177, 185, 0.33);
    }
    95% {
        background-color: rgba(52, 183, 223, 0.7);
    }
    100% {
        background-color: #00c3ff;
    }
}

button.allowed:hover {
    background-color: #00b3e6 !important;
}
`;