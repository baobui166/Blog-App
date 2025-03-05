import PostListItem from "./PostListItem"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`)
  console.log(res.data)
  return res.data
}

function PostList() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchPosts()
  })

  if (isPending) return "Loading..."

  if (error) return "An error has occurred: " + error.message

  return (
    <section className='flex flex-col gap-12 mb-8'>
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </section>
  )
}

export default PostList
