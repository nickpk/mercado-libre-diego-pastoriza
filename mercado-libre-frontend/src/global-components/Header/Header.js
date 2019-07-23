import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/variables.scss';
import './Header.scss';

class Header extends Component {

    placeHolder = "Nunca dejes de buscar";

    constructor(props){
        super(props);
        this.state = {
            searchQuery: ""
        }
        this.changeValueSearch = this.changeValueSearch.bind(this);	
        this.keyPress = this.keyPress.bind(this);
    }

    keyPress(e){
        if(e.keyCode == 13){
           console.log('value', e.target.value);
        }
     }
    
    searchSubmit = () => {
        let url = `/items?search=${this.state.searchQuery}`;
        this.props.history.push(url);	
        window.location.reload();
    }

    changeValueSearch = (event) => {
        this.setState({
            searchQuery : (event.target.value)
        })
    }

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <header>
                    <div className="header-container">
                        <div className="container flex">
                            <h1 className="logo">
                                <a href="/" title="Mercado Libre">
                                    Mercado Libre
                                </a>
                            </h1>
                            <div className="search-tool">
                                <form onSubmit={this.handleSubmit} className="search-nav flex">
                                    <input  type="query" onChange={this.changeValueSearch} value={this.state.searchQuery}  placeholder={this.placeHolder}/>
                                    <button className="search-button" type="button" onClick={() => this.searchSubmit()} onKeyPress={this.handleKeyPress}><i></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
            </header>
        )
    }
}


export default withRouter(Header);