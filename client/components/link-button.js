import React from 'react';
import cx from 'classnames';

const LinkButton = props => {
  return (
    <button
      {...props}
      className={cx('LinkButton', props.className)}
    />
  );
}

export default LinkButton;
