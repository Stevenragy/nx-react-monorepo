import styles from './title.module.css';

/* eslint-disable-next-line */
export interface TitleProps {
  text: string;
}

export function Title(props: TitleProps) {
  const { text } = props;
  return (
    <div className={styles['container']}>
      <h1 className={styles['text']}>{text}</h1>
    </div>
  );
}

export default Title;
