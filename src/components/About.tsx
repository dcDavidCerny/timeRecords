import styled from "@emotion/styled";


export const AboutComponent = () => {
    return (

        <AboutWrapper>
            <div className="infoDiv">
                <h1>Thank You for Visiting!</h1>
                <p>Hey there! <br />

                    I just wanted to take a moment to thank you for spending some time on my site and exploring the mini-games I’ve created. This project started as a simple addition to my GitHub portfolio, but along the way, it turned into something much more fun and rewarding to build.</p>
                <p>The games you played, whether it was matching colors, solving equations, popping that tricky circle, or testing your memory, are a reflection of my journey learning and experimenting with JavaScript, TypeScript, React, and a variety of libraries. Each mini-game was designed to challenge myself while keeping things fun and engaging for anyone who drops by.</p>
                <p>While this might not be a site I update in the future, it’s a small milestone in my personal growth and a step toward bigger projects ahead. My ultimate goal is to continue learning, creating, and sharing ideas, and I hope this little collection of games brought a smile to your day (or at least kept you clicking for a bit longer than expected!) 😅</p>
                <p>If you found this site interesting, I’d love to hear your thoughts or even just know you stopped by! Feel free to connect or check out the rest of my portfolio on GitHub.</p>
                <p>Thank you again for your time, your clicks, and your curiosity. It means a lot! 🥰 <br />

                    Warm regards, <br /> <br />
                    {'\u00A0'}<a href="https://github.com/dcDavidCerny" target="_blank">Dave</a></p>
            </div>
        </AboutWrapper>
    )
}

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    h1 {
        margin-bottom: 1rem;
        text-align: center;
    }

    .infoDiv {
        width: 50vw;
    }
    p {
    }

    a {
        color: #00c3ff;
        text-decoration: none;
        font-weight: 600;
    }
`