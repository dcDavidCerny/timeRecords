import styled from "@emotion/styled";

interface Props {
    children: React.ReactNode;
    narrow?: boolean;
}

export const Modal = ({ children, narrow }: Props) => {
    return (
        <Overlay className="modal">
            <StyledModal className={narrow ? " narrowModal" : ""}>
                {children}
            </StyledModal>
        </Overlay>
    )
};

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    backdrop-filter: blur(5px);
`;

const StyledModal = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    z-index: 100;
    position: relative;
    height: 600px;
    width: 500px;
    overflow: auto;
    text-align: center;

    &.narrowModal {
        height: 350px;
    }
    h1 {
        margin-bottom: 1rem;
    }
    button {
        background-color: #00c3ff;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover,
    button:active {
        background-color: #00b3e6;
    }
`