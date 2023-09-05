import type { ButtonHTMLAttributes } from 'react';
import classNames from '@lib/styles-utils/classnames';
import BaseButton from './BaseButton';

const primaryClassNames =
  'px-6 py-4 rounded-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white focus:ring-sky-500';

const PrimaryCTAButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <BaseButton
    {...props}
    className={classNames(primaryClassNames, props.className)}
  />
);

export default PrimaryCTAButton;
