import React, { useState, useRef, useCallback } from "react"
import { useInfiniteScrollQuery } from "./useInfiniteScrollQuery"

export const InfiniteScroll: React.FunctionComponent = () => {
  const [query, setQuery] = useState("test")
  const [pageNumber, setPageNumber] = useState(1)

  const { data, hasMore, loading, error } = useInfiniteScrollQuery(
    query,
    pageNumber
  )

  const observer = useRef<IntersectionObserver>()
  const lastElementRef = useCallback(
    node => {
      if (loading) {
        return
      }
      if (observer.current) {
        observer.current.disconnect()
      }
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) {
        observer.current.observe(node)
      }
    },
    [loading, hasMore]
  )

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <input
        className="w-[250px] shadow-lg border-[#000] border-[1px] p-4 border-solid rounded-[5px]"
        type="text"
        value={query}
        placeholder="Input something"
        onChange={handleSearch}
      />
      {data.map((item, index) => {
        if (data.length - 1 === index) {
          return (
            <div
              className="my-2 w-[250px] shadow-lg border-[#000] border-[1px] border-solid rounded-[5px] p-2"
              ref={lastElementRef}
              key={index}
            >
              Last Node
            </div>
          )
        } else {
          return (
            <div
              className="my-2 w-[250px] shadow-lg border-[#000] border-[1px] rounded-[5px] border-solid p-2"
              key={index}
            >
              {item}
            </div>
          )
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  )
}
