import { memo } from 'react';

import styles from './styles.scss';

const Text = ({
  className,
  children,
  size,
  as: Tag = 'span',
  fontWeight,
  uppercase,
  underline,
  lineThrough,
  italic,
  inline,
  center,
  right,
  left,
  color,
  singleLine,
  hoverTransition,
  htmlFor,
  style,
}) => {
  const classNames = [
    'text',
    `${Tag ? `${Tag}-type` : ''}`,
    `${size || ''}`,
    `${uppercase ? 'uppercase' : ''}`,
    `${inline ? 'inline' : ''}`,
    `${underline ? 'underline' : ''}`,
    `${lineThrough ? 'line-through' : ''}`,
    `${italic ? 'italic' : ''}`,
    `${center ? 'center' : ''}`,
    `${right ? 'right' : ''}`,
    `${left ? 'left' : ''}`,
    `${fontWeight || ''}`,
    `${color || ''}`,
    `${singleLine ? 'single-line' : ''}`,
    `${hoverTransition ? 'hover-transition' : ''}`,
    className,
  ].join(' ');

  return (
    <>
      <Tag style={style} htmlFor={htmlFor} className={classNames}>
        {children}
      </Tag>
      <style jsx>{styles}</style>
    </>
  );
};

const memoizedText = memo(Text);

memoizedText.displayName = 'Text';

export default memoizedText;
