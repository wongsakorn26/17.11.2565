import { useState } from 'react'
import React from 'react'
const Cramer= () => {
    const [matrix, setMatrix] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]],
        );
      
      const handleChange = (row, column, event) => {
        let copy = [...matrix];
        copy[row][column] = +event.target.value;
        setMatrix(copy);
        console.log(matrix);

      };
    
      return (
        <div className="sheet">
          <table>
            <tbody>
              {matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((column, columnIndex) => (
                    <td key={columnIndex}>
                      <input
                        type="number"
                        onChange={e => handleChange(rowIndex, columnIndex, e)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      );
      
    };


export default Cramer