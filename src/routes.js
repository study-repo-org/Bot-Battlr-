import App from "./App";

import Bot from './Pages/Bot';
import BotDetails from './Pages/BotDetails';
import BotAmy from './components/BotAmy';

const routes = [
   {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/', element: <Bot/>
      },
      {
        path:'/botDetails/:id', element:<BotDetails/>
      },
      {
        path:'/botArmy', element:<BotAmy/>
      }
    ]

  }
]

export default routes