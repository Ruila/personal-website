import React, { useState, useRef, useCallback } from "react"
import { useBookSearch } from "./useBookSearch"

export const InfiniteScroll: React.FunctionComponent = () => {
  const [query, setQuery] = useState("")
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
    <>
      <input type="text" value={query} onChange={handleSearch} />
      {books.map((book, index) => {
        if (books.length - 1 === index) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          )
        } else {
          return <div key={book}>{book}</div>
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  )
}
