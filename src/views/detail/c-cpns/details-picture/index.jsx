import PropTypes from 'prop-types'
import { PictureWrapper } from './style'
import React, { memo, useState } from 'react'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPictures = memo((props) => {
  const { pictureUrls } = props;
  // picture_urls
  // const pictureUrls = detailInfo.picture_urls;
  const [showBrowser, setShowBrowser] = useState(false);
  function showBrowserHandle() {
    setShowBrowser(true)
  }
  function handleCloseClick() {
    setShowBrowser(false)
  }
  return (
    <PictureWrapper>
      <div className='top'>
        <div className='left'>
          <div className='item' onClick={showBrowserHandle}>
            <img src={pictureUrls.picture_urls?.[0]} alt='' />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            pictureUrls.picture_urls?.slice(1, 5).map((item, index) => {
              return (
                <div className='item' key={item} onClick={showBrowserHandle}>
                  <img src={item} alt='' />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='show-btn' onClick={showBrowserHandle}>查看照片</div>
      {showBrowser && <PictureBrowser pictureUrls={pictureUrls}
        closeClick={handleCloseClick} />}
    </PictureWrapper>
  )
})

DetailPictures.propTypes = {
  pictureUrls: PropTypes.object
}

export default DetailPictures
