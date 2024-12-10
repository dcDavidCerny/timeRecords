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
            <VictoryModalWrapper>
                <div className="h1AndMessage">
                    <h1>U WON!</h1>
                    <div className="YouWonMessage">
                        {level < 6 ? `U won level ${level}` : `U won all ${level} levels`}
                    </div>
                    <img src={imgSrc} alt="did not upload" width={250} height={200} />
                </div>
                <div className="buttonsDiv">
                    <button onClick={newLevelBtnClicked}>{level < 6 ? `Start Level ${level + 1}` : `Start Again level ${level}`}
                    </button>
                    <button> <Link to="/">Back to MiniGames</Link> </button>
                </div>
            </VictoryModalWrapper>
        </Modal>
    )
};


const VictoryModalWrapper = styled.div`
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
.YouWonMessage {
color: green;
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