import { useEffect, useState } from 'react';
import defaultAxios from 'axios';

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export const UseAxiosPractice = () => {
  const { loading, data, error, refetch } = useAxios({
    url: 'https://yts.mx/api/v2/list_movies.json',
  });
  console.log(
    `Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`
  );
  return (
    <div>
      <h1>useAxios</h1>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
