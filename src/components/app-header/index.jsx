import React, { memo, useRef, useState } from 'react'
import HeaderLeft from './c-cnps/header-left'
import HeaderRight from './c-cnps/header-right'
import HeaderCenter from './c-cnps/header-center'
import { HeaderWrapper, SearchAreaholder } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'



const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.mainInfo.headerConfig
  }), shallowEqual)
  const { isFixed, isHome } = headerConfig;
  function searchBarClickHandle() {
    setIsSearch(true)
  }
  // 监听滚动
  const { scrollY } = useScrollPosition();
  console.log('导航栏y方向滚动', scrollY);
  const prevY = useRef(0);
  // 正常情况下 搜索框未弹出 则不记录位置 
  if (!isSearch) prevY.current = scrollY;
  // 弹出搜索框后 滚动距离大于之前记录的距离的30  关闭搜索框
  if (Math.abs(prevY.current - scrollY) > 30 && isSearch) setIsSearch(false);
  /**透明度逻辑  */
  const isAlpha = (isHome && scrollY === 0)
  // 使用ThemeProvider提供值 
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper isAlpha={isAlpha} className={classNames({ fixed: isFixed })}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={searchBarClickHandle} />
            <HeaderRight />
          </div>
          <SearchAreaholder isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && <div className='cover' onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader