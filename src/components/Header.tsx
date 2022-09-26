import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div(props => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#1e90ff',
  width: '100%',
  height: '70px',
  boxShadow: '0px 1px 10px 1px #aaa',
  position: 'sticky',
  top: '0px',
  zIndex: '1',
  marginBottom: '10px'
}))

const Title = styled.h1(props => ({
  marginLeft: '30px',
  fontFamily: 'Open Sans',
  color: 'white', 
  fontWeight: '800'
}))

const StyledLink = styled(Link)(props => ({
  textDecoration: 'none'
}))

export const Header = () => {
  return (
    <Container >
      <nav>
        <StyledLink to='/'>
          <Title>Smart Bookmarker</Title>
        </StyledLink>
      </nav>
    </Container>
  );
}

export default Header