import styled from 'styled-components'

interface ButtonDarkThemeProps {
  darkTheme: boolean
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonStyled = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
  color: #000;
  border: 2px solid black;
  background-color: #fff;
  box-shadow: 2px 2px 5px #000;
  border-radius: 0.5rem;
  font-size: 28px;
`

export default function ButtonDarkTheme({
  darkTheme,
  setDarkTheme,
}: ButtonDarkThemeProps) {
  return (
    <div>
      <ButtonStyled onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? 'desativar dark theme' : 'ativar dark theme'}
      </ButtonStyled>
    </div>
  )
}
