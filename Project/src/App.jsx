import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  document.addEventListener('click',()=>{
    setOut(false)
  })
  var AgePoints= 0;
  var OccPoints= 0;
  var ExpPoints= 0;
  var EduPoints= 0;
  var total=0;
  function calculate(){
    setloading(true)
    setTimeout(()=>{
      setloading(false)
      const age=parseInt(document.getElementsByClassName('age')[0].value)
    const occ=document.getElementsByClassName('occ')[0].value
    const exp=parseInt(document.getElementsByClassName('exp')[0].value)
    const edu=parseInt(document.getElementsByClassName('edu')[0].value)
    if (age > 21 && age < 27) {
      AgePoints = 100000;
    } else if (age > 27 && age < 31) {
      AgePoints = 80000;
    } else if (age > 30 && age < 34) {
      AgePoints = 50000;
    }
    switch (occ){
      case 'Engineer- Mechanical':
        OccPoints=200000
      case 'Engineer- Software':
        OccPoints=210000
      case 'Engineer- Electrical':
        OccPoints=200000
      case 'Engineer- Printing':
          OccPoints=80000
      case 'Doctor':
            OccPoints=350000
      case 'Nurse':
            OccPoints=250000
      case 'Consultant - Any kind':
              OccPoints=150000
      case 'Skilled worker':
                OccPoints=50000
      case 'Teacher':
        OccPoints=170000
      case 'Artist':
          OccPoints=200000
    }
    if (exp > 0 && exp < 5) {
      ExpPoints = 150000;
    } else if (exp > 5 && exp < 10) {
      ExpPoints = 250000;
    } else if (exp > 10 && exp < 16) {
      ExpPoints = 350000;
    } else if (exp > 15 && exp < 20) {
      ExpPoints = 400000;
    } else if (exp > 20) {
      ExpPoints = 450000;
    }
    if (edu > 5 && edu < 10) {
      EduPoints = 100000;
    } else if (edu > 10 && edu < 15) {
      EduPoints = 200000;
    } else if (edu > 15 && edu < 20) {
      EduPoints = 300000;
    } else if (edu > 20) {
      EduPoints = 400000;
    }
    var total = ExpPoints+EduPoints+OccPoints+AgePoints

    setAukaat(total.toLocaleString())
    setOut(true)
    },3000)

  }
  const [loading,setloading]=useState(false)
  const [out,setOut]=useState(false)
  const [aukaat,setAukaat]=useState(total)
  return (
    <>
{loading ? <div className='loading'></div> : null}
  <section id='main'>
    <div id='title'>
     {out? <div id='output'><h1 className='otext'>Your aukaat is Rs. {aukaat}</h1></div>: null}
      <h1 className='mtitle'>💰 Dahejometer 💰</h1>
      <p className='sub'>Ask for dahej with confidence!</p>
      <hr></hr>
        <input name='name' type='text' placeholder='Enter your name'></input><br></br><br></br>
        <input className='age' type='number' placeholder='Enter your age'></input><br></br><br></br>
        <select className='occ'>
        <option>Please select your occupation</option>
          <option>Engineer- Mechanical</option>
          <option>Engineer- Software</option>
          <option>Engineer- Electrical</option>
          <option>Engineer- Printing</option>
          <option>Doctor</option>
          <option>Nurse</option>
          <option>Consultant - Any kind</option>
          <option>Skilled worker</option>
          <option>Teacher</option>
          <option>Artist</option>
        </select><br></br><br></br>
        <input className='exp' type='number' placeholder='Work experience (Years)'></input><br></br><br></br>
        <input className='edu' type='number' placeholder='Years of formal education'></input><br></br><br></br>
        <button onClick={calculate} className='button'>Calculate</button>
   
    </div>
      </section>
    </>
  )
}

export default App
