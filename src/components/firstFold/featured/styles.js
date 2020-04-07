import styled from 'styled-components';

export const Container = styled.div`
  width: 1400px;
  height: 550px;
  margin: 60px auto;

  padding: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1563a230;
  border-radius: 4px;

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
    line-height: 42px;
  }

  /* Description */
  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 24px;
  }
`;
