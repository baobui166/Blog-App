import PostListItem from "./PostListItem"

function PostList() {
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
