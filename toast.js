import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert,{AlertProps} from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'center',
        })}
      >
        Top-Center
      </Button>
      
       
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar open={open} autoHideDuration={3000}  anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
        <Alert  severity="success" sx={{ width: '100%', borderRadius:'60px', color:'#7ED321', backgroundColor:'white' , border:'1px solid #7ED321'}}>
         <span style={{color:'#333'}}>This is a success message! </span> 
        </Alert>
      </Snackbar>
    </div>
  );
}
