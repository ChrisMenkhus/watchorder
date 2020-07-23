import React, {useState} from 'react';
import styled from 'styled-components';
import {MCU_list, MCU_list_Chrono, Wizarding_World, Skywalker_Saga} from './Data/MovieLists.js' 
import Nav from './Organisms/Nav.js'
import HomePage from './Pages/HomePage.js'
import MovieListPage from './Pages/MovieListPage.js'


const Style = styled.div`

`;



function App() {
  const [activePage, setActivePage] = useState('Home');

  return (
    <Style>
      <Nav activePage={activePage} setActivePage={setActivePage} />
      
      {activePage === 'Home' ? <HomePage setActivePage={setActivePage}/>
      : activePage === 'Infinity Saga' ? <MovieListPage movielist={MCU_list.movies}/>
      : activePage === 'Infinity Saga - Chronological' ? <MovieListPage movielist={MCU_list_Chrono.movies}/> 
      : activePage === 'Wizarding World' ? <MovieListPage movielist={Wizarding_World.movies}/>
      : activePage === 'Skywalker Saga' ? <MovieListPage movielist={Skywalker_Saga.movies}/>
      : null }
    </Style>
  );
}

export default App;
