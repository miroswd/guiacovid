import styled from 'styled-components';

///////////// 100% ///////////////
// ===== Container ====== //

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  margin-bottom: 60px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1450px) {
    width: 900px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 1000px) {
    max-width: 405px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 430px) {
    max-width: 300px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

// ======= Card ======= //

export const Card = styled.div`
  width: 405px;
  height: 200px;
  margin: 0 auto;

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

  @media screen and (max-width: 430px) {
    max-width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo-app {
      width: 100px;
      height: 100px;
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

  @media screen and (max-width: 430px) {
    width: 200px;
    margin-top: 20px;
    span {
      font-size: 20px;
    }
    p {
      margin-top: 20px;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
