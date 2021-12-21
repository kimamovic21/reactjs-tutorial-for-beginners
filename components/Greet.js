import React from "react" //funkcionalna komponenta

/* function Greet (){
    return <h1>Hello Kerim</h1>
} */

//export const Greet = () => <h1>Hello Kerim</h1>
const Greet = (props) => {
    const {name, heroName} = props
    return (
     <div>
        <h1>
            Hello {name} a.k.a. {heroName}
        </h1>
    </div>
    )
}
export default Greet