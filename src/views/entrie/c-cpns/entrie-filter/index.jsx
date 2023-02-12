import React, { memo, useState } from 'react'
import { FilterWrapper } from './styled'
import FilterData from '@/assets/data/filter_data.json'
import classNames from 'classnames';

const EntrieFilter = memo(() => {
  const [selectItem, setSelectItem] = useState([]);
  // 切换筛选卡选项
  function itemClickHandle(item) {
    // console.log(item);
    const newItem = [...selectItem];
    if (newItem.includes(item)) {
      // 如果 当前的newItem中已经有了目前点击过的选项时，再次点击即可取消
      const itemIndex = newItem.findIndex(filterItem => filterItem === item)
      newItem.splice(itemIndex, 1);
    } else {
      newItem.push(item);
    }
    setSelectItem(newItem);
  }
  return (
    <FilterWrapper>
      <div className='filter'>
        {
          FilterData.map((item, index) => {
            return <div className={classNames('item', { 'active': selectItem.includes(item) })} onClick={e => itemClickHandle(item)} key={item}>{item}</div>
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntrieFilter