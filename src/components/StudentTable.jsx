//Material UI
import {
  Fab,
  Button,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material/";

//React Hooks
import {useContext, useEffect } from "react";

//
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

//React Router Dom
import { Links } from "../sass/Styled.style";



//Context 
import {
  GlobalContext
} from '../store/contextProvider'

 

export default function StudentTable() {

  // const value = useContext(Context)

  const [{students,deleteStudent, getStudent}] = useContext(GlobalContext)

  useEffect(() => {
    getStudent();
  },[])


  return (
    <div className="container students">
          <Links to="/add/">
            <Button>Add</Button>
          </Links>

          <Table>
            <TableHead >
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Dob</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Action </TableCell>
              </TableRow>
            </TableHead>

            { students && students.map((student) => {

              return (
                <TableBody key={student.id} >
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.gender}</TableCell>
                    <TableCell>{student.dob}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell align="center">{student.address}</TableCell>
                    <TableCell align="center">
                      <Links to={`/edit/${student.id}`}>
                        <Fab
                          size="small"
                          sx={{ mr: 1 }}
                          color="secondary"
                          aria-label="edit"
                        >
                          <EditIcon />
                        </Fab>
                      </Links>
                      <Fab onClick={()=>deleteStudent(student.id)} size="small" color="error" aria-label="delete">
                        <DeleteIcon />
                      </Fab>
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
  );
}
