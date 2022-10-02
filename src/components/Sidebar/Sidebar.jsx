import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/styles';
import { ClassNames } from '@emotion/react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const demoCat = [
  { label: 'Comedy', Value: ' comedy' },
  { label: 'Action', Value: ' action' },
  { label: 'Horror', Value: ' horror' },
  { label: 'Animation', Value: ' Animation' },
];
const cat = [
  { label: 'Popular', Value: ' Popular' },
  { label: 'Top rated', Value: ' top_rated' },
  { label: 'Upcoming', Value: ' Upcoming' },
];

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="FilmpireLogo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader> Categories</ListSubheader>
        {cat.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src="https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png" height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader> Genres</ListSubheader>
        {demoCat.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src="https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png" height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
