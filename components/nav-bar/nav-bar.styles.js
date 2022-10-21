import { css } from "lit";

export default css`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: $white;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 50%);
    padding: 0 270px;
    border-top: 6px solid $blue;
    position: static;
    margin-bottom: 3%;
  }
  
  .logout {
    font-size: 18px;
  }
`;
