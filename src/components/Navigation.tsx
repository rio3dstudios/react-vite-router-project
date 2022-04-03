import{Navbar,Nav,Container} from 'react-bootstrap';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  
import { Eletrodomesticos } from './Eletrrodomesticos';
import { Moveis } from './Moveis';
import { Telefonia } from './Telefonia';
import { TVeVideo } from './TVeVideo';

export function Navigation()
{
    return(

    <div>

     <div> 
       <Navbar bg="primary" variant="dark">
         <Container>
           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
           <Nav className="me-auto">
              <Nav.Link href="/Eletrodomesticos">Eletrodomesticos</Nav.Link>
              <Nav.Link href="/Moveis" >Moveis</Nav.Link>
              <Nav.Link href="/Telefonia">Telefonia</Nav.Link>
              <Nav.Link href="/TVeVideo">TV e Video</Nav.Link>
           </Nav>
        </Container>
        </Navbar>
    </div>

    <div>
      <BrowserRouter>
        <Routes>
            <Route path = "/Eletrodomesticos" element = {<Eletrodomesticos/>}/>
            <Route path = "/Moveis" element = {<Moveis/>}/>
            <Route path = "/Telefonia" element = {<Telefonia/>}/>
            <Route path = "/TVeVideo" element = {<TVeVideo/>}/>
        </Routes>
       </BrowserRouter>
    </div>

    <h1 style={{textAlign: 'center'}}>Buy More!</h1>

 </div>

)
}
