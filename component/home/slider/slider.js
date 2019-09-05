import React, { Component } from 'react';
import {
  CHANGE_SLIDER_LEFT,
  CHANGE_SLIDER_RIGHT,
} from './actionType';
import {
  Display,
  Outer,
  PageBtnRight,
  PageBtnLeft,
  Element
} from './style'
import store from '../../../store'

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState().slider;
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    console.log(this.state)
    store.subscribe(this.handleStoreChange);
  }
  handleClickRight() {
    console.log(this.state.curPage)    
    const action = {
      type: CHANGE_SLIDER_RIGHT,
      page: this.state.curPage+1
    }
    store.dispatch(action);
  }

  handleClickLeft() {
    const action = {
      type: CHANGE_SLIDER_LEFT,
      page: this.state.curPage-1
    }
    console.log(action.page)
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState().slider); //这里变量名写错会导致无法更新到当前的state
  }

  render() {
    return (
      <div>
        <div style={{ width:"1430px" }}>
        <PageBtnLeft style={{display:(this.state.curPage===1)?'none':'block'}} onClick={this.handleClickLeft} />
          <Display>
            <Outer style={{ left: String((this.state.curPage - 1) * -1430) + 'px' }}>
              <Element style={{ backgroundColor:"blue"}}></Element>
              <Element style={{ backgroundColor:"black"}}></Element>
              <Element style={{ backgroundColor:"red"}}></Element>
            </Outer>
          </Display>
          <PageBtnRight style={{display:(this.state.curPage===this.state.totPage)?'none':'block'}} onClick={this.handleClickRight} />
          { String((this.state.curPage - 1) * -1430) }
        </div>
      </div>
    )
  }
}

export default Slider;