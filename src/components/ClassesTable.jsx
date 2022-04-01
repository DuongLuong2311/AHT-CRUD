import {useContext, useEffect } from "react";

import axios from 'axios';

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

//
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

//React Router Dom
import { Links } from "../sass/Styled.style";


import {
  GlobalContext
} from '../store/contextProvider'


export default function ClassesTable() {

  const [{classes, deleteClasses,getClass}] = useContext(GlobalContext)
   useEffect(() => {
    getClass();
  },[])

  return (
    <div className="container">
      <Links to="/classes/add/">
        <Button>Add</Button>
      </Links>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >Class Name</TableCell>
              <TableCell align="center"> Action </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {classes && classes.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="center">
                    <Links to={`/classes/edit/${item.id}`}>
                      <Fab
                        size="small"
                        sx={{ mr: 1 }}
                        color="secondary"
                        aria-label="edit"
                      >
                        <EditIcon />
                      </Fab>
                    </Links>
                    <Fab onClick={()=> deleteClasses(item.id)} size="small" color="error" aria-label="delete">
                      <DeleteIcon />
                    </Fab>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
