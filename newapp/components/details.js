import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';


const Details = (props) => {
    console.log("Inside details component")
    return (
        <View>
            <Text>
                Title : {props.clickeddata.title}
            </Text>
            <TouchableOpacity 
                style = {{}}
            onPress = {props.changeclicked}>
                <Text>Back</Text>
            </TouchableOpacity>

            <Text>
                Movie Description: {props.clickeddata.overview}
            </Text>
            <Text>
                Release On: {props.clickeddata.release_date}
            </Text>
            <Text>
                Rating: {props.clickeddata.vote_average}
            </Text>
            
            

                
        

        </View>
    )
}

export default Details


