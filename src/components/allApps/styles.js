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
`;
