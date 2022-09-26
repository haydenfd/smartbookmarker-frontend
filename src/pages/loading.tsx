import styled from '@emotion/styled';

const LoaderContainer = styled.div(props => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    backgroundColor: '#1e90ff',
}))
  

export const Loading = () => {
  return (
    <LoaderContainer>
      <h1>Loading...</h1>
    </LoaderContainer>
  );
}