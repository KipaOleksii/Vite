import intro from '../../../public/intro.png';
import styles from './Header.module.css';
import { useState, useEffect } from "react";
import { styled } from 'styled-components'

const HeaderContainer = styled.header ` 
height: 60px;
display: flex;
padding: 0 2rem;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #ccc;
background-color: #fafafa;
`

export default function Header() {
 const [now, setNow] = useState(new Date())

 useEffect (() => {
 const interval = setInterval(() => setNow(new Date()), 1000)
 return () => clearInterval(interval) 
 }, [])


  return (
    <HeaderContainer className={styles.header}>
    <img src={intro} alt="logo" className={styles.logo}/>

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}