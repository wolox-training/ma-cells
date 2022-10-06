import { css } from "lit";

export default css`
  .container-book-list {
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2% 10%;
  }

  .container-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto 140px;
  }
  .card {
    height: 300px;
    width: 198px;
    background-color: white;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
    margin: 18px;
  }

  .image {
    margin: 28px 28px 0;
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
    font-size: 13px;
    font-weight: 700;
    margin: 12px 0 8px 0;
  }

  .author {
    color: #828282;
    font-size: 11px;
    margin-bottom: 23px;
  }

  .card:hover {
    transform: scale(1.1);
  }
`;
