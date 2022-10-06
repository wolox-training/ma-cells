import { css } from 'lit-element';

export default css`
.container-book-list {

    background-color: $light-gray;

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
        margin-bottom: 18px;

        .logout {
            font-size: 18px;
        }
    }

    .container-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto 140px;

        .card {
            height: 300px;
            width: 198px;
            background-color: $white;
            box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
            margin: 18px;
            padding: 28px 28px 72px 28px;
            display: flex;
            flex-wrap: wrap;

            .img-book {
                height: 200px;
                width: 142px;
            }

            .title-book {
                color: $black;
                font-size: 16px;
                font-weight: 700;
                margin: 12px 0 8px 0;
            }

            .author {
                color: $gray;
                font-size: 14px;
                margin-bottom: 23px;
            }
        }

        .card:hover {
            transform: scale(1.1);
        }
    }
}
`