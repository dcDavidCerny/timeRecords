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
    const level = getCompletedGame(title);
    const completed = getCompletedGame(title);

    const levelIndicator = "levelIndicator";
    return (
        <MiniGameWrapper>
            <h1>{title}</h1>
            <img src={imgSrc} alt="did not upload" width={150} height={100} />
            <p className="description">{description}</p>
            <div className="recordLine">

                <p className="oneLineParagraph">Completed: {completed ? <div className="levelIndicatorWrapper">
                    <div className={`${levelIndicator} ${level > 0 ? "levelIndicatorCompleted" : ""}`}></div>
                    <div className={`${levelIndicator} ${level > 1 ? "levelIndicatorCompleted" : ""}`}></div>
                    <div className={`${levelIndicator} ${level > 2 ? "levelIndicatorCompleted" : ""}`}></div>
                    <div className={`${levelIndicator} ${level > 3 ? "levelIndicatorCompleted" : ""}`}></div>
                    <div className={`${levelIndicator} ${level > 4 ? "levelIndicatorCompleted" : ""}`}></div>
                    <div className={`${levelIndicator} ${level > 5 ? "levelIndicatorCompleted" : ""}`}></div>




                </div>
                    : <span className="red">Did not even finish 1. level yet
                        <div className="svgTooltip">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                            </svg>
                            <span className="tooltipText">What a noob 😆</span>
                        </div>
                    </span>}
                </p>
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

.levelIndicatorWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
    margin-left: 20px;
}

.red {
    color: red;
}

.oneLineParagraph {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.bi {
    margin-left: 5px;
    font-size: 1rem;
    cursor: pointer;
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted #ccc;
    color: #bbbbbb;
    left: 215px;
    bottom: 20px;

}

.bi:hover {
    color: #006080;
}

.svgTooltip:hover .tooltipText {
    visibility: visible;
}

.svgTooltip {
    position: relative;
    width: max-content;
}

.tooltipText {
    visibility: hidden;
    position: absolute;
    left: 270px;
    bottom: 20px;
    background-color: #006080;
    color: white;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    width: 150px;

}

.levelIndicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(255, 0, 0, 0.7);
}

.levelIndicatorCompleted {
    background-color: green;
}


`