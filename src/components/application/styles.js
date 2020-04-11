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

  @media screen and (min-width: 1400px) {
    p {
      width: calc(100% - 360px);
      position: absolute;

      top: 340px;
      left: 360px;

      font-size: 24px;
    }
  }

  @media screen and (max-width: 1450px) {
    width: 800px;

    h1 {
      position: absolute;
      width: calc(100%- 360px);

      font-size: 40px;

      top: 120px;
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

    @media screen and (min-width: 901px) {
      p {
        width: calc(100% - 360px);
        position: absolute;
        text-align: justify;
        top: 340px;
        left: 360px;

        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    width: 300px;

    h1 {
      position: absolute;
      width: 300px;

      font-size: 28px;
      text-align: center;
      top: 320px;
      left: 0;
    }

    .line {
      width: 0;
    }

    p {
      width: 280px;

      /* margin-bottom: 20px; */
      margin-left: 10px;
      font-size: 18px;
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

export const Social = styled.div`
  position: absolute;

  width: 600px;
  height: 50px;

  top: 250px;
  left: 360px;

  img {
    width: 50px;
    margin-right: 20px;
  }

  @media screen and (max-width: 900px) {
    width: 300px;
    top: -80px;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 35px;
      margin-right: 15px;
    }
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
