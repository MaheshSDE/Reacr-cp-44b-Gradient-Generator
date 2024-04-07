// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.colorGradient});
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #ffffff;
  font-weight: bold;
`

export const TextContent = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  font-weight: 400;
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding-top: 10px;
  padding-bottom: 10px;
`

/* export const CustomLabel = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  padding-bottom: 5px;
` */

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`

export const CustomInput = styled.input`
  width: 60px;
  border-width: 0px;
  height: 30px;
  outline: none;
  cursor: pointer;
  border-color: none;
`
export const GenerateButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: #1e293b;
  background-color: #00c9b7;
  border: none;
  border-radius: 5px;
  height: 30px;
  outline: none;
  cursor: pointer;
`
