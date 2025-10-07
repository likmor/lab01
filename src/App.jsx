import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard';
import {people} from './module-data'
import ProfileCardWrapper from './components/ProfileCardWrapper';

function App() {
  return (
    <>
    <ProfileCardWrapper data = {people} columnNumber={3}></ProfileCardWrapper>
      {/* {people.map(person => <ProfileCard 
          name = {person.name} 
          email = {person.email} 
          birthDate = {person.birthDate} 
          phone = {person.phone}
          />)} */}
    </>
  )
}

export default App
