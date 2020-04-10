import styled from 'styled-components';

export const Card = styled.div`
  width: 1500px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 70px;
  margin-bottom: 20px;

  @media screen and (max-height: 950px) {
    margin-top: -70px;
  }

  @media screen and (max-width: 1600px) {
    width: 1400px;
  }

  @media screen and (max-width: 1450px) {
    width: 1200px;
  }

  @media screen and (max-width: 1250px) {
    width: 1000px;
  }

  @media screen and (max-width: 1050px) {
    width: 300px;
  }

  @media screen and (max-width: 630px) {
  }
`;

export const Item = styled.div`
  padding: 20px;

  .topic {
    width: 200px;
    height: 200px;
    margin: 0 auto;
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

  @media screen and (max-width: 1600px) {
    .topic {
      width: 180px;
      height: 180px;
      padding: 10px;
    }

    img {
      width: 100px;
    }

    span {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1450px) {
    .topic {
      width: 150px;
      height: 150px;
      padding: 10px;
      box-shadow: 1px 5px 8px 1px rgba(0, 0, 0, 0.1);
      &:hover {
        box-shadow: 1px 5px 8px 2px rgba(0, 0, 0, 0.2);
      }
    }

    img {
      width: 70px;
      height: 70px;
    }

    span {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1250px) {
    .topic {
      width: 130px;
      height: 130px;
      padding: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 50px;
      height: 50px;
    }

    span {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    .topic {
      width: 140px;
      height: 140px;
      padding: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 80px;
      height: 80px;
    }

    span {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 630px) {
  }
`;
