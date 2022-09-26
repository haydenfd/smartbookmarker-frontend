import styled from "@emotion/styled";
import Header from "./Header";

const Container = styled.div(props => ({
  width: '85%',
  display: 'block',
  margin: 'auto',
  fontFamily: 'Open Sans'

}))

interface AppContainerProps {
  children: JSX.Element | JSX.Element[]
}

export const AppContainer = ({children}: AppContainerProps) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  );
}

export default AppContainer