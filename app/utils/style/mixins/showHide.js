import { css } from 'styled-components'

export const showHide = ({ showing }) => {
  let display
  if (!showing) display = 'none'
  else if (showing === true) display = 'block'
  else display = 'show'

  return css`
    display: ${display}
  `
}

export default showHide
