import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
          .then((res) => {
            if (!res.ok) throw Error( "Could not fetch data from the server");
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setData(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, [data]);

      return {data};
}
 
export default useFetch;