import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(),
  },
}));

export default function CustomizedDialogs() {
  const gotopage=useNavigate()

  const handleClickOpen =()=>{
    gotopage('/nextpage')
    
  }
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
       BUY NOW
      </Button>
      {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent >
         <Form/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
           Order cancel
          </Button>
        </DialogActions>
      </BootstrapDialog> */}
    </React.Fragment>
  );
}
