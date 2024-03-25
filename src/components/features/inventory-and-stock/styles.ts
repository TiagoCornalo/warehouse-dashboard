import styled from "styled-components";


export const CategoryStockOverviewContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`