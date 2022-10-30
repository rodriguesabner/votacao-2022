import styled from "styled-components";

export const Image = styled.img.attrs({
    draggable: false
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  border-radius: 4px;
`