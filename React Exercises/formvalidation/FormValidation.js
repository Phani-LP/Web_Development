import React, {useState} from 'react'
function FormValidation() {
    const [data, setData] = useState({
        ename:'',
        epassword:''
    })
    const changeHandler=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        if (data.epassword.length <= 5){
            alert(`Password length must be more than 5.`);
        }
        else if(data.epassword.length > 5){
            console.log(data);
        }
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler} >
                Name: <input name='ename' type='text' onChange={changeHandler}/><br/>
                Password: <input name='epassword' type='password' onChange={changeHandler}/><br/>
                <input type='submit' value='Login'/>
            </form>
        </center>
    </div>
  )
}
export default FormValidation;