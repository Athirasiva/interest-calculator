import { Button, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [interest, setInterest] = useState(0)
  const [Amount, setAmount] = useState('')
  const [rot, setRot] = useState('')
  const [timePeriod, setTimeperiod] = useState('')
  const [isAmountValid, setIsAmountValid]= useState(true)
  const [isRotValid, setIsRotValid ] = useState(true)
  const [isTimePeriodValid, setIsTimeValid] = useState(true)

  const validateInput = (e) =>{
    // destructuring
     const {value,name} = e.target
     if(!!value.match(/^[0-9]*.?[0-9]+$/)){
        if(name=='amount'){
          setAmount(value)
          setIsAmountValid(true)
        }else if(name == 'interest'){
          setRot(value)
          setIsRotValid(true)
        }else{
          setTimeperiod(value)
          setIsTimeValid(true)
        }
     }else{
        if (name=='amount') {
          setAmount(value)
          setIsAmountValid(false)
        }
        else if(name == 'interest')
        {
          setRot(value)
          setIsRotValid(false)
        }
        else {
          setTimeperiod(value)
          setIsTimeValid(false)
        }
     }
  }
  console.log(Amount);
  console.log(isAmountValid);

   const handleReset = () => {
    setAmount('')
    setRot('')
    setTimeperiod('')
    setIsAmountValid(true)
    setIsRotValid(true)
    setIsTimeValid(true)

   }

   const handleCalculate = (e) =>{
    e.preventDefault()
    if( !Amount || !rot || !timePeriod){
      alert("Please fill the form ")
    }
 else {
  setInterest( Amount*rot*(timePeriod/100))
 } 
}

  
  return (
    <div className="w-100 bg-dark d-flex align-items-center bg-light justify-content-center" style={{height:'100vh'}}>
      <div className="w-50 d- flex align-items-center bg-light justify-content-center p-4" style={{height:'100vh'}}>
        <h3>Simple Interest App</h3>
        <h5>Calculateyour simple interest</h5>
          <div className=' text-center border rounded mt-4 mb-3 p-5 bg-warning'>
          <h6>Total Simple Interest</h6>
          <p>{interest}</p>
        </div>
        <TextField className='w-100 ' id="outlined-basic" label="Amount" variant="outlined" name='amount' value={Amount} onChange={(e)=>validateInput(e)}/> <br />
      {   !isAmountValid &&
        <p className='text-danger'>*Invalid Input</p>
        }
        <TextField className='w-100 mt-3'value={rot} onChange={(e)=>validateInput(e)} name='interest' id="outlined-basic" label="Rate of Interest(p.a)%
" variant="outlined" />
        <br />
        { !isRotValid &&
        <p className='text-danger'>*Invalid Input</p>
        }
        <TextField className='w-100 mt-3' value={timePeriod} name= 'timePeriod' onChange={(e)=>validateInput(e)} id="outlined-basic" label="Time Period (Yr)
" variant="outlined" />
        {
          !isTimePeriodValid &&
          <p className='text-danger'>*Invalid Input</p>
        }
        <Button className=' mt-4 me-4 ' variant="contained" onClick={(e)=>handleCalculate(e)} style={{height:'60px'}}>CALCULATE</Button>

        <Button className=' mt-4 'variant="outlined" onClick={handleReset} style={{height:'60px'}}>RESET</Button>

      </div>
      
    </div>
  );
}

export default App;
