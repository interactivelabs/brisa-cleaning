import type { ButtonHTMLAttributes } from 'react';
import classNames from '@lib/styles-utils/classnames';

const ownClassNames = 'base-button';

const BaseButton = ({
  type = 'button',
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type={type}
    className={classNames(
      ownClassNames,
      className,
      (props.disabled && 'disabled:opacity-50') || '',
    )}
    {...props}
  >
    {children}
  </button>
);

export default BaseButton;
