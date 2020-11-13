import React from 'react'

import { 
  Page,
  ExampleComponent,
  Button,
  Grid,
  Text,
  Table,
  Alert,
  Input,
  DropDown,
  Colors,
  Span
   } from 'superbro-react'
import 'superbro-react/dist/index.css'

const App = () => {
  return (  
  <Grid columns="6" gap="1px">
    <Span span="12"><Button link="" text="test" /></Span> 
    <Span span="2"><ExampleComponent text="Create React Library Example 😄" /></Span>
    <Span span="4"><ExampleComponent text="Create React Library Example 😄" /></Span>
    <Span span="4"><ExampleComponent text="Create React Library Example 😄" /></Span>
    <Span span="6"><ExampleComponent text="Create React Library Example 😄" /></Span>
    <Span span="6"><ExampleComponent text="Create React Library Example 😄" /></Span>
  </Grid>
  )
}

export default App
