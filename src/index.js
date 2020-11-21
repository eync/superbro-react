import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


export { default as Grid } from "./components/Grid";
export { default as Span } from "./components/GridSpan";

export { default as Button } from "./components/Button";