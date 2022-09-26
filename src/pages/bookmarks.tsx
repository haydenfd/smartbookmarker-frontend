import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import TweetBox from '../components/Tweet';
import { Tweet } from '../types/Tweet';
import { Loading } from './loading';

export const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<Tweet[]>([])
  const [cookies] = useCookies(['smartBookmarkerToken']);
  
  useEffect(() => {
    
    const getBookmarks = async () => {
    const x = await fetch("/api/bookmarks", {
        headers: new Headers({
          'Authorization': `Bearer ${cookies.smartBookmarkerToken}`
        })
      })
    const t = await x.json()
    setBookmarks(t)
  }

    getBookmarks();
  
  }, [cookies.smartBookmarkerToken])
  
  
  return (
    <div>
      {bookmarks.length === 0 ? 
        <Loading />: 
        bookmarks.map((bookmark) =>
        <TweetBox tweet={bookmark} />
      )
      }
    </div>
  )
}