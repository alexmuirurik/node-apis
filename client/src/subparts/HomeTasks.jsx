import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AlexTasks from './AlexTasks'

const HomeTasks = () => {
    const [data, setdata] = useState()
    const [total, settotal] = useState()
    const [length, setlength] = useState()
    useEffect(() => { axios.post('/home')
    .then(res => {
        setdata(res.data)
        setlength(res.data.length)
        const totality = res.data.reduce((prev, current) => {
            const wordcount = current.content.rendered.split(' ').length * 0.04
            return prev + wordcount
        }, 0)
        settotal(totality.toFixed(2))
    }).catch(err => console.log(err)) }, [])
    return (
        <div class="writing">
            <div class="card card-tasks">
                <div class="card-header ">
                    <h6 class="title d-inline">Total Published Tasks</h6>
                    <p class="card-category d-inline">({length} Tasks)</p>
                    <div class="dropdown float-right">
                        <p class="title">Total Funds: ${total} </p>
                    </div>
                </div>
                <div class="card-body pl-0 pr-0">
                    <div class="table-full-width table-responsive ps">
                        <table class="table table-sm table-stripped datatables">
                            <tbody>
                                { <AlexTasks data = {data} />}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTasks