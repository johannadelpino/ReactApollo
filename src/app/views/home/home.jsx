import React, { useEffect } from 'react';
import { Heading1 } from 'app-common/styles/headings-style';
import { SimpleLayout } from 'app-common/styles/layout-style';
import { useAppState } from '../../store/connectors/app-connectors';

import {
  useClientOneQuery,
  useClientRestQuery,
} from 'app-common/api/http-hooks';
import { EXCHANGE_RATES } from 'app-common/api/queries/exchange-rates';
import { GET_PERSON } from 'app-common/api/queries/get-person';
import LoadingMask from 'app-common/components/loading-mask/loading-mask';

const Home = () => {
  /**
   * Effects
   */
  const { data: appData } = useAppState();
  const { loading, error, data } = useClientOneQuery(EXCHANGE_RATES);
  const {
    loading: loadingPerson,
    error: errorPerson,
    data: dataPerson,
  } = useClientRestQuery(GET_PERSON(1));

  useEffect(() => {
    if (!loading && !loadingPerson) {
      console.warn('time to remove the loading mask');
    }
  }, [loading, loadingPerson]);
  /**
   * Rendering Methods
   */
  const onError = () => <p>Error :(</p>;
  const onLoading = () => <p>Loading...</p>;
  const onRender = () => {
    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  };

  const onRenderPerson = () => {
    return <div>I am {dataPerson.data.person.name}!</div>;
  };

  /**
   * Render
   */
  return (
    <SimpleLayout>
      <Heading1>Home Page</Heading1>
      {loading && onLoading()}
      {error && onError()}
      {data && onRender()}
      <hr />
      {loadingPerson && onLoading()}
      {errorPerson && onError()}
      {dataPerson && onRenderPerson()}
      {appData && appData.app.loading && <LoadingMask />}
    </SimpleLayout>
  );
};

Home.propTypes = {};

export default Home;
