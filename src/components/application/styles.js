import styled from 'styled-components';

export const Container = styled.div`
  width: 1400px;
  height: 100vh;
  margin: 10vh auto;
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

    top: 0;
    right: 0;

    p {
      font-size: 22px;
      margin-bottom: 20px;
      text-decoration: none;
    }
  }
`;
