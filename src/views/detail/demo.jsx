import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DetailWrapper } from './style'
const Detail = memo(() => {
  const namss = ['abc', 'def', 'nsd', 'fsf', 'kps', 'ouk'];
  const [selectIndex, setSelectIndex] = useState(0);
  function toggleClick(isNext) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = namss.length - 1;
    if (newIndex > namss.length - 1) newIndex = 0;
    setSelectIndex(newIndex)
  }
  return (
    <DetailWrapper>
      <div className='control'>
        <button onClick={e => toggleClick(false)}>上一个</button>
        <button onClick={e => toggleClick(true)}>下一个</button>
      </div>
      <div className='list'>
        <Indicator selectIndex={selectIndex}>
          {
            namss.map((item, index) => {
              return <button key={index}>{item}</button>
            })
          }
        </Indicator>
      </div>
    </DetailWrapper>
  )
})

export default Detail