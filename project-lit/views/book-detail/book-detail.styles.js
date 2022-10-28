import { css } from "lit";

export default css`
  .container-arrow-back {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-top: 50px;
    margin-right: 61%;
    margin-bottom: 5%;
  }

  .back {
    font-size: 20px;
    margin-left: 20px;
    color: $black;
    font-size: 20px;
    line-height: 24px;
  }
  .container-back-arrow::before {
    content: url("../assets/back-arrow.png");
  }

  .container-view {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 20px 0 0;
  }

  @media (max-width: 1024px) {
    .container-view {
      flex-direction: column-reverse;
    }

    .container-arrow-back {
      margin: 0;
    }
  }
`;
