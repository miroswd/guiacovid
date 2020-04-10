import styled from 'styled-components';

///////// 100% /////////
///// Container ////
export const Container = styled.div`
  width: 100%;
  padding: 20px 0;

  background-color: #1563a230;
  .back {
    width: 1400px;
    height: 550px;
    margin: 0 auto;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
  }
  /* Image */
  img {
    width: 850px;
    height: 520px;
  }

  @media screen and (max-width: 1500px) {
    .back {
      width: 1200px;
    }
  }

  @media screen and (max-width: 1300px) {
    position: relative;
    .back {
      width: 800px;
    }

    img {
      position: absolute;
      right: 0;
      animation: zero-four 3s;
      animation-fill-mode: forwards;
      @keyframes zero-four {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0.4;
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    position: relative;
    .back {
      width: 800px;
    }

    img {
      position: absolute;
      right: 0;
      animation: zero-four 3s;
      animation-fill-mode: forwards;
      @keyframes zero-four {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0.4;
        }
      }
    }
  }

  @media screen and (max-width: 815px) {
    .back {
      padding: 0;
      width: 600px;
    }

    img {
      width: 0;
      height: 0;
      opacity: 0;
      visibility: hidden;
    }
  }

  @media screen and (max-width: 630px) {
    .back {
      padding: 0;
      width: 300px;
    }

    img {
      width: 0;
      height: 0;
      opacity: 0;
      visibility: hidden;
    }
  }
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

  @media screen and (max-width: 600px) {
    width: 320px;
    h1 {
      font-size: 36px;
      line-height: 42px;
    }
    p {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;
