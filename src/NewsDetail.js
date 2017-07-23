import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Button from './Button';

const NewsDetail = ({news}) => {
    const {title,author,urlToImage,url}= news;
    const {
        headerContentStyle, 
        imageStyle,
        headerTextStyle,
        cardStyle,
        cardsectionStyle
    }= Styles;

    return(
        <View style={cardStyle}>
             <View style={cardsectionStyle}> 
                <View style = {headerContentStyle}>
                    <Text style= {headerTextStyle}>{title} </Text>
                    <Text>{author}</Text>
                </View>
             </View>
              
             <View style={cardsectionStyle}> 
                   <Image style={imageStyle}
                        source={{uri: urlToImage}}
                   />
            </View>

            <View style={cardsectionStyle}> 
                <Button onPress={() =>Linking.openURL(url)} />
            </View>

        </View>

    );

};

const Styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    cardStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
cardsectionStyle:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent:'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export default NewsDetail;