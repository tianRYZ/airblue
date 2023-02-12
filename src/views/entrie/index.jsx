import { fetchEntrieRoomListAction } from '@/store/modules/entrie/actionCreator'
import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntrieFilter from './c-cpns/entrie-filter'
import EntriePagNiation from './c-cpns/entrie-pagination'
import EntireRoom from './c-cpns/entrie-rooms'
import { EntrieWrapper } from './style'
const Entrie = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntrieRoomListAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: false }))
  }, [dispatch])
  return (
    <EntrieWrapper>
      <EntrieFilter />
      <EntireRoom />
      <EntriePagNiation />
    </EntrieWrapper>
  )
})

export default Entrie