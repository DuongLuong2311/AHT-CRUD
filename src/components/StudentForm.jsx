import { 
  FormControl,
  Button,
  FormGroup,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  FormLabel
} from '@mui/material';


import {
  Links
} from '../sass/Styled.style';


import { 
  useContext, 
  useEffect, 
  useState
} from 'react';

import {useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../store/contextProvider';






export default function StudentForm() {

  const [{student, setStudent,getStudentByID, editStudent,addStudent}] = useContext(GlobalContext);
  const {id} = useParams()
  const navigate = useNavigate()


    useEffect(() => {
      if(id){
        getStudentByID(id);
      }
  },[])

  const handleSubmitStudent = (e) => {
    e.preventDefault()
    if(id) {
      editStudent(student, id)

    } else {
        addStudent(student)
    }
    navigate(-1)
  }


  const handleChangeStudent = (e) => {
        setStudent({
      ...student, 
      [e.target.name]: e.target.value,
    })

  } 

   
  return (
    <div className="container form-control  ">
      <form onSubmit={(e)=>handleSubmitStudent(e)} action="">
        <FormGroup>
          <TextField
              label="Full name"
              name="name"
              onChange={(e)=>handleChangeStudent(e)}
              value={student?.name || ''}
              id="standard-size-small"
              size="small"
              required
              variant="standard"
              helperText="Please enter your name"
            />

            <FormControl sx={{mt: 3, mb: 3}} >
             <FormLabel>Gender</FormLabel>
             <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="gender"
              onChange={(e)=>handleChangeStudent(e)}
              value={student?.gender || ''}
              required
            >
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <TextField
            id="date"
            label="Date of Birth"
            type="date"
            name="dob"
            value={student?.dob || ''}
            onChange={(e)=>handleChangeStudent(e)}
            helperText="Please enter your date of birth"
            required
          />

          <TextField
            sx={{ mb: 3}}
            label="Email"
            id="standard-size-small"
            size="small"
            variant="standard"
            value={student?.email || ''}
            name="email"
            onChange={(e)=>handleChangeStudent(e)}
            required
            helperText="Please enter your email"
          />

          <TextField
            sx={{mb: 3}}
            label="Address"
            id="standard-size-small"
            size="small"
            variant="standard"
            name="address"
            value={student?.address || ''}   
            required
            onChange={(e)=>handleChangeStudent(e)}         
            helperText="Please enter your address"
          />

          
        {/* <FormControl variant="filled" sx={{ mb: 3}} >
          <InputLabel id="demo-simple-select-filled-label">Class</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"

          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>PHP</MenuItem>
            <MenuItem value={20}>Javascript</MenuItem>
            <MenuItem value={30}>ReactJS</MenuItem>
          </Select>
        </FormControl> */}


          <Button type="submit" variant="contained">Save</Button>

          <Links to="/students">
            <Button type="button" sx={{mt: 2}} style={{width: '100%'}}>Cancel</Button>
          </Links>



        </FormGroup>


      </form>
    </div>
  )
}
