

//Material UI styles
import {
  AppBar,
  Box,
  Toolbar,
  Typography
} from '@mui/material'

// React Router Dom
import {Links} from '../sass/Styled.style';


//SCSS 


export default function Menu() {
  return (
    <div className="menu">
      <Box >
        <AppBar position="static" >
          <Toolbar sx={{ display: 'flex' ,justifyContent: 'space-between'}}>

            <Links to='/' color="#fff">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Duong Luong
              </Typography>
            </Links>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}