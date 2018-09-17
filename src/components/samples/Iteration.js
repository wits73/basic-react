import React, { Component } from 'react';

class Iteration extends Component {
    state = {
        names:['Avangers','Ultron Age','Infinity War'],
        name:''
    }
    
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleInsert = () => {
        this.setState({
            names:this.state.names.concat(this.state.name),
            name:''
        })
    }

    handleRemove = (index) => {
        const{names} = this.state;
        this.setState({
            //names:[...names.slice(0,index), ...names.slice(index + 1, names.length)]
            names: names.filter((item, i) => i !== index)
        });
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (<li 
                key={index}
                onDoubleClick={()=>this.handleRemove(index)}>
            {name}</li>)
        );

        return (
            <div>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <button onClick={this.handleInsert}>Adding</button>
                <ul>
                    {nameList}       
                </ul>
            </div>
        );
    }
}

export default Iteration;