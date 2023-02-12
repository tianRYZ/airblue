import RoomItem from '@/components/room-item'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomWrapper } from './style'
import { changeDEtailAction } from '@/store/modules/detail/actionCreator'

const EntireRoom = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector((state) => {
    return {
      roomList: state.entrie.roomList,
      totalCount: state.entrie.totalCount,
      isLoading: state.entrie.isLoading
    }
  }, shallowEqual)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useCallback包裹 性能优化 
  const handleItemClick = useCallback((item) => {
    navigate('/detail');
    dispatch(changeDEtailAction(item));
  }, [navigate, dispatch])
  return (
    <RoomWrapper>
      <div className='title'>共{totalCount}处住宿</div>
      <div className='Roomss'>
        {
          roomList.map(item => {
            return <RoomItem key={item.id} itemData={item} ItemWidth="20%" itemClick={e => handleItemClick(item)} />
          })
        }
      </div>
      {isLoading && <div className='cover'></div>}
    </RoomWrapper>
  )
})

export default EntireRoom