/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import ComponentIndexListItem from './ComponentIndexListItem';

function ComponentIndexList({ items }) {
  return (
    <section aria-label="Component index">
      {items.map(
        ({ name, description, maintainer, framework, designAsset, image }) => {
          const key = `${name}:${maintainer}`;
          return (
            <ComponentIndexListItem
              key={key}
              description={description}
              designAsset={designAsset}
              framework={framework}
              image={image}
              maintainer={maintainer}
              name={name}
            />
          );
        }
      )}
    </section>
  );
}

ComponentIndexList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      maintainer: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
};

export default ComponentIndexList;
