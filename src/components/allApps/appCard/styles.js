import styled from 'styled-components';

export const Card = styled.div`
  width: 405px;

  margin-top: 57px;
  padding: 15px;

  border-radius: 8px;
  background-color: #fff;
  box-shadow: 1px 5px 10px 2px rgba(0, 0, 0, 0.2);

  display: flex;

  img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }
`;

// Text

export const Text = styled.div`
  width: 280px;
  margin-left: 20px;
  span {
    font-size: 22px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    color: #333;
  }
`;
