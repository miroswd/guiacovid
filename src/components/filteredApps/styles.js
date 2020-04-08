import styled from 'styled-components';

export const Container = styled.div`
  width: 1400px;
  margin: 10vh auto;

  position: relative;

  .app-info {
    display: flex;
    flex-direction: row;
    position: relative;

    .logo-app {
      width: 300px;
      height: 300px;
      background-color: #fff;

      display: grid;
      align-items: center;
      justify-content: center;

      padding: 20px;

      z-index: 1;

      border: 2px solid rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }

    h1 {
      margin-top: 180px;
      margin-left: 60px;

      font-size: 45px;
    }

    .line {
      width: calc(100% - 300px);
      height: 3px;
      background-color: #000;
      position: absolute;
      left: 300px;
      bottom: 50px;
    }
  }

  .tags {
    width: 300px;
    margin-top: 50px;

    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
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

  .cards {
    margin-left: 200px;
    width: calc(100% - 360px);
    height: 600px;

    position: absolute;
    left: 160px;

    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;

    .logo-app {
      width: 100px;
      height: 100px;

      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;

      border: 2px solid rgba(0, 0, 0, 0.2);

      img {
        width: 100%;
        height: auto;
        border: none;
      }
    }
  }
`;

export const Card = styled.div`
  width: 500px;
  height: 194px;
  margin-top: 0;
  padding: 15px;

  border-radius: 8px;
  background-color: #fff;
  box-shadow: 1px 5px 10px 2px rgba(0, 0, 0, 0.1);

  display: flex;

  &:hover {
    box-shadow: 1px 5px 10px 8px rgba(0, 0, 0, 0.2);
  }
`;

// Text

export const Text = styled.div`
  width: 280px;
  margin-left: 20px;

  span {
    font-size: 24px;
    font-weight: bold;
    color: #777;
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 26px;
    color: #333;
    max-height: 100px;
    overflow: hidden;
  }
`;
