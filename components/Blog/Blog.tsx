
import Article from "./Article"

import PaginationControls from "../ui/PaginationControls"
import Categories from "./Categories"
import RecentPosts from "./RecentPosts"
import Search from "./Search"

export default function Blog() {


  return (
    <div className="flex flex-col lg:flex-row max-w-7xl m-auto gap-16 mt-28 mb-28 px-12">
      <div className="w-full lg:flex-[.8] space-y-12">
        <Article />
        <Article />
        <PaginationControls />
      </div>
      <div className="lg:flex-[.4]">
        <Search />
        <div className="lg:space-y-28 flex justify-between lg:block">
          <Categories />
          <RecentPosts />
        </div>
      </div>
    </div>
  )
}
