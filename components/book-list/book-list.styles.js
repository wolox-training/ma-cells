import { css } from "lit";

export default css`
.container-book-list {
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2% 10%;
  }

  .card {
    height: 300px;
    width: 198px;
    background-color: white;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
    margin: 18px;
  }

  .card:hover {
    transform: scale(1.1);
  }
`;
