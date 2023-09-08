import type { ButtonHTMLAttributes } from 'react';
import classNames from '@lib/styles-utils/classnames';
import BaseButton from './BaseButton';

const ownClassNames = 'gradient-button px-6 py-4 rounded-full text-white';

const PrimaryGradientButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) => (
  <BaseButton
    {...props}
    className={classNames(ownClassNames, props.className)}
  />
);

export default PrimaryGradientButton;
