import IconAvator from '@/assets/svg/icon_avator'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
const HeaderRight = memo(() => {
  // 控制Paner-list状态开关
  const [showPanner, setPanner] = useState(false);
  const profileClick = () => {
    setPanner(!showPanner);
  }
  useEffect(() => {
    function windowHandleClick() {
      setPanner(false)
    }
    // addeventListener中的第三个参数 负责 事件冒泡  默认为false 
    window.addEventListener("click", windowHandleClick, true)
    return () => {
      window.removeEventListener("click", windowHandleClick, true)
    }
  }, [])
  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>
      <div className='profile' onClick={profileClick}>
        <IconMenu />
        <IconAvator />
        {showPanner && (
          <div className='panner'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item register'>出租房源</div>
              <div className='item login'>开展体验</div>
              <div className='item login'>帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight