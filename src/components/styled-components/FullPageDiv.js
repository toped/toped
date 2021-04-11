import styled from 'styled-components'

export const FullPageDiv = styled.div`
  height: 100vh;
  box-sizing: border-box;
  background-color: ${({theme}) => theme.background};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

export default FullPageDiv