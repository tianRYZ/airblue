import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';
const RoomItem = memo((props) => {
  // console.log(props);
  const { itemData, ItemWidth = '25%', itemClick } = props;
  // 记录一下 上一个 下一个的索引 -->用于指示器使用 
  const [selectIndex, setSelectIndex] = useState(0);
  const swiperRef = useRef();
  function controlClickHandle(isNext, event) {
    isNext ? swiperRef.current.next() : swiperRef.current.prev()
    // 拿到索引进行更新  
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length;
    if (newIndex < 0) newIndex = length - 1;
    if (newIndex > length - 1) newIndex = 0;
    setSelectIndex(newIndex)
    // 阻止事件冒泡 
    event.stopPropagation();
  }
  function itemClickHandle() {
    if (itemClick) itemClick(itemData);
  }
  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      ItemWidth={ItemWidth} onClick={itemClickHandle}>
      <div className='inner'>
        {!itemData.picture_urls ? <div className='cover'>
          <img src={itemData.picture_url} alt='' />
        </div> : <div className='swiper'>
          <div className='control'>
            <div className='btn left' onClick={e => controlClickHandle(false, e)}>
              <IconArrowLeft width='24' height='24' />
            </div>
            <div className='btn right' onClick={e => controlClickHandle(true, e)}>
              <IconArrowRight width='24' height='24' />
            </div>
          </div>
          <div className='indicator'>
            <Indicator selectIndex={selectIndex}>
              {
                itemData.picture_urls.map((item, index) => {
                  return (
                    <div className='dot-item' key={item}>
                      <span className={classNames("dot", { active: selectIndex === index })}></span>
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
          <Carousel dots={false} ref={swiperRef}>
            {
              itemData.picture_urls.map((item, index) => {
                return (
                  <div key={index} className="cover">
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>}
        <div className='desc'>{itemData.verify_info.messages.join('.')}</div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
        <div className='bottom'>
          <Rating precision={0.5} value={itemData.star_rating ?? 5} readOnly sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }} />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>.{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem