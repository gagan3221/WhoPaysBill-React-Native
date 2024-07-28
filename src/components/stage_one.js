import React , {useContext} from "react";
import { StyleSheet , View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import {Input , Button , ListItem , Text} from "react-native-elements";
import { MyContext } from "../context";

const StageOne = () =>{
    const context = useContext(MyContext);
    console.log(context);
    const renderPlayers = () =>(
        context.state.players.map((item , idx)=>(
            <ListItem
            key={idx}
            bottomDivider
            style={{width : '100%'}}
            onLongPress={()=> context.removePlayer(idx)}
            >
                <ListItem.Chevron/>
                <ListItem.Content>
                    <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>

            </ListItem>
        ))
    )

    return(
        <>
        <Formik
        initialValues={{player : ''}}
        validationSchema={Yup.object({
            player : Yup.string()
            .min(3 , 'Must be more than 3 characters')
            .max(15 , 'Must be less than 15 characters')
            .required('Sorry,The name is required')
        })}
        onSubmit={(values , { resetForm})=>{
            context.addPlayer(values.player)
            resetForm();

        }}>
            {
                ({handleChange , handleBlur , handleSubmit , values , touched , errors})=>(
                    <>
                    <Text>Who pays the bill</Text>
                    <Input
                    placeholder="Add names here"
                    leftIcon = {{type:'antdesign',name:'adduser'}}
                    inputContainerStyle={{
                        marginHorizontal : 50 ,
                        marginTop : 50
                    }}
                    renderErrorMessage={errors.player && touched.player}
                    errorMessage={errors.player}
                    errorStyle={{
                        marginHorizontal : 50
                    }}


                    onChangeText={handleChange('player')}
                    onBlur={handleBlur('player')}
                    value={values.player}/>
                    
                    <Button title="Add a Player"
                    onPress={handleSubmit}
                    buttonStyle = {styles.button}
                    />
                    </>
                )
            }

        </Formik>
        <View style = {{padding : 20 , width : '100%'}}>
            {
                context.state.players && context.state.players.length > 0 ?
                <>
                <Text>
                    List of players
                </Text>
                {renderPlayers()}
                <Button title="Get the looser"
                    onPress={()=> context.next()}
                    buttonStyle = {styles.button}
                
                />
                </> 
                :null
            }
        </View>
        </>

    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor: '#DB3EB1',
        marginTop : 30

    }
})

export default StageOne;
