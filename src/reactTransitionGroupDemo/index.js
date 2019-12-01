import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.scss';

export default class ReactTransitionGroupDemo extends Component {
  state = {
    items: [111111],
    status: false
  }

  handleAdd = () => {
    const newItem = Math.floor(Math.random() * 100000);
    this.setState(preState => {
      const list = preState.items.filter(val => val)
      list.push(newItem);
      return {
        items: [...list]
      }
    })
  }

  handleDel = (val) => () => {
    this.setState(preState => {
      const list = preState.items;
      list.splice(list.indexOf(val), 1, false);
      return {
        items: list
      }
    })
  }

  render () {
    const { items } = this.state;
    return (
      <div className='react-transition-box'>
        <button onClick={this.handleAdd}>add</button>
          <ul>
            {
              items.map((val, index) => {
                return (
                  <CSSTransition
                    key={index}
                    classNames='example'
                    timeout={2000}
                    in={Boolean(val)}
                    appear={true}
                    unmountOnExit
                  >
                    <li onClick={this.handleDel(val)}>{val}</li>
                  </CSSTransition>
                )
              })
            }
          </ul>
      </div>
    );
  }
}
