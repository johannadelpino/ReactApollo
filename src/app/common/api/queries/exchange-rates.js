import { gql } from '@apollo/client';

export const EXCHANGE_RATES = gql`
  query ExchangeRates($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;
