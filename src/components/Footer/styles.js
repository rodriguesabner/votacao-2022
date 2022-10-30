import styled from "styled-components";

export const Layout = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: .5em;

  @media(max-width: 768px) {
    margin-bottom: 3em;
  }
`;

export const OriginData = styled.p`
  margin-bottom: 1.5em;
  color: #666;
`

export const AuthorCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  #avatar {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const AuthorInfo = styled.div`
  margin-left: 10px;

  h2 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`
export const SocialMediaWrapper = styled.div`
  margin-top: 10px;
  
  a {
    img {
      height: 25px;
      width: 25px;
    }
  }
`