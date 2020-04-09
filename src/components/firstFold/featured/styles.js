import styled from 'styled-components';

///////// 100% /////////
///// Container ////
export const Container = styled.div`
  width: 100%;
  padding-top: 40px;

  background-color: #1563a230;
  .back {
    width: 1400px;
    height: 550px;
    margin: 60px auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    position: relative;
  }
  /* Image */
  img {
    position: absolute;
    z-index: 0;
    left: 655px;
    bottom: 60px;

    width: 850px;
    height: 520px;
  }

  @media screen and (max-width: 1500px) {
    .back {
      width: 1400px;
      height: 550px;
      margin: 60px auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 4px;
      margin-left: 40px;
      position: relative;
    }

    img {
      position: absolute;
    }
  }

  @media screen and (max-width: 1420px) {
    .back {
      width: 1000px;
      height: 550px;
      margin: 60px auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 4px;
      margin-left: 40px;
      position: relative;
    }

    img {
      position: absolute;
      animation: left-position 2s ease-in-out;
      animation-fill-mode: both;
    }
  }

  @media screen and (max-width: 1260px) {
    .back {
      width: 800px;
      height: 550px;
      margin: 60px auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 4px;
      margin-left: 40px;
      position: relative;
    }

    img {
      position: absolute;
      left: 40vw;
      animation: center-position 2s ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  @media screen and (max-width: 860px) {
    .back {
      width: auto;
      height: 550px;
      margin: 60px auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 4px;
      margin-left: 40px;
      position: relative;
    }

    img {
      position: absolute;
      left: 10vw;
      animation: last-frame 1s ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  @media screen and (max-width: 280px) {
    .back {
      width: 200px;
      height: 550px;
      margin: 60px auto;
      margin-left: 40px;
      animation: remove-margin 1s ease-in;
      animation-fill-mode: forwards;
    }
  }

  /* ANIMATION CONFIGURATION */
  @keyframes hide-animation {
    0% {
      opacity: 100%;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes left-position {
    100% {
      opacity: 0.4;
      left: 40vw;
    }
  }

  @keyframes center-position {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 0.2;
      left: 10vw;
    }
  }
  @keyframes last-frame {
    0% {
      opacity: 0.2;
    }

    100% {
      opacity: 0;
      left: 2vw;
      width: 0px;
    }
  }

  @keyframes remove-margin {
    100% {
      margin-top: 0;
    }
  }

  /* END ANIMATION */
`;

///// Text /////
export const Text = styled.div`
  width: 750px;
  margin-right: 50px;
  z-index: 1;

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
  @media screen and (max-width: 1500px) {
    width: 750px;

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
  }

  @media screen and (max-width: 500px) {
    width: 220px;
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 280px) {
    width: 80px;

    h1 {
      animation: h1-min 2s;
      animation-fill-mode: forwards;
    }

    p {
      animation: text-animation 2s;
      animation-fill-mode: forwards;
    }
  }

  @keyframes h1-min {
    100% {
      font-size: 15px;
      line-height: 30px;
    }
  }

  @keyframes text-animation {
    100% {
      font-size: 10px;
      line-height: 20px;
    }
  }
`;
