import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaCloud, FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

import useAuthStore from '@/store/authStore';
import { client } from '@/utils/client';

const Upload = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [videoAsset, setVideoAsset] = useState();

  return (
    <div className="flex w-full h-full ml-32">
        <div className="bg-white rounded-lg">
            <div>
                <div>
                    <p className="text-2xl font-bold">
                        Upload video
                    </p>
                    <p className="text-md text-gray-400 mt-1">
                        Post a video to your account
                    </p>
                </div>
                <div className="border-dashed rounder-xl border-4 border-gray-200 flex flex-col
                justify-center items-center outline-none mt-10 w-[260px] h-[460px] p-10 cursor-pointer hover:border-red-300
                hover:bg-gray-100">
                    {isLoading ? (
                        <p>
                            Uploading...
                        </p>
                    ) : (
                        <div>
                            {videoAsset ? (
                                <div>

                                </div>
                            ) : (
                                <label className="cursor-pointer">
                                    <div className="flex flex-col items-center justify-center h-full">   
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="font-bold text-xl"> 
                                                <FaCloudUploadAlt 
                                                className="text-gray-300 text-6xl" />
                                            </p>
                                            <p className="text-xl font-semibold">
                                                Upload Video
                                            </p>    
                                        </div>
                                        <p className="text-gray-400 text-center mt-10 text-sm leading-10">
                                            MP4 or WebM or gg <br />
                                            720x1280 or higer <br />
                                            Up to 10 minutes <br />
                                            Less than 2GB
                                        </p>
                                        <p className="bg-[#ba42aa] text-center mt-10 rounded text-white text-md font-medium p-2 w-52 outline-none">
                                            Select file
                                        </p>  
                                    </div>
                                    
                                </label>
                            )}
                        </div>
                    )}
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Upload