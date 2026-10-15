import{BrowserRouter,Routes,Route}from "react-router-dom"
import { Home } from "./component/Home";
import { Name } from "./component/Name"; 
import { Welcome } from "./component/Welcome";
import { Counter } from "./component/Counter";
import { Parent } from "./component/Parent";
import { Conditional } from "./component/Conditional";
import { Switchcase } from "./component/Switchcase";
import { Loginform } from "./component/Loginform";
import { Form } from "./component/Form";
import { FruitList } from "./component/FruitList";
import { MainForm } from "./component/MainForm";
import { FetchData } from "./FetchData";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Welcome/>}/>
      <Route path="/name" element={<Name /> }/>
      <Route path="/counter" element={  <Counter/>}/>
      <Route path="/main" element={ <MainForm/> }/>
      <Route path="/fruitlist" element={ <FruitList/>}/>
      <Route path="/parent" element={ <Parent/> }/>
      <Route path="/conditional" element={<Conditional/> }/>
      <Route path="/switchcase" element={ <Switchcase/> }/>
      <Route path="/loginform" element={<Loginform/> }/>
      <Route path="/form" element={<Form/> }/>
      <Route path="/he" element={<> <Header/><Home  email="xyx" city="lucknow" /> <Footer/></>}/>
      <Route path="/data" element={<> <Header/><FetchData/> </>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
  
}
export default App;