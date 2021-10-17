import styles from './styles.scss';

const Container = ({ children, className, ...rest }) => (
  <>
    <div className={['container', className].join(' ')} {...rest}>
      { children }
    </div>
    <style jsx>{styles}</style>
  </>
);

export default Container;
