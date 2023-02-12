import React, { memo, useEffect, useRef, useState } from 'react'
// import PropTypes from 'prop-types'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
const ScrollView = memo(function (props) {
  const [showLeft, setShowLeft] = useState(false); // 左边按钮显示
  const [showRight, setShowRight] = useState(false);// 右边按钮显示
  const scrollContentRef = useRef();
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef(); // 用来保存totalDistance的值 
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; //  本身占据的宽度(当前窗口占据)
    const totalDistance = scrollWidth - clientWidth; // 一共可以滚动的距离 
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children])
  // 处理逻辑 
  function controlClick(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft; // 内容向左移动偏移量   
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex);
    // 是否继续显示右侧的按钮 
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0);
  }
  return (
    <ViewWrapper>
      {showLeft && (<div className='control left' onClick={e => controlClick(false)}>
        <IconArrowLeft />
      </div>)}
      {showRight && (<div className='control right' onClick={e => controlClick(true)}>
        <IconArrowRight />
      </div>)}
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

// ScrollView.propTypes = {}

export default ScrollView
