import React, { Component } from 'react'

class QuizEnd extends Component{
  handlerResetClick(){
    this.props.resetClickHandler()
  }
  render() {
    return(
      <div>
        <p>Thanks for playing!</p>
        <a href='' onClick={this.handlerResetClick.bind(this)}>Reset Quiz</a>
      </div>
    )
  }
}

export default QuizEnd
