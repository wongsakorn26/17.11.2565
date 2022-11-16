import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import RootLink from './RootLink';
import {Route,Routes} from "react-router-dom";
import LinearLink from './LinearLink';



import FalsePosition from './RootOfEquation/FalsePosition';
import Bisection from './RootOfEquation/Bisection'
import GraphicalMethod from './RootOfEquation/GraphicalMethod'
import NewtonRaphson from './RootOfEquation/NewtonRaphson'
import OnePoint from './RootOfEquation/OnePoint'
import Secant from './RootOfEquation/Secant'

import Cramer from './LinearAlgebraicEquation/Cramer';
import GaussElimination from './LinearAlgebraicEquation/GaussElimination';
import Cholesky from './LinearAlgebraicEquation/Cholesky';
import GaussJordan from './LinearAlgebraicEquation/GaussJordan';
import Jacobi from './LinearAlgebraicEquation/Jacobi';
import LU from './LinearAlgebraicEquation/LU';
import MatrixInversion from './LinearAlgebraicEquation/MatrixInversion';

function App() {
  
  return(
  <>
    <Navbar /> 
    <div className="container">
      <Routes>
        <Route path='/RootOfEquation' element={<RootLink />} />
        <Route path='/LinearAlgebraicEquation' element={<LinearLink />} />
      </Routes>
    </div>
    <Routes>
      <Route path='FalsePosition' element={<FalsePosition/>} />
      <Route path='Bisection' element={<Bisection/>} />
      <Route path='GraphicalMethod' element={<GraphicalMethod/>} />
      <Route path='NewtonRaphson' element={<NewtonRaphson/>} />
      <Route path='OnePoint' element={<OnePoint/>} />
      <Route path='Secant' element={<Secant/>} />

      <Route path='Cramer' element={<Cramer/>} />
      <Route path='GaussElimination' element={<GaussElimination/>} />
      <Route path='Cholesky' element={<Cholesky/>} />
      <Route path='GaussJordan' element={<GaussJordan/>} />
      <Route path='Jacobi' element={<Jacobi/>} />
      <Route path='LU' element={<LU/>} />
      <Route path='MatrixInversion' element={<MatrixInversion/>} />
    </Routes>

    <Footer />
    
    

  </>
  
  )
}

export default App;
