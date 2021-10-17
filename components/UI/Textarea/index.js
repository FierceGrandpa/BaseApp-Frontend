import {
  useCallback, useState, useEffect, useRef,
} from 'react';

import styles from './styles.scss';

const Textarea = ({
  className,
  register,
  error,
  name,
  fieldClassName,
  lineHeight = '24px',
  minRows = 2,
  maxRows = 10,
  theme,
  label,
  placeholder,
  children,
}) => {
  const [rowsState, setRowsState] = useState(minRows);
  const [isLabelActive, setIsLabelActive] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current.value.length <= 0) { return; }

    setIsLabelActive(true);
  }, []);

  const handleFocus = useCallback(() => {
    if (theme !== 'animatedTitle') { return; }
    setIsLabelActive(true);
  }, [theme]);

  const handleBlur = useCallback(
    (event) => {
      if (theme !== 'animatedTitle') { return; }

      if (event.target.value.length !== 0) { return; }

      setIsLabelActive(false);
    },
    [theme],
  );

  const handleChange = useCallback(
    (event) => {
      const prev = event.target.rows;

      event.target.rows = minRows;

      const currentRows = Math.floor(
        event.target.scrollHeight / parseInt(lineHeight, 10),
      );

      if (currentRows === prev) {
        event.target.rows = currentRows;
      }

      if (currentRows >= maxRows) {
        event.target.rows = maxRows;
        event.target.scrollTop = event.target.scrollHeight;
      }

      setRowsState(currentRows < maxRows ? currentRows : maxRows);
    },
    [rowsState, minRows, maxRows, lineHeight],
  );

  const onChangeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.rows = minRows;

      const currentRows = Math.floor(
        textareaRef.current.scrollHeight / parseInt(lineHeight, 10),
      );

      if (currentRows === 0) {
        textareaRef.current.rows = currentRows;
      }

      if (currentRows >= maxRows) {
        textareaRef.current.rows = maxRows;
        textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
      }

      setRowsState(currentRows < maxRows ? currentRows : maxRows);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      onChangeHeight();
    });
  }, []);

  return (
    <>
      <div className={['textarea', theme || '', className].join(' ')}>
        <textarea
          className={`textarea__field${error ? ' is-error' : ''} ${fieldClassName || ''}`}
          ref={(ref) => {
            textareaRef.current = ref;
            if (register) {
              register(ref);
            }
          }}
          name={name}
          onChange={handleChange}
          style={{ lineHeight }}
          rows={rowsState}
          id={`${name}textarea`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={theme === 'animatedTitle' ? undefined : placeholder}
        />

        {label && (
          <label
            htmlFor={`${name}textarea`}
            className={`textarea__label${isLabelActive ? ' active' : ''}`}
          >
            {label}
          </label>
        )}

        {children}

        {error && <div className="textarea__error">{error.message}</div>}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default Textarea;
