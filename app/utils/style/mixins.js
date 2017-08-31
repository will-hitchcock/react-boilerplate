import { css } from 'styled-components'

export const clearfix = css`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`

export const showHide = ({ showing }) => {
  let display
  if (!showing) display = 'none'
  else if (showing === true) display = 'block'
  else display = 'show'

  return css`
    display: ${display}
  `
}

export const media = label => {
  const sizes = {
    xs: 375,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1680
  }

  return (...args) => {
    return css`
      @media (min-width: ${sizes[label]}px) {
        ${args}
      }
    `
  }
}
