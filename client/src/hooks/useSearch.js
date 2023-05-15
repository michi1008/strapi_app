import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest"

const useSearch = (url, query) => {

const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await makeRequest.get(`/search?q=${query}`)
        console.log(res)
        setData(res.data.data)
      } catch (err) {
        setError(true)
      }
      setLoading(false)
    };
    fetchData()
  }, [url, query])

  return { data, loading, error }
}

export default useSearch