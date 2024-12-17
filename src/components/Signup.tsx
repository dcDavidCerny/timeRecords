import styled from "@emotion/styled";


export const SignupComponent = () => {
    return (
        <SignupWrapper>
            <h2>Oops! No Sign-Ups Here (For Now!)</h2>
            <p>
                Hey there! 👋 <br />

                Originally, this page was meant for signing up—but I decided to skip the whole API integration adventure this time around. It’s not you; it’s me! 😅
            </p>
            <p>
                While there’s no actual sign-up functionality here, I hope you still enjoy exploring the rest of the site and the games I’ve put together. Maybe in a future project, I’ll tackle those APIs and bring sign-ups to life! <br />
                Thanks for stopping by anyway. Have fun clicking around! 🎮
            </p>
        </SignupWrapper>
    )
}

const SignupWrapper = styled.div`
    font-size: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    width: 50vw;

    h2 {
        margin-bottom: 1rem;
    }   
`