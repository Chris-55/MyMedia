import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from "react-icons/io";

import { GoogleLogin, googleLogout } from '@react-oauth/google';

import Logo from '../utils/mymedia.png';
import { createOrGetUser } from '@/utils';

import useAuthStore from '@/store/authStore';
import user from '@/sanity-backend/schemas/user';

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();

  return (
    <div className="w-full justify-between items-center border-b-2 border-gray-200 py-0 px-4">
      <Link href="/">
        <div className="w-[50px] md:w-[90px] ">
          <Image
            className="cursos-pointer"
            src={Logo}
            alt="mymedia"
            layout="responsive"
          />
        </div>
      </Link>
      <div >
        Search
      </div>
      <div className="float-right">
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                <IoMdAdd className="text-xl" /> {` `}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {userProfile.image && (
              <Link href="/">
                <>
                  <Image
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                    src={userProfile.image}
                    alt="profile phoot"
                  />
                </>
              </Link>
            )}
            <button
            type="button"
            className="px-2"
            onClick={() => {
              googleLogout();
              removeUser();
            }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log('Error')}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar