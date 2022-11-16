import { render } from "@testing-library/react";
import React,{ Component } from 'react'
import { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as math from "mathjs";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Parser = require('expr-eval').Parser;


class NewtonRaphson extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {XL:'',ErrorApox:'',func:'',Arr:[]}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)    
    }

    NewtonraphsonCalcFunction(XL,ErrorApox,Funct)
    {
        const parser = new Parser();
        function fx(x)
        {
            let expr = parser.parse(Funct)
            console.log("fx = "+expr.evaluate({ x: (x) }))
            return expr.evaluate({ x: (x) })
        }
        var arr=[];
        var xn;
        
        var data={xi:0,err:"",count:0};
        var x = parseFloat(XL);;
        
        data.err = 1000000;
        var ErrorApox_Answer = parseFloat(ErrorApox)
        if(XL!=null && Funct!=null && ErrorApox!=null){
            while(data.err>ErrorApox_Answer)
                {
                data.xi = x;
                var yyy = fx(x);
                var xxx = math.derivative(Funct, 'x').evaluate({x: (x)})
                xn = x-(yyy/xxx);
                data.err = Math.abs((xn-x)/xn)*100
                x = xn;
                arr=this.state.Arr;
                arr.push({xi:data.xi,err:data.err,count:data.count});
                console.log(arr)
                data.count++
                //render("XM = "+data.xm.toFixed(6)+" Errorapox = "+data.err.toFixed(6)+" at iteration #"+data.count)//calc wont re-render so i stuck at this
            }
            render (
            <div>
                <p className="texttable">Table</p>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Count</TableCell>
                    <TableCell align="right">Error</TableCell>
                    <TableCell align="right">XI</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {arr.map((data) => (
                    <TableRow
                    key={data.count}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {data.count}
                    </TableCell>
                    <TableCell align="right">{data.err}</TableCell>
                    <TableCell align="right">{data.xi}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
            ) //calc wont re-render so i stuck at this
        }return(    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">ใส่ให้ครบนะครับพี่ชาย</Alert>

    </Stack>)
    
    }


    handleSubmit(event){
        const {XL,ErrorApox,Funct} = this.state
       
        const xm = this.NewtonraphsonCalcFunction(XL,ErrorApox,Funct)
        event.preventDefault()
        console.log("XI = "+XL)   //console log for debugging
        console.log("Function = "+Funct)
        console.log("Errorapox = "+ErrorApox)
        render(xm) //same here at line 53 i literally stuck at re-rendering
       

    }

    handleChange(event){
      this.setState({[event.target.name] : event.target.value});
      this.setState({Arr:[]});
    }
    
    render(){
        return(
          <div>
            <form onSubmit={this.handleSubmit}>
            <div className="setbox">
                <h1 className="titlename">&emsp;Newton-Raphson method&emsp;</h1>
         
              <label htmlFor='LX' >&emsp;XI :&emsp;</label>
              <input
                className="XLfield"
                name='XL'
                placeholder='XI'
                value = {this.state.XL}
                onChange={this.handleChange}
                size='16'
              />
              <label htmlFor='ErrorApox' >&emsp;Error :&emsp;</label>
              <input
                className="Errorfield"
                name='ErrorApox'
                placeholder='ErrorApox'
                value={this.state.ErrorApox}
                onChange={this.handleChange}
                size='17'
              />
              </div>

              <p></p>
              <div className="setbox">
              <label htmlFor='Funct' >&emsp;Funct :&emsp;</label>
              <input
                className="Funcfield"
                name='Funct'
                placeholder='FUNCTION'
                value={this.state.Funct}
                onChange={this.handleChange}
                size='30'
              />
            </div>
            <p></p>
            <div className="setbox">
            &emsp;<button >Calculate</button>
            </div>
          </form>
          </div>
        )
      }
    }

export default NewtonRaphson