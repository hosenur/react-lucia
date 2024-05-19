import Axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function Verify() {
    const { token } = useParams()
    useEffect(() => {
        Axios.post("http://localhost:8080/verify", { token }, {
            withCredentials: true
        }).then(res => {
            console.log(res.data)
        })
    }, [token])

    return (
        <div>
            <h1>Verify</h1>
            <p>Token: {token}</p>
        </div>
    )
}
