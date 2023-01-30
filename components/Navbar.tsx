import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from "react-icons/io";

import { GoogleLogin, googleLogout } from '@react-oauth/google';

import Logo from '../utils/mymedia.png';
import { createOrGetUser } from '@/pages/api/post';

const Navbar = () => {
  const user = false;
  return (
    <div className="w-full justify-between items-center border-b-2 border-gray-200 py-0 px-4">
      <Link href="/">
        <div className="w-[50px] md:w-[65px] ">
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
        {user ? (
          <div>
            Logged in
          </div>
        ) : (
          <GoogleLogin
          onSuccess={(response) => createOrGetUser(response)}
          onError={() => console.log('Error')}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar