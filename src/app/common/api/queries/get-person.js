import { gql } from '@apollo/client';

export const GET_PERSON = personId => gql`
    query personId {
        person @rest(type: "Person", path: "people/${personId}/", endpoint: "getPerson") {
            name
        }
    }
`;
