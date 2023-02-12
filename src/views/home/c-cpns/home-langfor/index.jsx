import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { LangforWrapper } from './style'
import SectionHeader from '@/components/section-header';
import LangForItem from '@/components/langfor-item';
import ScrollView from '@/base-ui/scroll-view';

const HomeLongfor = memo(function index(props) {
  const { infoData } = props;
  return (
    <LangforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='langfor-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LangForItem itemData={item} key={item.city} />
            })
          }
        </ScrollView>
      </div>
    </LangforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor
