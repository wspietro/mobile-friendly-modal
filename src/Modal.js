import { X } from "react-feather";
import styled from "styled-components";
import { DialogOverlay, DialogContent } from '@reach/dialog'
import * as Dialog from '@radix-ui/react-dialog'

/*
  This value is provided for your convenience.
  If you'd like, you can use it in your media
  queries! If you're not sure how to do that,
  you can use a hardcoded value for now.
  We'll learn more about breakpoints in the
  upcoming lessons.
*/
const MOBILE_BREAKPOINT = 34.375;

function Modal({
  children
}) {

  return (
    <Overlay>
      <Content>
        <Header>
          <Dialog.Title>Contact Us</Dialog.Title>
          <CloseButton>
            <X />
          </CloseButton>
        </Header>
        <ChildWrapper>{children}</ChildWrapper>
      </Content>
    </Overlay>
  );
}

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(Dialog.Content)`
  position: relative;
  background: white;
  border-radius: 0px;
  width: 100%;
  height: 100%;

  @media (min-width: ${MOBILE_BREAKPOINT}rem) {
    width: 65%;
    height: revert;
    border-radius: 8px;
  }
`;

const Header = styled.header`
  padding: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgb(0,0,0, 0.2);

  @media (min-width: ${MOBILE_BREAKPOINT}rem) {
    border: none;
  }
`;

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 3px;
  right: 0;
  background: transparent;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  color: black;

  @media (min-width: ${MOBILE_BREAKPOINT}rem) {
    top: -48px;
    color: white;
  }
`;

const ChildWrapper = styled.div`
  padding: 16px;
`;

export default Modal;
