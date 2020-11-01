import React, { useEffect } from 'react'
import './css/scareMe.css'
import moment from "moment";
// import searchTerm from '../App'

const searchTerm = "MostBeautiful"

const mapPornURL =
  `https://www.reddit.com/r/${searchTerm}/random.json`

const getRandom = async (url: string) => {
  const response = await fetch(url)
  return response.json()
}

const clearAndSetReceivedImage = (url: string,imageTitle:string,thumb:string,createdTime:string) => {
  const img = document.createElement('img')
  const title = document.createElement('span')
  const created = document.createElement('span')
  const thumbnail = document.createElement('img')


  title.innerHTML = imageTitle
  created.innerHTML = `(${createdTime})`
  created.classList.add('created')
  thumbnail.classList.add('thumb')

  img.setAttribute('src', url)
  thumbnail.setAttribute('src', thumb)
  img.onclick = () => {
    getRandomTechSupportGorePost()
  }
  thumbnail.onclick = () => {
    getRandomTechSupportGorePost()
  }
  const scareMe = document.querySelector('.Scare-Me')

  if (scareMe) {
    scareMe.innerHTML = ''
    scareMe.appendChild(created)
    scareMe.appendChild(title)
    scareMe.appendChild(thumbnail)
    scareMe.appendChild(img)
    
  }
}

const getRandomTechSupportGorePost = async () => {
  const randomRedditPost = await getRandom(mapPornURL)
  const postData = randomRedditPost?.[0]?.data?.children?.[0]?.data
  const mediaID = postData?.gallery_data?.items?.[0]?.media_id

  if (
    randomRedditPost?.[0]?.data?.children?.[0] &&
    postData.post_hint === 'image'
  ) {
    clearAndSetReceivedImage(postData.url,
      postData.title,
      postData.thumbnail,
      moment(postData.created * 1000).fromNow(),
    )
  } else if (
    randomRedditPost?.[0]?.data?.children?.[0] &&
    (!postData.gallery_data || !postData.gallery_data.items[0].media_id)
  ) {
    getRandomTechSupportGorePost()
  } else {
    clearAndSetReceivedImage(
      postData.media_metadata[mediaID].s.u.split('amp;').join(''),
      postData.title,
      postData.thumbnail,
      moment(postData.created * 1000).fromNow(),

    )
  }
}

const ScareMe = () => {
  useEffect(() => {
    getRandomTechSupportGorePost()
  }, [])

  return (
      <>
      <h1>随机一图</h1>
    <div className='Scare-Me'></div>
      </>
    )
}

export default ScareMe
