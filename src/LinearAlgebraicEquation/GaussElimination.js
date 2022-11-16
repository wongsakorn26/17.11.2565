import React, { useState } from 'react';

import { Container,Form,Button,Table} from 'react-bootstrap';

function GaussElimination(){
    const [val,setVal]=useState([]);
    const [show_total,set_show_total]=useState([])
    const [size_array,set_size]=useState(0);
  
    const [show_martix_web,set_martix_web]=useState([]);
  
     const handleAdd=(e)=>{
      var array = [[]]
      for(var i=0;i<Number(e.target.value);i++)
      {
        array[i]= [];
        console.log(array);
        for(var k=0;k<Number(e.target.value)+1;k++)
        {
          array[i][k]= `${i} ${k}`;
        }
        setVal(array)
        set_size(Number(e.target.value))
  
      }
     }
     
  
     const cal_test=()=>{
  
      var a = [[]]
      var k=0,i=0,j=0
      for(i=0;i<size_array;i++)
      {
        a[i]= [];
        for(k=0;k<size_array+1;k++)
        {
            a[i][k] = val[i][k]
        }
  
      }
  
     var x = []
  
      for(k=0;k<size_array;k++){
          for(i=k+1;i<size_array;i++){
              var temp = a[i][k]/a[k][k]
              for(j=k+1;j<=size_array;j++){
                  a[i][j] = a[i][j] - temp*a[k][j]
              }
          }
      }
      
      for(i=size_array-1;i>=0;i--){
          x[i] = a[i][size_array]
          for(j=i+1;j<size_array;j++){
              x[i] = x[i]-a[i][j]*x[j]
          }
          x[i] = x[i]/a[i][i]
      }
      
      for(i=0;i<size_array;i++){
          console.log(x[i])
     
      }
      set_show_total(x)
     
      var show_web =[[]]
      for(i=0;i<size_array;i++)
      {
        show_web[i]= [];
        for(k=0;k<size_array+1;k++)
        {
          if(k<size_array-1)
          {
          show_web[i][k] = `(${val[i][k]} *(${x[k]}))+`
          }
          else if(k<size_array)
          {
            show_web[i][k] = `(${val[i][k]} *(${x[k]}))`
          }
          else if(k===size_array){
            show_web[i][k] = ` = ${val[i][k]}`
          }
        }
  
  
      }
      console.log(show_web)
      set_martix_web(show_web)
  
      
    }
  
     const handleChange=(rowIndex, columnIndex, e)=>{
      val[rowIndex][columnIndex] =  Number(e.target.value);
     }
  
  return(
      <>
      <h1>Gauss_Elimination</h1>
      <Container>
      <Form>
             <Form.Group className="mb-3">
                 <Form.Control size="lg" type="text" name = "dimentions" onChange={handleAdd} placeholder="Input Number of Dimentions" />
             </Form.Group>
         </Form>
      <br></br>
      <br></br>
      
      <Table responsive="sm">
            <tbody>
      {val.map((row, rowIndex) => (
              <tr>
                {row.map((column, columnIndex) => (
                  <td >
                    <input id={column} onChange={e => handleChange(rowIndex, columnIndex, e)}/>
                  </td>
  
                ))}
              </tr>

            ))}

</tbody>
    </Table>


                <br></br>
               <Button onClick={()=>cal_test()}>Cal</Button>
               </Container>
               {show_total.map((total,i)=>(
                <h1 id={i}>X{i+1}&nbsp; &nbsp;{total}</h1>
  
               ))
  
               
               }
  
              {show_martix_web.map((show_martix,count)=>(
                <h1 id={count}>แถวที่{count+1}&nbsp; &nbsp; {show_martix}</h1>
  
               ))
  
               
               }
  
               
  
      
      </>
  );
  }
  
  
  
export default  GaussElimination;