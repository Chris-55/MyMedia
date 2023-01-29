import axios from "axios";
import { Video } from "@/types";
import VideoCard from "@/components/VideoCard";
import NoResults from "@/components/NoResults";

interface IProps {
  videos: Video[]
}

const Home = ({ videos }: IProps) => {
  console.log(videos);
  return (
    <div className="relative h-64">
      <div className="top-0 left-0 w-full flex flex-col gap-10 videos">
        {videos.length ? (
          videos.map((video: Video) => (
            <VideoCard post={video} key={video._id} />
          ))
        ) : (
          <NoResults text={'No results'} />
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data
    }
  }
}

export default Home