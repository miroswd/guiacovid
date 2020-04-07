import styled from 'styled-components';

export const Card = styled.div`
  width: 405px;
  height: 200px;

  margin-top: 57px;
  padding: 15px;

  border-radius: 8px;
  background-color: #fff;
  box-shadow: 1px 5px 10px 2px rgba(0, 0, 0, 0.1);

  display: flex;

  &:hover {
    box-shadow: 1px 5px 10px 8px rgba(0, 0, 0, 0.2);
  }

  .logo-app {
    width: 120px;
    height: 120px;
    background-color: transparent;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: grid;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

// Text

export const Text = styled.div`
  width: 280px;
  margin-left: 20px;

  span {
    font-size: 22px;
    font-weight: bold;
    color: #777;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    color: #333;
    max-height: 100px;
    overflow: hidden;
  }
`;

export const Container = styled.div`
  width: 1400px;
  height: 100vh;
  margin: 10vh auto;
  position: relative;

  .icon {
  }

  .app-info {
    position: relative;

    .logo-app {
      width: 300px;
      height: 300px;
      background-color: #fff;

      display: grid;
      align-items: center;
      justify-content: center;

      padding: 5px;

      border: 2px solid rgba(0, 0, 0, 0.2);
      border-radius: 8px;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .group-right {
    position: absolute;
    bottom: 0;
    left: 360px;
  }

  h1 {
    width: 800px;
    font-size: 45px;

    position: absolute;
    bottom: 80px;
  }

  .line {
    width: calc(1400px - 300px);

    position: absolute;

    right: 0;
    bottom: 70px;
    border-bottom: 2px solid #000;
  }

  .bolinhas {
    display: flex;
    flex-direction: row;

    img {
      width: 50px;
      height: auto;
      margin-right: 20px;
    }
  }

  /* Content */

  .content {
    width: 1000px;
    margin-top: 50px;

    position: relative;
  }

  .tags {
    width: 300px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    border-radius: 10px;

    img {
      width: 80px;
      height: 80px;
      background-color: #fff;
      padding: 10px;
      border: 2px solid rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }
  }

  .para {
    width: calc(1400px - 360px);
    height: auto;

    position: absolute;

    top: 292px;
    right: 0;


    display:grid;
    grid-template-columns:1fr 1fr;

    }
  }

  /* === RESPONSIVE === */
  /* 1500 */
  @media screen and (max-width: 1500px) {
    width: 1200px;
    height: 100vh;
    margin: 10vh auto;
    margin-left: 42px;

    h1 {
      width: 550px;
      font-size: 40px;

      position: absolute;
      bottom: 80px;
    }

    .line {
      width: 1000px;

      position: absolute;

      left: 300px;
      bottom: 70px;
      border-bottom: 2px solid #000;
    }

    /* Content */
    .para {
      width: 920px;
      height: auto;

      position: absolute;

      top: 0;
      left: 360px;

      p {
        margin-bottom: 20px;
        text-decoration: none;
      }
    }
  }

  /* 1400 */

  @media screen and (max-width: 1400px) {
    width: 800px;
    height: 100vh;
    margin: 10vh auto;
    margin-left: 42px;

    h1 {
      width: 550px;
      font-size: 40px;

      position: absolute;
      bottom: 80px;
    }

    .line {
      width: 600px;
    }

    /* Content */
    .para {
      width: 600px;
      height: auto;

      position: absolute;

      top: 0;
      left: 360px;

      p {
        margin-bottom: 20px;
        text-decoration: none;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    width: 600px;
    height: 100vh;
    margin: 10vh auto;
    margin-left: 42px;
  }
`;
