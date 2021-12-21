import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementCount = () => {
      this.setState(prevState => {
          return {count: prevState.count + 1}
      })  
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Counter















































/*import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment(){*/
    /*
        /*this.state.count = this.state.count + 1 - ovo ne koristimo*/
        /*this.setState(
            {
            count: this.state.count + 1
        }, 
        () => {
            console.log('Callback value', this.state.count)
        }
    )*/ 
    /*this.setState((prevState, props) => ({
        count: prevState.count + 1
    }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={()=> this.incrementFive()}>Increment</button>
        </div>
        )
    }
}

export default Counter */
