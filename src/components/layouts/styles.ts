import styled from "styled-components";


export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  & > main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    padding: 0 1rem;

    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
`;

export const LayoutContainerAuth = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  min-height: 100vh;
  max-width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  & > button {
    margin: 1rem;
  }

  & > main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }
`

export const NavigationBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 1rem;
  height: 70px;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    height: 7rem;
    flex-direction: column-reverse;
    justify-content: center;
    position: sticky;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`
export interface MenuContainerProps {
  open: boolean;
}

export const MenuContainer = styled.div<MenuContainerProps>`
  max-height: ${(props) => (props.open ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  position: absolute;
  z-index: 1;
  top: 2.5rem;
  left: 0;
  width: 100%;
`;