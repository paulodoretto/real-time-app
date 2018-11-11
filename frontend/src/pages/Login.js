import React, { Component } from 'react';
import TwitterLogo from '../twitter.svg'
import './Login.css'

export default class Login extends Component {
    state = {
        username: '',
    }

    handleSubmit = event => {
        event.preventDefault()

        const { username } = this.state

        if (!username.length) return;

        localStorage.setItem('@GoTwitter:username', username)

        this.props.history.push('/Timeline')
    } 

    handleInputChange = event => {
       this.setState({ username: event.target.value })
    }
    

    render() {
        return (
         <div className="login-wrapper">
            <img src={TwitterLogo} alt="GoTwitter" />
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="Nome de usuário" 
                    value={this.state.username}
                    onChange={this.handleInputChange}/>
                <button type="submit">Entrar</button>
            </form>
         </div>
    );
  }
}
