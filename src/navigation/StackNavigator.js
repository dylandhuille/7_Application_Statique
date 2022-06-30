import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Realisation from '../screens/Realisation'
import Moreinfo from '../screens/Moreinfo'

const Stack = createNativeStackNavigator();

export default function StackNavigator(route) {

    return (
        <Stack.Navigator >
            <Stack.Screen name="Realisations" component={Realisation} />

            <Stack.Screen name="Moreinfo" component={Moreinfo} />

        </Stack.Navigator>
    );
}

