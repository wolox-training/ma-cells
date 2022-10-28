import { css } from "lit";

export default css`
  .container-card {
    display: flex;
    margin: 20px auto;
    width: 900px;
    height: 416px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 50%) 4px 4px 10px 0px;
    padding: 0 20px;
  }

  @media (max-width: 1024px) {
    .container-card {
      flex-wrap: wrap;
      width: 336px;
      height: 570px;
      padding: 0px;
      margin: 0;
      padding: 20px 0px;
      justify-content: center;
      align-items: center;
    }
  }

  .imgAndDescrition {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: auto;
  }

  .name-author {
    font-size: 14px;
  }

  .genre {
    color: #828282;
    font-size: 24px;
    font-weight: 700;
    justify-self: center;
    margin-left: 2%;
  }

  @media (max-width: 1024px) {
    .genre {
      font-size: 16px;
      font-weight: bold;

      color: #828282;
    }
  }

  .border {
    height: 4px;
    width: 100%;
    background-color: rgb(190, 210, 60);
  }

  .imgAndDescrition {
    display: flex;
    width: 100%;
  }

  .container-image {
    position: relative;
    width: 35%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .container-image {
      justify-self: center;
      width: auto;
    }
  }

  .title {
    font-size: 32px;
    font-weight: bold;
    display: grid;
    justify-self: center;
  }

  @media (max-width: 1024px) {
    .title {
      font-size: 24px;
    }
  }

  .badge {
    position: absolute;
    left: 200px;
    bottom: 300px;
    animation-duration: 1s;
    animation-name: slidein;
  }

  @media (max-width: 1024px) {
    .badge {
      width: 30%;
      left: 165px;
      bottom: 240px;
    }
  }

  @keyframes slidein {
    from {
      margin-left: 50%;
      width: 50%;
    }

    to {
      margin-left: 0%;
      width: 50%;
    }
  }

  .img-book {
    width: 261px;
    height: 368px;
  }

  @media (max-width: 1024px) {
    .img-book {
      width: 212px;
      height: 298px;
    }
  }

  .container-detail {
    width: 65%;
  }

  @media (max-width: 1024px) {
    .container-detail {
      width: 90%;
    }
  }

  .title-book {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .subtitle {
    font-weight: bold;
    font-size: 20px;
    margin: 3% 0;
  }

  @media (max-width: 1024px) {
    .subtitle {
      font-size: 14px;
    }
  }

  .text {
    margin-left: 8px;
    font-size: 20px;
    color: #828282;
  }

  @media (max-width: 1024px) {
    .text {
      font-size: 14px;
    }
  }

  .title-card {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .name-author {
    display: flex;
    margin-top: 15px;
    align-items: center;
  }

  .author {
    font-weight: bold;
    font-size: 20px;
  }

  .editorial-container {
    display: flex;
    align-items: center;
  }

  .year {
    display: flex;
    align-items: center;
  }
`;
