import styled from "styled-components";

export const Layout = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 600;
    font-size: 20px;
  }
`

export const UrnasApuradas = styled.label`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: -1em;
  margin-top: 1em;
  background-color: #47864b;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
`

export const LastUpdateAt = styled.label`
  font-weight: 500;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 1em;
  color: #666;
`

export const CandidatesList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`