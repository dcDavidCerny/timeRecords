import { Link } from "react-router";
import { Modal } from "./Modal";
import styled from "@emotion/styled"
import { gameImages, MiniGameTitles } from "../pages/MiniGamesCollection";



interface Props {
    level: number;
    title: MiniGameTitles;
    newLevelBtnClicked: () => void;
}



export const VictoryModal = ({ title, level, newLevelBtnClicked }: Props) => {

    const imgSrc = gameImages[title];
    return (
        <Modal>
            <LostModalWrapper>
                <div className="h1AndMessage">
                    <h1>U LOST!</h1>
                    <div className="youLostMessage">
                        U lost {level}. level
                    </div>
                    <img src={imgSrc} alt="did not upload" width={250} height={200} />
                </div>
                <div className="buttonsDiv">
                    <button onClick={newLevelBtnClicked}>Start Again level ${level}
                    </button>
                    <button> <Link to="/">Back to MiniGames</Link> </button>
                </div>
            </LostModalWrapper>
        </Modal>
    )
};


const LostModalWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

.h1AndMessage {

}

h1 {

}
.youLostMessage {
color: red;
font-size: 1.5rem;

}

.buttonsDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
button {
margin: 40px;
padding: 20px 20px;
font-size: large;
font-weight: 600;
}

a {
text-decoration: none;
color: white;
}

`