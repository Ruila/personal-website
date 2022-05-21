import React, { useState, useRef, useCallback } from "react"
import { useBookSearch } from "./useBookSearch"

export const InfiniteScroll: React.FunctionComponent = () => {
  const [query, setQuery] = useState("test")
  const [pageNumber, setPageNumber] = useState(1)

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber)

  const observer = useRef<IntersectionObserver>()
  const lastBookElementRef = useCallback(
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
      {books.map((book, index) => {
        if (books.length - 1 === index) {
          return (
            <div
              className="my-2 w-[250px] shadow-lg border-[#000] border-[1px] border-solid rounded-[5px] p-2"
              ref={lastBookElementRef}
              key={book}
            >
              {book}
            </div>
          )
        } else {
          return (
            <div
              className="my-2 w-[250px] shadow-lg border-[#000] border-[1px] rounded-[5px] border-solid p-2"
              key={book}
            >
              {book}
            </div>
          )
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  )
}
