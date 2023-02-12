import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import Indicator from '../indicator'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'
import classNames from 'classnames'

const PictureBrowser = memo(function PictureBrowser(props) {
  const { pictureUrls, closeClick } = props;
  const [currentIndx, setCurrentIndx] = useState(0); // 当前图片的索引用于 左右箭头控制切换图片使用
  const [isNext, setIsNext] = useState(true); // 控制是否为下一张  下一张的画 css过渡动画为+ 反之为-
  const [showViewList, setViewList] = useState(true);
  // 图片显示出来时 滚动功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  /** 
   * 这里的closeClick来自于父组件 传过来一个函数 该函数在父组件中控制关闭 
   * 因此 将其传到子组件中 如果子组件点击事件后 有该函数 则直接调用关闭子组件功能
  */
  function closeBtnClick() {
    if (closeClick) closeClick()
  }
  function controlClick(isNext = true) {
    let newxIndexs = isNext ? currentIndx + 1 : currentIndx - 1
    if (newxIndexs < 0) newxIndexs = pictureUrls.picture_urls.length - 1
    if (newxIndexs > pictureUrls.picture_urls.length - 1) newxIndexs = 0
    setCurrentIndx(newxIndexs)
    setIsNext(isNext)
  }
  function toggleShowClick() {
    setViewList(!showViewList)
  }
  function imgItemClickHandle(index) {
    setCurrentIndx(index)
    setIsNext(index > currentIndx);
  }
  /**
   * pictureList 中分为2部分 切换上、下一张图片的按钮   图片
   * 图片则 需要设置一个当前的currentIndex来记录目前是第几张图片 
   * 最后在切换按钮上onClick一个事件 通过setCurrentIndex来达到切换图片的效果 
   * 
   * 这里需要图片切换时  添加过渡效果 
   * yarn add react-transition-group
   */
  return (
    <BrowserWrapper isNext={isNext}>
      <div className='top'>
        <div className='close' onClick={closeBtnClick}>
          <IconClose />
        </div>
      </div>
      <div className='picturelist'>
        <div className='control'>
          <div className='btn left' onClick={e => controlClick(false)}>
            <IconArrowLeft width='77' height='77' />
          </div>
          <div className='btn right' onClick={e => controlClick(true)}>
            <IconArrowRight width='77' height='77' />
          </div>
        </div>
        <div className='piccu'>
          <SwitchTransition mode='in-out'>
            <CSSTransition key={pictureUrls.picture_urls[currentIndx]}
              timeout={150} classNames='fade'
            >
              <img src={pictureUrls.picture_urls[currentIndx]} alt='' />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className='preview'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>{currentIndx + 1}/{pictureUrls.picture_urls.length}</span>
              <span> {pictureUrls.name}--- 图片{currentIndx + 1}</span>
            </div>
            <div className='toggle' onClick={toggleShowClick}>
              <span>{showViewList ? '隐藏' : '显示'}照片列表</span>
              {
                showViewList ? <IconTriangleBottom /> : <IconTriangleTop />
              }
            </div>
          </div>
          <div className='viewlist' style={{ height: showViewList ? "67px" : "0" }}>
            <Indicator selectIndex={currentIndx} >
              {
                pictureUrls.picture_urls.map((item, index) => {
                  return (
                    <div className={classNames('item', { active: currentIndx === index })}
                      key={index} onClick={e => imgItemClickHandle(index)}>
                      {/*viewList中 点击图片切换 实现 将上面图片的 setCurrentIndx更换为当前循环的index即可 点击viewlist切换图片*/}
                      <img src={item} alt='' />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})
PictureBrowser.propTypes = {
  pictureUrls: PropTypes.object
}

export default PictureBrowser
