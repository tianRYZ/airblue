/* eslint-disable react/jsx-no-duplicate-props */
import React, { memo, useState } from 'react'
import propTypes from 'prop-types'
import { TabWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'
const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemClickHandler = (index, item) => {
    setCurrentIndex(index);
    // 这里将动态切换的name传值给 父组件SectionV2Wrapper
    tabClick(index, item)
  }
  // 这里需要引入一共classNames库  方便动态的添加class yarn add classnames
  return (
    <TabWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div className='item' key={index}
              className={classNames("item", { active: index === currentIndex })}
              onClick={e => itemClickHandler(index, item)}
            >{item}</div>
          )
        })}
      </ScrollView>
    </TabWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: propTypes.array,
}

export default SectionTabs