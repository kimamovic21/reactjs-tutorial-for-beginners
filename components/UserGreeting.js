import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

    return this.state.isLoggedIn && <div>Welcome Kerim</div>
      /* return (
        this.state.isLoggedIn ? 
        (<div>Welcome Kerim</div> ):
        (<div>Welcome guest</div> )
       )*/

       /* let message // varijabla koja pohranjuje elemente koji ce biti renderovani 
        if (this.state.isLoggedIn) {
            message = <div>Welcome Kerim</div>
        } else {
            message = <div>Welcome guest</div>
        }

        return <div>{message}</div>*/
        
       /* if (this.state.isLoggedIn) {
            return <div>Welcome Kerim</div> 
        } else {
            return <div> Welcome guest </div>
        }*/
        /*return (
            <div>
                <div>Welcome Kerim</div>
                <div>Welcome Guest</div>
            </div>
        )*/
    }
}

export default UserGreeting
