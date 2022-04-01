

//Material UI styles
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
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

            <ButtonGroup variant="text" aria-label="text button group">
              <Links to="/counter"  color="#fff">
                <Button color="inherit">Counter</Button>
              </Links>

              <Links to="/" color="#fff">
                <Button color="inherit">Blank</Button>
              </Links>

            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}