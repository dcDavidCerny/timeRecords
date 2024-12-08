import { Link } from "react-router";
import { Modal } from "./Modal";

interface Props {
    level: number;
    newLevelBtnClicked: () => void;
}

export const VictoryModal = ({ level, newLevelBtnClicked }: Props) => {
    return (
        <Modal>
            <h1>U WON!</h1>
            <div>U won level {level}</div>
            <button onClick={newLevelBtnClicked}>Next Level
            </button>
            <Link to="/">Back to MiniGames</Link>
        </Modal>
    )
};