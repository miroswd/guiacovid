import styled from 'styled-components';

export const Card = styled.div`
  width: 1400px;
  display: flex;

  justify-content: space-between;
  margin: -170px auto;

  /* background-color: #0ff; */
  .topic {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    /* margin-left: 30px; */
    padding: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 16px;
    background-color: #fff;

    text-align: center;

    box-shadow: 1px 5px 8px 2px rgba(0, 0, 0, 0.1);
    &:hover {
      box-shadow: 1px 5px 8px 4px rgba(0, 0, 0, 0.2);
    }
  }

  img {
    width: 100px;
    height: 100px;
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: #6ad800;
    }
  }
`;
