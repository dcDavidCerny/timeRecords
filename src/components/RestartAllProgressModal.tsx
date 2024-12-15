import styled from "@emotion/styled"
import { Modal } from "./Modal";

export const RestartAllProgressModal = () => {
    return (
        <Modal>
            <RestartAllProgressModalWrapper>
                <div className="informationDiv">

                    <h1>Restart All Progress?</h1>
                    <p>Are you sure you want to restart all progress?</p>
                </div>
                <div className="btnsDiv">
                    <button onClick={() => {
                        localStorage.clear();
                        window.location.reload();
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
    /* height */
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
`