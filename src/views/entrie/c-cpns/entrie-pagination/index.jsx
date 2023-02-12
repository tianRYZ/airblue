import React, { memo } from 'react'
import { PagniationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntrieRoomListAction } from '@/store/modules/entrie/actionCreator';
const EntriePagNiation = memo(() => {
  const { currentPage, totalCount } = useSelector((state) => ({
    currentPage: state.entrie.currentPage,
    totalCount: state.entrie.totalCount
  }))

  const count = Math.ceil(totalCount / 20)
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20

  const dispatch = useDispatch();
  function pageChangeHandler(event, newPage) {
    window.scrollTo(0, 0);
    dispatch(fetchEntrieRoomListAction(newPage - 1))
  }
  return (
    <PagniationWrapper>
      <div className='page-info'>
        <Pagination count={count} onChange={pageChangeHandler} />
        <div className='info'>
          第 {start} - {end} 个房源, 共超过 {totalCount} 个
        </div>
      </div>
    </PagniationWrapper>
  )
})

export default EntriePagNiation