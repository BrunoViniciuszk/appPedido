/**
 * @format
 */
import React, {useState, useEffect} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import CardProvider from './app/ui/provider/CartProvider';
import ProductProvider from './app/ui/provider/ProductProvider';

const tema = {

    ...DefaultTheme,
    dark:true, 
    colors:{
        ...DefaultTheme.colors,
        primary: 'black'
    }, 
}

const tema2 = {

    ...DefaultTheme,
    dark:true, 
    colors:{
        ...DefaultTheme.colors,
        primary: 'red'
    }
}

export default function Main(){

    /* const [value, setValue] = useState(1);

    useEffect(()=> {
        setTimeout(()=> {setValue(2);
        },3000)

        
    }, []) */

    
    return(

        <PaperProvider theme={tema2}>

            <ProductProvider>
                <CardProvider>
                    <App/>
                </CardProvider>
            </ProductProvider>

        </PaperProvider>
        
    )
}

AppRegistry.registerComponent(appName, () => Main);
