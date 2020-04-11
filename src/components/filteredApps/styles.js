import styled from 'styled-components';

export const Container = styled.div`
  width: 1400px;
  height: auto;
  margin: 120px auto;

  position: relative;

  h1 {
    position: absolute;

    font-size: 45px;
    top: 170px;
    left: 360px;
  }

  .line {
    position: absolute;
    top: 235px;
    left: 300px;

    width: calc(100% - 300px);
    height: 4px;
    background-color: #000;
  }

  .cards {
    width: calc(100% - 360px);

    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (min-width: 1450px) {
      margin-top: -312px;
      margin-left: 300px;
    }

    @media screen and (max-width: 1450px) {
      margin-top: -312px;
      margin-left: 360px;
    }

    @media screen and (max-width: 900px) {
      margin-top: 60px;
      margin-left: 0;
    }

    @media screen and (max-width: 430px) {
      max-width: 300px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media screen and (max-width: 1450px) {
    width: 800px;

    h1 {
      position: absolute;
      width: calc(100%- 360px);

      font-size: 40px;
      top: 170px;
      left: 378px;
    }

    .line {
      position: absolute;
      top: 235px;
      left: 300px;

      width: calc(100% - 300px);
      height: 4px;
      background-color: #000;
    }

    .cards {
      display: grid;
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 900px) {
    width: 300px;

    h1 {
      position: absolute;
      width: 300px;

      font-size: 32px;
      text-align: center;
      top: 340px;
      left: 0;
    }

    .line {
      width: 0;
    }
  }
`;

export const Logo = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;

export const Tags = styled.div`
  width: 300px;
  height: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 40px;

  img {
    width: 80px;
    height: 80px;

    padding: 10px;
    border-radius: 8px;
    border: 2px solid rgba(0, 0, 0, 0.2);

    background-color: #fff;
  }

  @media screen and (max-width: 900px) {
    width: 300px;
    margin-top: 130px;
    margin-bottom: 40px;
  }
`;

export const Text = styled.div`
  width: 280px;
  margin-left: 20px;

  span {
    font-size: 22px;
    font-weight: bold;
    color: #777;
  }

  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 22px;
    color: #333;
    max-height: 100px;
    overflow: hidden;
  }
`;

export const Card = styled.div`
  width: 405px;
  height: 200px;
  margin: 0 auto;

  margin-bottom: 57px;
  padding: 15px;

  border-radius: 8px;
  background-color: #fff;
  box-shadow: 1px 5px 6px 2px rgba(0, 0, 0, 0.1);

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
      padding: 5px;
      border-radius: 6px;
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 900px) {
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
