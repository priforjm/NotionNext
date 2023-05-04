/*
 * @Author: JimmyHuang
 * @Blog: https://jimmyhjh.com
 * @Date: 2023-05-03 11:38:56
 * @LastEditors: JimmyHuang
 * @LastEditTime: 2023-05-04 09:24:55
 * @FilePath: /NotionNext-jimmy/components/ShareBar.js
 * @Description: 
 */
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import React from 'react'
import ShareButtons from './ShareButtons'

const ShareBar = ({ post }) => {
  const router = useRouter()

  if (!JSON.parse(BLOG.POST_SHARE_BAR_ENABLE) || !post || post?.type !== 'Post') {
    return <></>
  }

  const shareUrl = BLOG.LINK + router.asPath

  return <div className='m-1 overflow-x-auto'>
        <div className='flex w-full md:justify-end'>
        <ShareButtons shareUrl={shareUrl} title={post.title} image={post.pageCover} body={
            post.title +
            ' | ' +
            BLOG.TITLE +
            ' ' +
            shareUrl +
            ' ' +
            post.summary
        } />
        </div>
    </div>
}
export default ShareBar
