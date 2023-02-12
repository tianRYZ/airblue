import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { ItemWrapper } from './style'
const LangForItem = memo(function LangForItem(props) {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className='inner'>
        <div className='item-info'>
          <img className='cover' src={itemData.picture_url} alt="" />
          <div className='bg-cover'></div>
          <div className='info'>
            <div className='city'>{itemData.city}</div>
            <div className='price'>均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})

LangForItem.propTypes = {
  itemData: PropTypes.object
}

export default LangForItem
