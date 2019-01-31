import React, { Component } from 'react'
import App from '../components/main/app'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {

    constructor() {
        super()
        this.state = {
            description: '',
            list: []
        }
        this.handleAdd = this.handleAdd.bind(this)
    }

    componentWillMount() {
        this.refresh()
    }

    refresh() {
        axios.get(URL)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleAdd(e) {
        console.log(this.state.description)
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleChange = (e) => {
        this.setState({description: e.target.value })
    }

    handleRemove = (todo) => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    handleMarkAsDone = (todo) => {
        axios.put(`${URL}/${todo._id}`, { ...todo, status:true })
            .then(resp => this.refresh())
    }

    handleMarkingAsPending = (todo) =>  {
        axios.put(`${URL}/${todo._id}`, { ...todo, status:false })
            .then(resp => this.refresh())
    }

    render() {
        return (
            <App
                handleAdd={(e) => this.handleAdd(e)}
                description={this.state.description}
                handleChange={this.handleChange}
                list={this.state.list}
                handleRemove={this.handleRemove}
                handleMarkAsDone={this.handleMarkAsDone} 
                handleMarkingAsPending={this.handleMarkingAsPending}
             />
        )
    }
}

export default Todo