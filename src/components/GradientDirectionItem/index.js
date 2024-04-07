// Write your code here
import {ListItem, GradientDirectionItemButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onUpdateDirectionItem, isActive} = props
  const {displayText, value} = directionDetails

  const onClickDirectionItem = () => {
    onUpdateDirectionItem(value)
  }

  return (
    <ListItem>
      <GradientDirectionItemButton
        type="button"
        onClick={onClickDirectionItem}
        isActive={isActive}
      >
        {displayText}
      </GradientDirectionItemButton>
    </ListItem>
  )
}
export default GradientDirectionItem
