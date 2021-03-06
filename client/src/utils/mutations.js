import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

// export const ADD_ORDER = gql`
//     mutation addOrder($books: [ID]!) {
//         addOrder(books: $books) {
//             purchaseDate
//             books {
//                 _id
//                 name
//                 description
//                 price
//                 quantity
//                 filter {
//                     name
//                 }
//             }
//         }
//     }
// `;

export const ADD_USER = gql`
    mutation addUser(
        $companyName: String!
        $email: String!
        $password: String!
    ){
        addUser(
            companyName: $firstName
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;
