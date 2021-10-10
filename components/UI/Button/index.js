import styles from './styles.scss';

const Button = ({
  caption, submit, onClick, children, ...rest
}) => (
  <>
    <button
      title={caption}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className="button"
      {...rest}
    >
      {children || caption}
    </button>
    <style jsx>{styles}</style>
  </>
);
export default Button;
