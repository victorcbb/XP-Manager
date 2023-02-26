import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme['orange-50']};
    color: ${({ theme }) => theme['gray-800']};
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;    
  }

  form {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: ${({ theme }) => theme['gray-800']};
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 500;    
  }

  a {
    text-decoration: none;
  }

  input[type=text], input[type=button] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
`
