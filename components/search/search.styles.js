import { css } from "lit";

export default css`
  .container-search {
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(232, 232, 232);
    padding: 0 2%;
    align-items: center;
    height: 50px;
    width: 646px;
    margin: 0 auto;
  }

  .search {
    border: none;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-size: 20px;
    color: rgb(130, 130, 130);
  }

  .search-buttom {
    height: 24px;
    width: 24px;
  }
`;
