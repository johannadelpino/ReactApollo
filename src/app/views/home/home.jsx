import React from 'react';
import { Heading1 } from 'app-common/styles/headings-style';
import { SimpleLayout } from 'app-common/styles/layout-style';

const Home = () => {
  return (
    <SimpleLayout>
      <Heading1>React SPA</Heading1>
      <p>
        This is a seed project. Start building your app and making changes!.
      </p>
    </SimpleLayout>
  );
};

Home.propTypes = {};

export default Home;
