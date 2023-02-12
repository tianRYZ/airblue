import React, { memo, useState, useCallback } from 'react'
import { SectionV2Wrapper } from './style'
import propTypes from 'prop-types'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'
const Homesectionv2 = memo((props) => {
  const { infoData } = props;
  // 就是接口discountInfo的所有数据  Object类型
  //  函数作为属性传递给子组件 每次重新渲染 会定义新的函数对象 每次都是新对象则会重新刷新 useCallback性能优化
  /**定义初始化的state */
  const initialState = Object.keys(infoData.dest_list ?? {})[0];
  // 当为空对象| undefined时 则设置为空 
  // console.log('1111111111', initialState);
  const [name, setName] = useState(initialState);
  const tabNames = infoData.dest_address?.map(item => item.name);
  const tabCallback = useCallback(function (index, name) {
    // 这里拿到name后  相当于name动态去实现 
    setName(name)
  }, []);
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabCallback} />
      <SectionRooms roomList={infoData.dest_list?.[name]} ItemWidth='33.3333%' />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

Homesectionv2.propTypes = {
  infoData: propTypes.object
}
export default Homesectionv2