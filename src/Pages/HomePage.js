import React from 'react';
import styled from 'styled-components';
import {GridDisplay, GridColumn, GridItem} from '../Organisms/Grid.js'
import poster from '../Img/Posters/MCU/AvengersInfinityWar2018.jpg';
import poster2 from '../Img/Posters/MCU/CaptainMarvel2019.png';
import poster3 from '../Img/Posters/HP/HarryPotterandtheDeathlyHallowsPart2.png';
import poster4 from '../Img/Posters/SW/EpisodeIVANewHope.png';




const Style = styled.div`
  background-color: rgb(15,15,15);
  height: 95vh;
`;

const HomePage = (p) => {
    return (
    <Style>
      <GridDisplay>
        <GridColumn>
          <GridItem 
          poster={poster} 
          centertext='Infinity Saga by Release' 
          lefttext='2008 - 2019' 
          righttext='release order'
          redirect={()=>p.setActivePage('Infinity Saga')} />
        </GridColumn>
        <GridColumn>
          <GridItem 
          poster={poster2} 
          centertext='Infinity Saga - Chronological' 
          lefttext='2008 - 2019' 
          righttext='chronological order'
          redirect={()=>p.setActivePage('Infinity Saga - Chronological')} 
          />
        </GridColumn>
        <GridColumn>
          <GridItem 
          poster={poster3} 
          centertext='Wizarding World' 
          lefttext='2001 - ongoing' 
          righttext='chronological order'
          redirect={()=>p.setActivePage('Wizarding World')} 
          />
        </GridColumn>
        <GridColumn>
          <GridItem 
          poster={poster4} 
          centertext='Skywalker Saga' 
          lefttext='1977 - 2019' 
          righttext='release order'
          redirect={()=>p.setActivePage('Skywalker Saga')} 
          />
        </GridColumn>


      </GridDisplay>
    </Style>
    )
}

export default HomePage;