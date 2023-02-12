import IconSearchBar from '@/assets/svg/icon_serach_bar'
import React, { memo, useState } from 'react'
import { CenterWrapper } from './style'
import searchTitles from '@/assets/data/search_titles.json'
import SearchTabs from './c-cpns/searchtabs'
import SearchSections from './c-cpns/search-section'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [tabIndex, setTabIndex] = useState(0);
  /* 过滤title数据*/
  const titles = searchTitles.map(item => item.title);
  function tabClick(index) {
    setTabIndex(index);
  }
  function searchBarClickHandles() {
    if (searchBarClick) searchBarClick()
  }
  return (
    <CenterWrapper>
      <CSSTransition in={!isSearch} classNames="bar" timeout={250} unmountOnExit={true}>
        <div className='search-bar' onClick={searchBarClickHandles}>
          <div className='text'>搜索房源和体验</div>
          <span className='icon'>
            <IconSearchBar />
          </span>
        </div>
      </CSSTransition>
      <CSSTransition in={isSearch} classNames="detail" timeout={250} unmountOnExit={true}>
        <div className='search-detail'>
          <SearchTabs titles={titles} tabClick={tabClick} />
          <div className='infos'>
            <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter