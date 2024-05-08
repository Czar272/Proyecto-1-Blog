import { useState, useEffect } from 'react';

const useApi = (url, options = {}) => {
  const [dataH, setDataH] = useState(null);
  const [loadingH, setLoadingH] = useState(false);
  const [errorH, setErrorH] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingH(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        setDataH(jsonData);
      } catch (error) {
        setErrorH(error);
      } finally {
        setLoadingH(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { dataH, loadingH, errorH };
};

export default useApi;