import styled from "@emotion/styled"
import { Link } from "react-router";
import { getCompletedGame } from "../utils/localStorage";
import { MiniGameTitles } from "../pages/MiniGamesCollection";

interface Props {
    title: MiniGameTitles;
    description: string;
    imgSrc?: string;
}

export default function MiniGame({ title, description, imgSrc }: Props) {
    const completed = getCompletedGame(title);
    return (
        <MiniGameWrapper>
            <h1>{title}</h1>
            <img src={imgSrc} alt="did not upload" width={150} height={100} />
            <p className="description">{description}</p>
            <div className="recordLine">

                <p>Completed: {completed ? <span className="green">YES</span> : <span className="red">NO</span>}</p>
            </div>
            <Link to={"game/" + title}>
                <button className="startBtn">START IT!</button>
            </Link>
        </MiniGameWrapper>
    )
}

const MiniGameWrapper = styled.div`
margin-top: 10px;
margin-bottom: 10px;
height: 450px;
width: 350px;
padding: 5px;
background-color: #dbee07;
text-align: center;
.description{
    text-align: start;
    border: 1px solid white;
    height: 75px;
    padding: 10px;
}
.recordLine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border: 1px solid white;
    padding: 10px;
}

button {
    background-color: #00c3ff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.startBtn {
    margin-top: 10px;
    width: 100%;
}

.green {
    color: green;
}

.red {
    color: red;
}
`