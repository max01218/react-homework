import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Inputlabel from '@material-ui/core/Inputlabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const useStyles = makeStyles((theme) => ({
  background: {
    height: '100vh',
  },
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '100%',
      maxWidth: 500,
    },
  },
  paper: {
    margin: theme.spacing(8, 10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    backgroundImage: 'url(http://localhost:3000/CGU.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width:'100%'
  },
  word: {
    fontWeight:'100%',
    fontSize: 30,
    fontStyle: 'Bold',
    margin: theme.spacing(5),
  },
  avatar: {
    margin: theme.spacing(50),
    
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  bottom:{
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [values, setvalues] = React.useState({
    password:'',
    showPassword: true,
  });
  const handlechange = (prop) => (event) => {
    setvalues({ ...values, [prop]: event.target.value })
  };
  const handleclickShowPassword = () => {
    setvalues({ ...values, showPassword: !values.showPassword })
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  return (
    <Grid container component="main" className={classes.background}>
      <CssBaseline />
      <Grid item xs={false} sm={20} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar alt="CGU" src="icon2.png" className={classes.Avatar}/>
              <Typography className={classes.word}>
                  長庚大學登入網站
              </Typography>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                  id="standard-basic"
                  label="Email-address"
                  fullWidth
                margin='normal' />
              <FormControl fullWidth margin='normal' required>            
                <Inputlabel htmlFor="standard-adorment-password">Password</Inputlabel>
                <Input
                  label="password"
                  id="password"
                  fullWidth
                  margin='normal'
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handlechange('password')}
                  endAdornment={
                    <InputAdornment>
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleclickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  } />
              </FormControl>
                <FormControlLabel
                  control={<Checkbox value="remember" color="secondary" />}
                  label="記住自己" />
                <Button variant="contained" color="primary" fullWidth className={classes.bottom}>Sign In</Button ><br />
                <Grid container>
                  <Grid item xs >
                    <Link href="#" variant="body2">
                    忘記密碼?
                    </Link>
                  </Grid>
                  <Grid item xs >
                    <Link href="#" variant="body2">
                    還沒註冊 辦一個八
                    </Link>
                  </Grid>
              </Grid>
              </form>
          </div>
          <Grid item xs >
            <Link href="https://www.cgu.edu.tw/"><img src='icon.png' alt="CGU"/></Link>
          </Grid>
        </Grid>
      </Grid>
  );  
}