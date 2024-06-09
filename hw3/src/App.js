import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
    // Sample data for the table
    const rows = [
      { id: 1, name: 'Mary Wu', age: 30, country: 'USA' },
      { id: 2, name: 'Mugi Smith', age: 25, country: 'Canada' },
      { id: 3, name: 'Michael Johnson', age: 35, country: 'UK' },
      { id: 4, name: 'Emily Light', age: 28, country: 'Australia' },
    ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Link href="#" color="inherit" underline="none">
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="#" color="inherit" underline="none">
            <Button color="inherit">About Us</Button>
          </Link>
          <Link href="#" color="inherit" underline="none">
            <Button color="inherit">Register</Button>
          </Link>
        </Toolbar>
      </AppBar>
    
  
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Create React App example
        </Typography>
        <ProTip />

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="/corgi.jfif"
              alt="Placeholder Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                This is the Card Heading
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a sample card description: 
                    Hi, I am Corgi, and I am cute! 
              </Typography>
            </CardContent>
        </Card>


          <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell sx={{ pl: 0 }}>
                    <TableSortLabel>S.No</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>Name</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>Age</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>Country</TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.country}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>



        <Copyright />
      </Box>
    </Container>
    </>
  );
}
