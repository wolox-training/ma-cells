import { css } from "lit";

export default css`

  .card {
    height: 300px;
    width: 198px;
    background-color: white;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
    margin: 18px;
    display: flex;
    flex-wrap: wrap;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .image {
    margin: 28px 28px 0;
    height: 200px;
    width: 142px;
  }

  .text {
    margin: 0 28px;
  }

  .img-book {
    height: 200px;
    width: 142px;
  }

  .title-book {
    color: black;
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 2px;
  }

  .author {
    color: #828282;
    font-size: 14px;
    margin-bottom: 23px;
  }
`;
