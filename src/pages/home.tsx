import styled from '@emotion/styled';

const Container = styled.div(props => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const SignInButton = styled.input(props => ({
  width: '200px',
  height: '50px',
  marginTop: '50px'
}))

export const Home = () => {
  return (
    <Container className="App">
      
      <form action="http://127.0.0.1:5000/api/authorize">
        <SignInButton type="submit" value="Sign in" />
      </form>
    </Container>
  );
}