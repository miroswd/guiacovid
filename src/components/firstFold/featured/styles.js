import styled from 'styled-components';

export const Container = styled.div`
  width: 1400px;
  height: 550px;
  margin: 60px auto;

  padding: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.1);

  /* Image */
  img {
    width: 800px;
    height: 500px;

    border-radius: 12px;
  }
`;

// Text
export const Text = styled.div`
  width: 750px;
  margin-right: 50px;

  /* Title */
  h1 {
    font-size: 42px;
  }

  /* Description */
  p {
    font-size: 24px;
  }
`;
