import React from 'react';
import styles from './Button.module.css';

const Button = ({ text = 'hover me', ...rest }) =>
	<button className={styles.button} {...rest}>{text}</button>;

export default Button;