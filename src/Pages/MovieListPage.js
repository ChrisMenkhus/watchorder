import React from 'react';
import styled from 'styled-components';
import {GridDisplay, GridColumn, GridItem, ResponsiveFlex} from '../Organisms/Grid.js'
import Poster from '../Img/Posters/MCU/IronMan2008.png';


const Style = styled.div`

`;

const MoveListPage = (p) => {
    let length = p.movielist.length;
    let n = 0;

    let row1 = [];
    let row2 = [];
    let row3 = [];
    let row4 = [];


    console.log(length)
    p.movielist.map((result, i)=>{
        n = n+1;
        if (n === 5) {
            n = 1;
        }

        if (n === 1) {
            row1.push(result);
        }
        else if (n === 2) {
            row2.push(result);
        }
        else if (n === 3) {
            row3.push(result);
        }
        else if (n === 4) {
            row4.push(result);
        }
    })

    return (
    <Style>

      <GridDisplay>
        <ResponsiveFlex>

        {p.movielist.map((m, i)=>{
            return(
            <GridItem 
            poster={m.poster} 
            centertext={m.title}
            lefttext={m.year} 
            // righttext='MCU'
            />
            )
        })}

        </ResponsiveFlex>


      </GridDisplay>
    </Style>
    )
}

export default MoveListPage;

