import {
  Button,
  FormGroup, TextField
} from '@mui/material';
import {
  useContext,
  useEffect,
  useState
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Links } from '../sass/Styled.style';
import { GlobalContext } from '../store/contextProvider';



  export default function ClassesForm() {
  const [{classes, getClassByID,setClass , editClasses,addClass}] = useContext(GlobalContext);
  const {id} = useParams()
  const navigate = useNavigate()
  
  // const [classroom, setClasssroom] = useState({})
     
  useEffect(()=> {
    if(id){
      getClassByID(id)
    }
  },[])

  const handleSubmitClass = (e) => {
    e.preventDefault()
    if(id) {
      editClasses(classes, id)

    } else {
        addClass(classes)
    }
    navigate(-1)
  }


  
  const handleChangeClass = (e) => {
    console.log(classes)
        setClass({
      ...classes, 
      [e.target.name]: e.target.value,
    })

  } 


  return (
    <div className="container form-control">
      <h1>Add Class</h1>
      <form onSubmit={(e)=>handleSubmitClass(e)} action="">
        <FormGroup>

        <TextField
              label="Class name"
              name="name"
              onChange={(e)=>handleChangeClass(e)}
              value={classes?.name || ''}
              id="standard-size-small"
              size="small"
              // required
              variant="standard"
              helperText="Please enter your class name"
            />

        <Button type="submit" variant="contained">Save</Button>
        <Links to={-1}>
          <Button type="button" sx={{mt: 2}} style={{width: '100%'}}>Cancel</Button>
        </Links>

      </FormGroup>
      </form>
    </div>
  )
}
