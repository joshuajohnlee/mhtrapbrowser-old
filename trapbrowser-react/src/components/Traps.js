import { useEffect, useState } from "react";

export default function Traps() {
    
    const [data, setData] = useState("Loading...")

    const [form, setForm] = useState({user: "Nick", nationality: "American"});

    useEffect(() => {
      setForm({
        ...form,
        user: 'Josh'
      })

      console.log(form);
    }, [])

    useEffect(() => {
        fetch("http://localhost:8000/", {
          method: 'POST', // default "GET"
          body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(json => {setData(json.data)});
    })

    return(
      <>
        <form></form>
        {data}
      </>
    );
}