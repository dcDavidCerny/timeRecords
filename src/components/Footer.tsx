import styled from "@emotion/styled"

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="madeBy">

                made by {'\u00A0'}<a href="https://github.com/dcDavidCerny" target="_blank">Dave {'\u00A0'}</a> 2024
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
background-color: #00c3ff;
height: 5vh;
width: 100%;
display: flex;
margin: 0px;
color: white;
font-weight: 100;
padding-top: 10px;

.madeBy {
    margin-left: 10px;
    margin-top: 10px;
}

a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
}
`