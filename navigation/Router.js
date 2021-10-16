import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import InitScreen from '../screens/InitScreen';
import PromotionDetailScreen from '../screens/PromotionDetailScreen';
import WalletScreen from '../screens/WalletScreen';

const MainStack = createStackNavigator();


export default Main = () => {

    const logged = false;
    if(logged){
        return (
            <MainStack.Navigator>
                <MainStack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                <MainStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
                <MainStack.Screen options={{headerShown: false}} name="Notification" component={NotificationScreen} />
                <MainStack.Screen options={{headerShown: false}} name="Init" component={InitScreen} />
                <MainStack.Screen options={{headerShown: false}} name="PromotionDetail" component={PromotionDetailScreen} />
                <MainStack.Screen options={{headerShown: false}} name="Wallet" component={WalletScreen} />
            </MainStack.Navigator>
        );
    }
    else{
        return (
            <MainStack.Navigator>
                <MainStack.Screen options={{headerShown: false}} name="Init" component={InitScreen} />
                <MainStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
                <MainStack.Screen options={{headerShown: false}} name="Notification" component={NotificationScreen} />
                <MainStack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                <MainStack.Screen options={{headerShown: false}} name="PromotionDetail" component={PromotionDetailScreen} />
                <MainStack.Screen options={{headerShown: false}} name="Wallet" component={WalletScreen} />
            </MainStack.Navigator>
        );
    }
}



