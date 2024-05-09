import { useState, useEffect } from 'react'

const useApi = (url, options = {}) => {
  const [dataH, setDataH] = useState(null)
  const [loadingH, setLoadingH] = useState(false)
  const [errorH, setErrorH] = useState(null)

  const stringifiedOptions = JSON.stringify(options)



  useEffect(() => {
    const fetchData = async () => {
      if(options) {
      setLoadingH(true)
      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error('Error al obtener los datos')
        }
        const jsonData = await response.json()
        setDataH(jsonData)
      } catch (error) {
        setErrorH(error)
      } finally {
        setLoadingH(false)
      }
    }
    }   

    fetchData()
  }, [url, stringifiedOptions])//eslint-disable-line react-hooks/exhaustive-deps

  return { dataH, loadingH, errorH }
}

export default useApi