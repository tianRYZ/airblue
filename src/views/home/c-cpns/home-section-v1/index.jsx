import React, { memo } from 'react'
import propTypes from 'prop-types'
import { Sectionv1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <Sectionv1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} />
      <SectionFooter />
    </Sectionv1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: propTypes.object
}
export default HomeSectionV1