import React , {Component, useContext} from "react";
import { StyleSheet , Text , View } from "react-native";
import { MyContext } from "../context";
import { Button } from "react-native-elements";
import { MainLogo } from "../utils/tools";

const StageTwo = () =>{
    const context = useContext(MyContext);
    return(
        <>
            <MainLogo/>
        
            <Text style={{marginTop :30 , fontWeight : '400' , color : 'black' , fontSize : 20 }}>
                The looser is
            </Text>
            <Text style ={{marginTop : 30 , fontSize : 30 , color : 'black' , fontWeight : '600'}}>{context.state.result}</Text>
            <Button
            buttonStyle={styles.button}
            title="Try Again"
            onPress={()=> context.getNewLooser()}
            />
            <Button
            buttonStyle={styles.button}
            title="Start Over"
            onPress={()=> context.resetGame()}
            />
        </>

    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor : '#DB3EB1',
        marginTop : 20
    }
})

export default StageTwo;
