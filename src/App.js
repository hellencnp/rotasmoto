import React from 'react';
import './App.css';
import IndexMenu from './componentes/Index/IndexMenu.jsx';
import SecondMenu from './componentes/SegundaPagina/SecondTierMenu.jsx';
import ThirdMenu from './componentes/TerceiraPagina/ThirdTierMenu.jsx';
import FourthMenu from './componentes/QuartaPagina/FourthTierMenu.jsx';
import Index from './componentes/Index/Index.jsx'
import Suzuki from './componentes/PrimeiraPagina/Suzuki.jsx';
import Hamaya from './componentes/PrimeiraPagina/Hamaya.jsx';
import Honda from './componentes/SegundaPagina/Honda.jsx';
import Lambreta from './componentes/PrimeiraPagina/Lambreta.jsx';
import Harley from './componentes/PrimeiraPagina/Harley.jsx';
import City from './componentes/SegundaPagina/City.jsx';
import Sport from './componentes/SegundaPagina/Sport.jsx';
import Scooter from './componentes/SegundaPagina/Scooter.jsx';
import OffRoad from './componentes/SegundaPagina/OffRoad.jsx';
import Trail from './componentes/TerceiraPagina/Trail.jsx';
import Biz from './componentes/TerceiraPagina/Biz.jsx';
import Cgfan from './componentes/TerceiraPagina/Cgfan.jsx';
import CgTitam from './componentes/TerceiraPagina/Cgtitan.jsx';
import Pop from './componentes/QuartaPagina/Pop.jsx';
import Painel from './componentes/QuartaPagina/Painel.jsx';
import Freios from './componentes/QuartaPagina/Freios.jsx';
import Tanque from './componentes/QuartaPagina/Tanque.jsx';
import Carenagem from './componentes/QuartaPagina/Carenagem.jsx';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Rodas from './componentes/QuartaPagina/Rodas.jsx';


function App() {
  return (
    <div>
       <Router>
         <Switch>
           <Route exact path="/">
                <IndexMenu/>
                <Index/>
           </Route>
           <Route exact path="/suzuki">
                <IndexMenu/>
                <Suzuki/>
           </Route>
           <Route exact path="/hamaya">
                <IndexMenu/>
                <Hamaya/>
           </Route>
           <Route exact path="/honda">
           <SecondMenu/>
                <Honda/>
           </Route>
           <Route exact path="/lambreta">
                <IndexMenu/>
                <Lambreta/>
           </Route>
           <Route exact path="/harley">
           <IndexMenu/>
                <Harley/>
           </Route>
           <Route exact path="/honda/City">
           <ThirdMenu/>
                <City/>
           </Route>
           <Route exact path="/honda/Sport">
                <SecondMenu/>
                <Sport/>
           </Route>
           <Route exact path="/honda/Scooter">
                <SecondMenu/>
                <Scooter/>
           </Route>
           <Route exact path="/honda/OffRoad">
                <SecondMenu/>
                <OffRoad/>
           </Route>
           <Route exact path="/honda/Trail">
           <SecondMenu/>
            
                <Trail/>
           </Route>
           <Route exact path="/honda/city/pop">
                <ThirdMenu/>
                <Pop/>
           </Route>
           <Route exact path="/honda/city/biz">
                <ThirdMenu/>
                <Biz/>
           </Route>
           <Route exact path="/honda/city/cgfan">
                <ThirdMenu/>
                <Cgfan/>
           </Route>
           <Route exact path="/honda/city/cgtitan">
                <FourthMenu/>
                <CgTitam/>
           </Route>
           <Route exact path="/honda/city/cgtitan/painel">
                <FourthMenu/>
                <Painel/>
           </Route>
           <Route exact path="/honda/city/cgtitan/freios">
                <FourthMenu/>
                <Freios/>
           </Route>
           <Route exact path="/honda/city/cgtitan/tanque">
                <FourthMenu/>
                <Tanque/>
           </Route>
           <Route exact path="/honda/city/cgtitan/rodas">
                <FourthMenu/>
                <Rodas/>
           </Route>
           <Route exact path="/honda/city/cgtitan/carenagem">
                <FourthMenu/>
                <Carenagem/>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
