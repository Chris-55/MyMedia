import React, { useState, useEffect, useRef} from 'react';
import { Video } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BsPlay , BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { NextPage } from 'next';

interface IProps {
    post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
    console.log(post.caption)
  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link href="/">
            <>
              <Image 
                width={62}
                height={62}
                className="rounded-full"
                src={post.postedBy.image}
                alt="profile phoot"
                layout="responsive"
              />
            </>
            </Link>
          </div>
        </div>
      </div>
      VideoCard
    </div>
  )
}

export default VideoCard