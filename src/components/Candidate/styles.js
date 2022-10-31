import styled from "styled-components";

export const CandidateCard = styled.li`
  position: relative;
  width: 400px;
  height: 450px;
  border-radius: 4px;
  margin: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;

  :first-child {
    :hover {
      .candidate-color {
        width: 100%;
      }
    }
  }

  :last-child {
    transition-duration: 200ms;

    :hover {
      .candidate-color {
        width: 100%;
      }
    }
  }

  :hover {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
  
  @media(max-width: 840px) {
    width: 350px;
    height: 400px;
  }

  @media(max-width: 768px) {
    width: 400px;
    height: 450px;
  }
`

export const CandidateInfo = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  height: 450px;
  display: flex;
  align-items: flex-end;
  transition-duration: 0.3s;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media(max-width: 840px) {
    width: 350px;
    height: 400px;
  }

  @media(max-width: 768px) {
    width: 400px;
    height: 450px;
  }
`

export const PercentInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1em;
  pointer-events: none;

  p {
    color: #ddd;
    font-size: 16px;
    font-weight: 500;
  }
  
  h2 {
    color: #fff;
  }
`

export const Separator = styled.div`
  height: 3px;
  width: 50%;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  transition: all 0.4s ease 0s;
  background-color: ${props => props.background};
`

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 1em;
  color: #fff;
  transition-duration: 200ms;
  margin-bottom: 1em;
`

export const TopInfoCandidate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    margin-left: 7px;
  }
`

export const CandidatePartido = styled.p`
  font-weight: bold;
  margin-top: .5em;
  display: flex;
  justify-content: center;
  font-size: 20px;
`