import {useLocation} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import styled from "styled-components";

const Detail = () => {
  

    const location = useLocation();
  
    const Box = styled.div`
      display:flex;
      flex-direction: column;
      justify-content: center;
      background-color: white;
      width:60%;
      height: 500px;
      border-radius: 8px;
    
    `
        const Container = styled.div`
          display:flex;
          
          justify-content: center;
          align-items: center;
          margin-top: 35px;
        
      `
    const Top = styled.div`
      color:black;
      display:flex;
      height: 20%;
      align-items: center;
      justify-content: space-between;
    
      

    `
    const Body = styled.div`
        color:black;
        height: 40%;
        width: 100%;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lightgreen;
        border-radius: 10px;
      `
    const TopLeft = styled.div`
              font-size: 40px;
             font-weight: 600;
        `
    const TopRight = styled.div`

          `

          
  return(
    <div>
      <Container>
        <Box>
            <Top>
                <TopLeft>{location.state.region} | {location.state.place}</TopLeft>  
                <TopRight>{location.state.date}</TopRight>
            </Top> 
            <Body>
            
                  미세먼지(㎍/㎥): {location.state.dust}<br/>
                  초미세먼지농도(㎍/㎥): {location.state.superdust}<br/>
                  오존(ppm): {location.state.o3}<br/>      
                  통합대기환경지수: {location.state.envpoint}<br/>
                  지수결정물질: {location.state.gas}<br/>
            
            </Body>
        </Box>
      </Container>
    </div>
  )

};

export default Detail;
