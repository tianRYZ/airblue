import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/details-picture'
import DetailInfo from './c-cpns/detail-info'
import { changeHeaderConfigAction } from '@/store/modules/main'
const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, isHome: false }))
  }, [dispatch])
  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo} />
      <DetailInfo detailInfo={detailInfo} />
    </DetailWrapper>
  )
})

export default Detail