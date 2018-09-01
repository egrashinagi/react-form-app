import React from 'react';
import {MyComp} from './my-comp.jsx'
import {Card} from './card.jsx';

export class App extends React.Component {
   render () {
       return(
           <div>
               {/*<MyComp />*/}
               <Card />
           </div>
       )
   }
}
