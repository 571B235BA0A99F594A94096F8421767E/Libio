import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { db } from "./firebaseconfig" 
import { collection, onSnapshot,getDocs } from 'firebase/firestore'; 


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [data, setData] = React.useState([]);

 
  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'customers'), 
      (querySnapshot) => {
        const dataList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataList); 
        console.log(dataList); 
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );

   
    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h1 className="font-bold text-4xl text-center my-8">CUSTOMER ORDER DETAILS</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>CUSTOMER ORDER ID</StyledTableCell>
              <StyledTableCell align="center">CUSTOMER NAME</StyledTableCell>
              <StyledTableCell align="center">PHONE NO</StyledTableCell>
              <StyledTableCell align="center">LOCATION</StyledTableCell>
              <StyledTableCell align="center">ORDER ITEMS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.id}
                </StyledTableCell>
                <StyledTableCell align="center">{item.name}</StyledTableCell>
                <StyledTableCell align="center">{item.phone}</StyledTableCell>
                <StyledTableCell align="center">{item.loc}</StyledTableCell>
                <StyledTableCell align="center">
                  {item.fooditem &&
                    item.fooditem.map((food, index) => (
                      <div key={index} >{food}</div> 
                    ))}
                </StyledTableCell>
                 {/* <StyledTableCell align="center">{item.fooditem.map((food)=>
             <StyledTableCell align="center">{food}</StyledTableCell>
             )}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
