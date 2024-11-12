import { useEffect, useState } from "react";

const useFetch = (url) =>
{
    const [data, setData] = useState([]);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null); // so that the error can be displayed in the browser itself instead of console

    useEffect(() => {
        setTimeout(() => //this is used to emulate loading time
            {
                fetch(url).then(res => {
                    //Block of code to throw error if the url throws some error
                    if(!res.ok)
                    {
                        throw Error("There was some error in fetching the data");
                    }
                    return res.json()
            }).then(data =>  //If the promise is fulfilled
            {
                setData(data); 
                setPending(false);
                setError(null);
            }).catch(err =>  //If it is rejected or throws some error, that error message (in this case {throw error block} is handled using catch)
            {
                setPending(false);
                console.log(err.message);
                setError(err.message); //to display the error in the webpage
            });
            },1000)}
    ,[url])

    return {data, isPending, error, setData};

}

export default useFetch;