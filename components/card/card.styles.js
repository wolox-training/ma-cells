import { css } from "lit";

export default css`
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
    font-size: 16px;
    font-weight: 700;
    margin: 12px 0 8px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .author {
    color: #828282;
    font-size: 14px;
    margin-bottom: 23px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
