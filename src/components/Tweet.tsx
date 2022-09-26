import styled from "@emotion/styled";
import React from 'react';
import { Tweet } from "../types/Tweet";

const Container = styled.div(props => ({
  borderColor: '#eee #ddd #bbb',
  borderRadius: '5px',
  borderStyle: 'solid',
  borderWidth: '1px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
  margin: '10px 5px',
  padding: '0 16px 16px 16px',
  display: 'flex',
  marginBottom: '20px'

}))

const Image = styled.img(props => ({
  borderRadius: '100%',
  width: '60px',
  height: '60px'
}))

const TweetContainer = styled.div(props => ({
  paddingLeft: '20px'
}))

interface TweetProps {
  tweet: Tweet
}

const UserHeader = (props: { username: string, name: string }) => {
  const Container = styled.div(props => ({
    display: 'flex'
  }))

  return <Container>
    <h5>{props.name}</h5>
    <h6>{`@${props.username}`}</h6>
  </Container>
}

export const TweetBox = ({tweet}: TweetProps) => {
  return (
    <Container>
      <Image src={tweet.profile_image_url} alt={tweet.username} />
      <TweetContainer>
        <UserHeader username={tweet.username} name={tweet.name} />
        <p>{tweet.text}</p>
      </TweetContainer>
    </Container>
  );
}

export default TweetBox