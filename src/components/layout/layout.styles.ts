import styled from "styled-components";


export const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: 100vh;
  max-width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  & > main {
    width: 100%;
    padding: 2rem;
    margin-left: 3.25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      margin-left: 0;
      padding: 1rem;
    }
  }
`;

export const NavigationBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 90%;

  @media (max-width: 768px) {
    flex-direction: row;
    position: sticky;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`