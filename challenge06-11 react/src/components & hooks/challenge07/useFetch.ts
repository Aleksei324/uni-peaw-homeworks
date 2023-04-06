import { useState, useEffect } from "react"

export const useFetch = (url: string) => {
  const [getData, setData] = useState<any[]>([])
  const [getLoading, setLoading] = useState(true)
  const [getError, setError] = useState(null)

  const getFetch = async () => {
    setLoading(true)

    const api = await fetch(url)
    const datajson = await api.json()

    setData([datajson])
    setLoading(false)
  }

  useEffect(() => {getFetch()}, [url])

  return {
    data: getData,
    isLoading: getLoading,
    hasError: getError
  }
}
