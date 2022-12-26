import styled from 'styled-components'
import colornames from 'colornames'

const Box = styled.div<{ color: string; isDarkTheme: boolean }>`
  width: 400px;
  height: 400px;
  background-color: ${(p) => p.color};
  border: 2px solid black;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 5px #000;
  display: grid;
  gap: 1rem;
  place-content: center;
  font-size: 28px;
  color: ${(p) => (p.isDarkTheme ? '#fff' : '#000')};
`

interface BoxColorProps {
  color: string
  isDarkTheme: boolean
}

export default function BoxColor({ color, isDarkTheme }: BoxColorProps) {
  return (
    <Box color={color.toLowerCase()} isDarkTheme={isDarkTheme}>
      <div>{color}</div>
      <div>{colornames(color)}</div>
    </Box>
  )
}
