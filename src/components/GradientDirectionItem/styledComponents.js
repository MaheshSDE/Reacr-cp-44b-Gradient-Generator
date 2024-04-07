// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  padding-right: 20px;
  font-family: 'Roboto';
  font-size: 15px;
`
export const GradientDirectionItemButton = styled.button`
  background-color: ${props => (props.isActive ? '#ffffff' : '#ededed')};
  border: none;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  color: #334155;
  opacity: ${props => (props.isActive ? '1' : '0.5')};
`
