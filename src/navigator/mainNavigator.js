import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView988039Navigator from '../features/CalendarView988039/navigator';
import CopyOfSignUp2388036Navigator from '../features/CopyOfSignUp2388036/navigator';
import CopyOfSignIn2488035Navigator from '../features/CopyOfSignIn2488035/navigator';
import SignIn2487990Navigator from '../features/SignIn2487990/navigator';
import SignUp2387969Navigator from '../features/SignUp2387969/navigator';
import BlankScreen187968Navigator from '../features/BlankScreen187968/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView988039: { screen: CalendarView988039Navigator },
CopyOfSignUp2388036: { screen: CopyOfSignUp2388036Navigator },
CopyOfSignIn2488035: { screen: CopyOfSignIn2488035Navigator },
SignIn2487990: { screen: SignIn2487990Navigator },
SignUp2387969: { screen: SignUp2387969Navigator },
BlankScreen187968: { screen: BlankScreen187968Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
