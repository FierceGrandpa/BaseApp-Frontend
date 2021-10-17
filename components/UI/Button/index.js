import { forwardRef, memo } from 'react';

import styles from './Button.module.scss';

const Button = forwardRef(
  (
    {
      style,
      className,
      onClick,
      onMouseDown,
      onTouchStart,
      submit,
      theme,
      children,
      disabled,
      align,
      justify,
      name,
    },
    ref,
  ) => (
    <button
      disabled={disabled}
      type={submit ? 'submit' : 'button'}
      onClick={(e) => onClick && onClick(e)}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      className={[
        'button',
        theme || '',
        justify ? `justify-${justify}` : '',
        align ? `align-${align}` : '',
        className || '',
      ].join(' ')}
      style={style}
      ref={ref}
      name={name}
    >
      {children}
    </button>
  ),
);

const memoizedButton = memo(Button);
memoizedButton.displayName = 'Button';

export default memoizedButton;
