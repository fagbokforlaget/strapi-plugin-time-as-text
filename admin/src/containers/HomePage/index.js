/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>This plugin will allow you to enter time in hh:mm:ss format, rather than default strapi dropdown of hh:mm format.</p>
    </div>
  );
};

export default memo(HomePage);
