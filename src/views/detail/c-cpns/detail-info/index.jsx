import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { InfoWrapper } from './style'
const DetailInfos = memo(function DetailInfo(props) {
  const { detailInfo } = props;
  const sits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
  // console.log(detailInfo);
  return (
    <InfoWrapper>
      <div className='infsss'>{detailInfo.name}</div>
      <hr />
      <div>{detailInfo.verify_info.comments}</div>
      <div>
        <ul>
          {
            sits.map(item => {
              return (
                <li key={item}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    </InfoWrapper>
  )
})

DetailInfos.propTypes = {
  detailInfo: PropTypes.object
}

export default DetailInfos
