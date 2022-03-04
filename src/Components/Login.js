import React from 'react'
import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
        <Content>
          <CTA>
            <CLOGO src='/images/cta-logo-one.svg' alt='' />
          </CTA>
          <BgImg />
        </Content>
    </Container>
  )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height : 100vh;
`;

const Content = styled.div`
    width: 100%;
    margin-bottom : 10vw;
    align-items: center;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 40px;
    height: 100%;
`;

const BgImg = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/images/login-background.jpg');
  position : absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.p`

`;

const CLOGO = styled.img`

`;

export default Login