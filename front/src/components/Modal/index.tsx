import { Container, Wrapper } from "./styles";

import { CgClose } from "react-icons/cg";
import { BiArrowBack } from "react-icons/bi";

interface ModalProps {
  onClose(): void;
  onBack?(): void;
  title: string;
  children?: JSX.Element;
}

export function Modal({ onClose, onBack, title, children }: ModalProps) {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === "modal") {
      onClose();
    }
  };

  return (
    <Container id="modal" onClick={handleOutsideClick}>
      <Wrapper>
        <div className="groupTexts">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {onBack ? (
              <button
                type="button"
                className="buttonClose"
                onClick={() => {
                  onBack();
                }}
              >
                <BiArrowBack size={30} color={"white"} />
              </button>
            ) : (
              <span></span>
            )}
            <h1>
              <strong>{title}</strong>
            </h1>
            <button
              type="button"
              className="buttonClose"
              onClick={() => {
                onClose();
              }}
            >
              <CgClose size={30} color={"white"} />
            </button>
          </div>
        </div>
        {children}
      </Wrapper>
    </Container>
  );
}
