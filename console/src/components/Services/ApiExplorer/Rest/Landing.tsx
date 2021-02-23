import React from 'react';
import { Link } from 'react-router';

import TopicDescription from '../../Common/Landing/TopicDescription';
import LandingImage from './LandingImage';

import styles from './RESTStyles.scss';

const Landing = () => (
  <div
    className={`container-fluid ${styles.rest_add_padding_left} ${styles.padd_top}`}
  >
    <div className={`${styles.display_flex} ${styles.marginBottom}`}>
      <h2
        className={`${styles.headerText} ${styles.display_inline} ${styles.margin_bottom}`}
      >
        REST Endpoints
      </h2>
    </div>
    <div className={`${styles.subHeader} ${styles.padd_top}`}>
      Create endpoints from GraphQL queries using{' '}
      <Link to="/api/api-explorer">GraphiQL</Link>.
    </div>
    <hr />
    <TopicDescription
      title="What are REST endpoints?"
      imgElement={<LandingImage />}
      imgAlt="REST endpoints"
      description="REST endpoints allow for the creation of a REST interface to your saved GraphQL queries and mutations. Endpoints are generated from /api/rest/* and inherit the authorization and permission structure from your associated GraphQL nodes."
      knowMoreHref="https://hasura.io/docs/1.0/graphql/core/api-reference/schema-metadata-api/restified-endpoints.html"
    />
    <hr className={styles.clear_fix} />
  </div>
);

export default Landing;
