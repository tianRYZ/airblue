import { fetchHomeDataAction } from '@/store/modules/home'
import { isEmptyObj } from '@/utils'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import Homesectionv2 from './c-cpns/home-sectionv2'
import HomeLongfor from './/c-cpns/home-langfor'
import { HomeWrapper } from './style'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, hoteRecommentInfo, langforInfo, plusInfo } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hoteRecommentInfo: state.home.hoteRecommentInfo,
      langforInfo: state.home.langforInfo,
      plusInfo: state.home.plusInfo
    }
  }, shallowEqual)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxx'));
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: true }))
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        {/* 折扣数据 */}
        {/* <div className='discount'>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
          <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth="33.33333%"/>
        </div> */}
        {isEmptyObj(discountInfo) && <Homesectionv2 infoData={discountInfo} />}
        {isEmptyObj(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyObj(langforInfo) && <HomeLongfor infoData={langforInfo} />}
        {isEmptyObj(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyObj(hoteRecommentInfo) && <Homesectionv2 infoData={hoteRecommentInfo} />}
        {isEmptyObj(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
