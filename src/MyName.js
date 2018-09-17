import React, { Component } from 'react';
/*
class MyName extends Component {
    
    //static defaultProps = {
    //    name: 'Default'
    //}
    
    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
            </div>
        );
    }
}

MyName.defaultProps = {
    name: 'Default'
};
*/
const MyName = ({ name }) => {
    return (
      <div>
        안녕하세요! 제 이름은 {name} 입니다.
      </div>
    );
  };

export default MyName;