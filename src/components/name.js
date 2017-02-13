import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Name extends Component{
    render(){
        if(!this.props.name) {
            return(
                <h1></h1>
            )
        }
        return(
            <div>
                <h3>Title: {this.props.name.title}</h3>
            </div>
        );
    }
}

