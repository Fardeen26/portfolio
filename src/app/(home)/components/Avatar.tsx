import React from 'react'
import { Link, Avatar as Picture } from '@radix-ui/themes'

const Avatar = () => {
  return (
    <Link href='https://x.com/intent/follow?screen_name=fardeentwt' target='_blank'>
      <Picture
        src='/space.jpeg'
        fallback="A"
        size='6'
        radius='full'
      />
    </Link>
  )
}

export default Avatar