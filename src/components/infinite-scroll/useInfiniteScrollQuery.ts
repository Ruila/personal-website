import { useEffect, useState } from "react"

export const useInfiniteScrollQuery = (query: string, pageNumber: number) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState<Array<string>>([])
  const [hasMore, setHasMore] = useState(false)
  const mockData = new Array(60).fill("hello")
  useEffect(() => {
    setData([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    const timer = setTimeout(() => {
      setData(prevBooks => {
        return [...prevBooks, ...mockData]
      })
      setHasMore(true)
      setLoading(false)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [query, pageNumber])

  return { loading, error, data, hasMore }
}
