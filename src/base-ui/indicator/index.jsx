import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'
const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();
  useEffect(() => {
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemWidth = selectItemEl.clientWidth // item的宽度 
    const itemLeft = selectItemEl.offsetLeft // item的偏移量

    // content宽度 
    const contentWidth = contentRef.current.clientWidth; // 内容的宽度
    const contentScroll = contentRef.current.scrollWidth; // 内容滚动的宽度 
    // console.log(itemLeft, itemWidth, contentWidth, contentScroll);
    // offsetLeft +当前Item的1/2宽度  - 当前内容盒子1/2宽度
    let distance = itemWidth * 0.5 + itemLeft - contentWidth * 0.5
    // 临界值的限制 
    if (distance < 0) distance = 0;
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance;
    // 改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex])
  return (
    <IndicatorWrapper>
      <div className='indicat-content' ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

export default Indicator