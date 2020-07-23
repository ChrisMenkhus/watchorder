import React from 'react';
import styled from 'styled-components';



const GridDisplay = styled.section`
  margin: 0; padding: 0;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-around;
  box-sizing: border-box;
  background-color: rgb(15,15,15);
  
`;

const GridColumn = styled.div`
  flex: 25%;
  max-width: 25%;

  @media (max-width: 1000px) {
    flex: 50%;
    max-width: 50%;
  }

  @media (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

const ResponsiveFlex = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  overflow: hidden;
`;

const GridItemStyle = styled.div`
  width: auto;
  height: 32rem;
  font-size: 5rem;
  // margin: 0.1rem;
  // background-image: url(${p => p.poster ? p.poster : 'none'});
  // background-size: cover;
  // vertical-align: middle;
  -webkit-filter: grayscale(70%);
  cursor: ${p => p.redirect ? 'pointer' : 'default'};
  align-content: center;
  justify-content: center;

  .bgimg {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(${p => p.poster ? p.poster : 'none'});
    background-size: cover;
    vertical-align: middle;
    vertical-align: top;

    transition: all 1s;
  }

  transition: all 0.3s;
  &:hover {
    -webkit-filter: grayscale(0%);
    padding-bottom: -4rem;
    .bgimg {
    transform:scale(1.1);


    }
    #hoverBar {
      opacity: 1;
    }
  }

  #hoverBar {
    user-select: none;
    position: absolute;
    height: 30%;
    width: 100%;
    background-color: rgba(25,25,25,0.8);
    bottom: 0;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: all 0.3s;

  }

  h1 {
    padding: 0;
    margin: auto;
    width: fit-content;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.105em;
    color: white;
    text-transform: uppercase;
  }

  #details {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    h1 {
      user-select: none;
      display: inline;
      width: fit-content;
      margin: 0; padding: 0;
      font-weight: 100;
      text-transform: lowercase;
      text-transform: capitalize;
    }
    #left {
      width: 100%;
      display: flex;
      h1 {
      margin-right: 0;
      margin-left: auto; 
      font-size: 1rem;
      }
    }
    #right {
      width: 100%;
      display: flex;

      h1 {
      margin-right: auto;
      margin-left: 0; 
      font-size: 0.7rem;
      }
    }
    #center {
      display: inline;
      position: relative;
      
      width: 2px;
      background-color: white;
      height: 2rem;
      color: white;
      margin-left: 0.5rem; margin-right: 0.5rem;
    }
`;

const Style = styled.div`
overflow: hidden;
`;

const GridItem = (p) => {
  return(
  <Style onClick={()=>{ if (typeof p.redirect !== 'undefined') p.redirect() }}>
  <GridItemStyle poster={p.poster} redirect={p.redirect ? true : false}>
    <div className='bgimg'>
    </div>

    <div id='hoverBar'>

    <h1 id='title'>{p.centertext}</h1>

    <div id='details'>

    <div id='left'>
    <h1>{p.lefttext}</h1>
    </div>

    <div id='center'/>

    <div id='right'>
      <h1>{p.righttext}</h1>   
    </div>        

    </div>
    </div>
  </GridItemStyle>
  </Style>
)};

export {GridDisplay, GridColumn, GridItem, ResponsiveFlex};