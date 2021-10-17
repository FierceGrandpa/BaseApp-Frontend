import styles from './styles.scss';

const Flexbox = ({
  className,
  children,
  justify,
  align,
  direction,
  wrap,
}) => (
  <>
    <div className={[
      'flexbox',
      justify ? `justify-${justify}` : '',
      align ? `align-${align}` : '',
      direction ? `direction-${direction}` : '',
      wrap || '',
      className,
    ].join(' ')}
    >
      {children}
    </div>
    <style jsx>{styles}</style>
  </>
);

export default Flexbox;
