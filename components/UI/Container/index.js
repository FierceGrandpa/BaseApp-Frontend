import styles from './styles.scss';

const Container = ({ children, ...rest }) => (
  <>
    <div className="container" {...rest}>
      { children }
    </div>
    <style jsx>{styles}</style>
  </>
);

export default Container;
