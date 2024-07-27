import React , {Component} from "react";

const MyContext = React.createContext();

class MyProvider extends Component{
    state = {
        stage : 1 ,
        players : [],
        result : ''
    }
    addPlayerHandler = (name) => {
        this.setState((prevState , props)=>({
            players:[
                ...prevState.players,

            ]
        }))

    }

    render(){
        return(
            <>
            <MyContext.Provider value={{
                state : this.state , 
                addPlayer : this.addPlayerHandler
            }}>
                {this.props.children}

            </MyContext.Provider>
            
            </>
        )
    }
}

export {
    MyProvider , MyContext
}