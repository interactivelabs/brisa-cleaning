import type { ButtonHTMLAttributes } from 'react';
import classNames from '@lib/styles-utils/classnames';
import BaseButton from './BaseButton';

const ownClassNames =
  'bg-indigo-600 hover:bg-indigo text-white focus:ring-indigo-500 hover:bg-indigo-700';

const PrimaryButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <BaseButton
    {...props}
    className={classNames(ownClassNames, props.className)}
  />
);

export default PrimaryButton;
