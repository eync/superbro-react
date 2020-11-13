import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = ({ text })  => {
  return <button className={styles.test}>Example Component: {text}</button>
}

export { default as Grid } from "./components/Grid";
export { default as Span } from "./components/GridSpan";