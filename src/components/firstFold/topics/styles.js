import styled from 'styled-components';

export const Card = styled.div`
  width: 1600px;
  position: absolute;
  margin: 0 auto;
  left: 160px;
  bottom: 49px;
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

  @media screen and (max-width: 600px) {
    width: 200px;
    position: absolute;
    margin: 0 auto;

    bottom: 10px;
    padding: 20px;

    animation: left-scroll-mobile 2s ease-in;
    animation-fill-mode: forwards;
  }

  /* ANIMATIONS */

  @keyframes left-scroll {
    100% {
      left: 0;
    }
  }

  @keyframes left-scroll-mobile {
    100% {
      left: 25%;
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

  @media screen and (max-width: 600px) {
    .topic {
      width: 70px;
      height: 70px;
      margin: 0 auto;
      /* margin-left: 30px; */
      padding: 5px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background-color: #fff;

      text-align: center;

      box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.1);
    }

    img {
      width: 26px;
      height: 26px;
    }

    span {
      font-size: 8px;
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
