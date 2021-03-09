import { useTheme, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'

import { useChangeTheme } from '../theme-provider'

import IconButton from '@material-ui/core/IconButton'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

import { ReactComponent as Logo } from './logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
  },
  grow: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  auth: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logo: {
    marginRight: theme.spacing(2),
    width: 30,
    height: 30,
    fill: '#fff',
  },
  logoLink: {
    color: 'white',
    fontSize: 18,
  },
  button: {
    fontSize: '11px',
  },
  link: {
    color: 'white',
    fontSize: 14,
  },
  icon: { color: 'white' },
  loginButton: {
    background: '#e91e63',
    color: '#fff',
    borderRadius: '25px',
    padding: '6px 25px',

    '&:hover': {
      background: 'blue',
      boxShadow: '0px 2px 10px #888888',
    },
  },
}))

const Header = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const changeTheme = useChangeTheme()
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid className={classes.grow}>
          <Link to="/" className={classes.grow}>
            <Logo className={classes.logo} alt="" />

            <Typography variant="caption" className={classes.logoLink} noWrap>
              Snippets
            </Typography>
          </Link>
        </Grid>

        <Button component={Link} to="/companies" className={classes.button}>
          <Typography variant="caption" className={classes.link} noWrap>
            companies
          </Typography>
        </Button>

        <Button component={Link} to="/cars" className={classes.button}>
          <Typography variant="caption" className={classes.link} noWrap>
            cars
          </Typography>
        </Button>
        <IconButton
          title="Toggle light/dark mode"
          onClick={() => changeTheme()}
        >
          {theme.palette.type === 'light' ? (
            <Brightness4Icon className={classes.icon} />
          ) : (
            <Brightness7Icon className={classes.icon} />
          )}
        </IconButton>
        <Button component={Link} to="/login" className={classes.loginButton}>
          <Typography variant="caption" className={classes.link} noWrap>
            login
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
