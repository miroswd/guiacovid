import styled from 'styled-components';

///////////// 100% ///////////////
// ===== Container ====== //

export const Container = styled.div`
  width: 1400px;
  margin: 240px auto;
  margin-bottom: 10vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: space-around;
  justify-content: space-between;
  min-height: 100%;

  @media screen and (max-width: 1500px) {
    width: 1000px;
    margin: 240px auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 960px) {
    width: 400px;
    display: grid;
    margin: 240px auto;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    width: 200px;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 100px;
  }
`;

// ======= Card ======= //

export const Card = styled.div`
  width: 405px;
  height: 200px;

  margin-top: 57px;
  padding: 15px;
  margin-right: 93px;

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

  @media screen and (max-width: 500px) {
    width: 220px;
    height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo-app {
      width: 80px;
      height: 80px;
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
  }
`;

// ======== Text =========//

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

  @media screen and (max-width: 500px) {
    width: 100%;

    margin-top: 25px;

    span {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      margin-top: 10px;
    }
  }
`;
