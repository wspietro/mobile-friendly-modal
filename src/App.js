import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import styled from "styled-components";

import ContactForm from "./ContactForm";
import Modal from "./Modal";

import "./styles.css";

function App() {

  return (
    <>
      <Header>
        <Title>Mary's Homepage</Title>
        <nav>
          <NavList>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/">Blog</NavLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Main>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ContactButton>
              Open contact form
            </ContactButton>
          </Dialog.Trigger>

          <Modal>
            <ContactForm />
          </Modal>
        </Dialog.Root>
      </Main>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

const NavList = styled.ul`
  display: flex;
  gap: 8px;
  list-style-type: none;
`;

const NavLink = styled.a`
  color: hsl(265deg 90% 40%);
  text-decoration: none;
  font-size: 1.25rem;
  padding: 0px 16px;
  outline-offset: 4px;
`;

const Main = styled.main`
  min-height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactButton = styled.button`
  font-size: 1.125rem;
  padding: 16px 48px;
  outline-offset: 8px;
`;

export default App;
