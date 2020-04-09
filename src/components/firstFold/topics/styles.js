import styled from 'styled-components';

export const Card = styled.div`
  width: 1600px;
  position: absolute;
  margin: 0 auto;
  left: 160px;
  bottom: 50px;
  padding: 20px;

  @media screen and (max-width: 1600px) {
    width: 1400px;
    position: absolute;
    margin: 0 auto;

    bottom: 70px;
    padding: 20px;

    animation: left-scroll 2s ease-in;
    animation-fill-mode: forwards;
  }

  /* ANIMATIONS */

  @keyframes left-scroll {
    100% {
      left: 0;
    }
  }
`;

export const Item = styled.div`
  padding: 10px;

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
      margin: 0 auto;
      /* margin-left: 30px; */
      padding: 10px;

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
      width: 80px;
      height: 80px;
      margin-top: 5px;
      margin-bottom: 10px;
    }

    span {
      font-size: 15px;
      font-weight: bold;
    }

    a {
      text-decoration: none;
      color: #333;

      &:hover {
        color: #6ad800;
      }
    }
  }
`;
