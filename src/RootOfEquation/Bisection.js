import { render } from "@testing-library/react";
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chart, Series } from 'devextreme-react/chart';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



const Parser = require('expr-eval').Parser;
class Bisection extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {XL:'',XR:'',ErrorApox:'',func:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)           
        
    }
    
    BisectionCalcFunction(XL,XR,ErrorApox,Funct)
    {
        
        const parser = new Parser();
        function fx(x)
        {
            let expr = parser.parse(Funct)
            console.log("fx = "+expr.evaluate({ x: (x) }))
            return expr.evaluate({ x: (x) })
        }

        var arr = [];
        var i = 0;
        var xl = parseFloat(XL);
        var xr = parseFloat(XR);
        var xm,xold,fxm;
        var ErrorApox_Answer=10000000; //set as default
        var inputerrorapox = parseFloat(ErrorApox)
        if(xl!=null && xr!=null && Funct!=null && inputerrorapox!=null){
        while(ErrorApox_Answer>inputerrorapox)
            {
                xm=(xr+xl)/2;
                fxm =Math.abs(fx(xm)) ; // cheaktrue
                if(fx(xm)*fx(xr)<0)
                {
                    xold=xl
                    xl=xm
                }
                if(fx(xm)*fx(xr)>0)
                {
                    xold=xr
                    xr=xm
                }
                ErrorApox_Answer = Math.abs((xm-xold)/xm)*100
            i++
            console.log("XL = "+xl)   //console log for debugging
            console.log("XM = "+xm)
            console.log("XR = "+xr)
            console.log("Errorapox = "+ErrorApox_Answer)
            arr.push({xm:xm.toFixed(6) , Error:ErrorApox_Answer.toFixed(6) , i:i, cheaktrue:fxm.toFixed(0)})
            

             //render(<div className="ans1">XM =   {xm.toFixed(6)} Errorapox =   {ErrorApox_Answer.toFixed(6)} at iteration #  {i}</div>)//calc wont re-render so i stuck at this
        }console.log(arr);
        render (
          <div><TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow> 
                  <TableCell align="right">i&nbsp;</TableCell>
                  <TableCell align="right">XM</TableCell>
                  <TableCell align="right">Error&nbsp;</TableCell>
                  <TableCell align="right">CheackTrue&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {arr.map((arr) => (
                  <TableRow
                    key={arr.i}
                    sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {arr.i}
                    </TableCell>
                    <TableCell align="right">{arr.xm}</TableCell>
                    <TableCell align="right">{arr.Error}</TableCell>
                    <TableCell align="right">{arr.cheaktrue}</TableCell>
                  
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer></div>
        );
        
            return (
              <Chart id="chart" dataSource={arr}>
                <Series
                  valueField="Error"  //y
                  argumentField="i" //x
                  name="Error"
                  type="line"
                  color="#ffaa66" />
              </Chart>
            );
            
              
          
        
        //return"XM="+xm+" at Iteration = "+i; //calc wont re-render so i stuck at this 
      }return(    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">ใส่ให้ครบนะครับพี่ชาย</Alert>
  
    </Stack>)
      
    }


    handleSubmit(event){
        const {XL,XR,ErrorApox,Funct} = this.state
        const xm = this.BisectionCalcFunction(XL,XR,ErrorApox,Funct)
        event.preventDefault()
        console.log("XL = "+XL)   //console log for debugging
        console.log("XR = "+XR)
        console.log("Function = "+Funct)
        console.log("Errorapox = "+ErrorApox)
        render(xm) //same here at line 53 i literally stuck at re-rendering
       

    }

    handleChange(event)
    {this.setState({
        [event.target.name] : event.target.value
        })
    }

    render(){
        return(

          <form onSubmit={this.handleSubmit}>
            <div >
                <h1 className="titlename">&emsp;Bisection Method&emsp;</h1>
              <div className="setbox">
                <label htmlFor='XL' >&emsp;XL :&emsp;</label>
                <input
                  name='XL'
                  placeholder='Starting XL'
                  value = {this.state.XL}
                  onChange={this.handleChange}
                  size='8'
                />
                <label htmlFor='XR'>&emsp;XR :&emsp;</label>
                <input
                  name='XR'
                  placeholder='Starting XR'
                  value={this.state.XR}
                  onChange={this.handleChange}
                  size='8'
                />
                <label htmlFor='ErrorApox'>&emsp;ErrorApox :&emsp;</label>
                <input
                  name='ErrorApox'
                  placeholder='ErrorApox'
                  value={this.state.ErrorApox}
                  onChange={this.handleChange}
                  size='5'
                />
              </div>
            </div>
              <p></p>
              <div className="setfunct">
              <label htmlFor='Funct'>&emsp;Funct :&emsp;</label>
              <input
                name='Funct'
                placeholder='Input function here!'
                value={this.state.Funct}
                onChange={this.handleChange}
                size='30'
              />
            </div>
            <p></p>
            <div className="calbutton">
            &emsp;<button>Calculate</button>
            </div>
            <p></p>
            <div className="calbutton">
              &emsp;<button>API</button>
            </div>
          </form>
          
        )
      }
    }



export default Bisection