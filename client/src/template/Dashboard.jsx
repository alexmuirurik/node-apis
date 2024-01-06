import React from 'react'
import Countdown from 'react-countdown'

import Navbar from '../temparts/navbar'
import Sidebar from '../temparts/sidebar'
import Footer from '../temparts/footer'
import HomeTasks from '../subparts/HomeTasks'
import TodoList from '../subparts/TodoList'

const Dashboard = () => {
    const CountDownTimer = ({ hours, minutes, seconds, completed }) => {
        const value = (completed) ? 'You are good to go!' : hours+": hrs "+minutes+": Mins "+seconds +": Sec" 
        return <input type="text" name="timer" class="form-control timer font-weight-bold" placeholder="0 sec" value={value} />
    }

    const RenderButton = (state) => {
        const startbtn = document.body.getElementsByClassName('start-timer')
        const pausebtn = document.body.getElementsByClassName('pause-timer')
        if(state === 'start') {
            
        }
    }

    return (
        <div class="wrapper">
            <Sidebar />
            <div class="main-panel">
                <Navbar />
                <div class="content">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="card-category d-inline"><i class="fas fa-baby"></i> Current Balance</h6>
                                </div>
                                <div class="card-body text-secondary">
                                    <div class="user-balance w-100 d-inline-flex justify-content-between ">
                                        <h5 class="title d-inline invoice"><i class="fa fa-angle-right me-1"></i><a href="javascript:void(0)">Balance:</a></h5>
                                        <h5 class="title" title="Add Funds">
                                            <a href="/billing">
                                                $666.25 <i class="ml-1 fa fa-circle-plus"></i>
                                            </a>
                                        </h5>
                                    </div>
                                    <div class="funds d-none mt-1 bg-light rounded-sm">
                                        <div class="rowa px-3 mt-3 w-100 d-inline-flex justify-content-between">
                                            <h5 class="title d-inline">In Writing:</h5>
                                            <h6 class="title">$3</h6>
                                        </div>
                                        <div class="rowa px-3 pr-3 w-100 d-inline-flex justify-content-between">
                                            <h5 class="title d-inline">Pending Review:</h5>
                                            <h6 class="title">$0</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="d-inline task-titlep">Todo List</h6>
                                </div>
                                <div class="card-body">
                                    <TodoList />
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="d-inline task-titlep">Count Down Timer</h6>
                                </div>
                                <div class="card-body">
                                    <div class="task-conte">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <Countdown date={Date.now() + 10000} autoStart={false} renderer={CountDownTimer } onComplete={RenderButton('complete')} 
                                                    onStart={RenderButton('start')} onPause={RenderButton('pause')} onStop={RenderButton('stop')}
                                                />
                                            </div>
                                            <div class="col-md-12 d-inline-flex justify-content-between mt-2">
                                                <button class="btn btn-success start-timer w-50 border rounded p-2">Start</button>
                                                <button class="btn btn-success resume-timer border w-50 p-2 d-none">Resume</button>
                                                <button class="btn btn-neutral pause-timer rounded border w-50 d-none" >Pause</button>
                                                <button class="btn btn-danger remove-timer rounded p-2 border w-50 ml-2 d-none">Remove
                                                    Timer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card text-center">
                                        <div class="card-header">
                                            <h6 class="card-category"><i class="fas fa-baby"></i> Pending Author</h6>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-title"><a href="#">2 Tasks</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-center">
                                        <div class="card-header">
                                            <h6 class="card-category"><i class="fas fa-usd"></i> Pending Payment</h6>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-title"><a href="/payment">0 Tasks</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card text-center">
                                        <div class="card-header">
                                            <h6 class="card-category"><i class="fas fa-box"></i> Completed</h6>
                                        </div>
                                        <div class="card-body">
                                            <p class="card-title"><a href="/task/completed">0 Tasks</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <HomeTasks />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Dashboard