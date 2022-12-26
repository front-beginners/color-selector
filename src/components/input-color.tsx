import styled from 'styled-components'

const Input = styled.input`
  padding: 1rem;
  margin-top: 1rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  width: 100%;
  font-size: 28px;
  color: #000;
  background-color: #fff;
  box-shadow: 2px 2px 5px #000;
`

interface InputColorProps {
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
}

export default function InputColor({ color, setColor }: InputColorProps) {
  return (
    <Input
      placeholder='Add color name'
      required
      value={color}
      onChange={(e) => {
        setColor(e.target.value)
      }}
    />
  )
}
