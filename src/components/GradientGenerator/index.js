import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  Heading,
  ListContainer,
  TextContent,
  CustomInput,
  InputContainer,
  InputLabelContainer,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirectionValue: gradientDirectionsList[0].value,
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    colorGradient: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeFirstHexColor = event => {
    this.setState({firstColorInput: event.target.value})
  }

  onChangeSecondHexColor = event => {
    this.setState({secondColorInput: event.target.value})
  }

  onUpdateDirectionItem = value => {
    this.setState({activeDirectionValue: value})
  }

  onClickGenerate = () => {
    const {activeDirectionValue, firstColorInput, secondColorInput} = this.state

    this.setState({
      colorGradient: `to ${activeDirectionValue},${firstColorInput},${secondColorInput}`,
    })
  }

  render() {
    const {
      activeDirectionValue,
      firstColorInput,
      secondColorInput,
      colorGradient,
    } = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        colorGradient={colorGradient}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <TextContent>Choose direction</TextContent>
        <ListContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              directionDetails={eachItem}
              key={eachItem.directionId}
              onUpdateDirectionItem={this.onUpdateDirectionItem}
              isActive={eachItem.value === activeDirectionValue}
            />
          ))}
        </ListContainer>
        <TextContent>Pick the Colors</TextContent>
        <InputContainer>
          <InputLabelContainer>
            <TextContent>{firstColorInput}</TextContent>
            <CustomInput
              value={firstColorInput}
              type="color"
              onChange={this.onChangeFirstHexColor}
            />
          </InputLabelContainer>
          <InputLabelContainer>
            <TextContent>{secondColorInput}</TextContent>
            <CustomInput
              value={secondColorInput}
              type="color"
              onChange={this.onChangeSecondHexColor}
            />
          </InputLabelContainer>
        </InputContainer>
        <GenerateButton type="button" onClick={this.onClickGenerate}>
          Generate
        </GenerateButton>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator
