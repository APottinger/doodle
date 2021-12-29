import { Typography, Grid } from '@mui/material';
import Picture from './picture/Picture';
import useStyles from './styles';

const Pictures = ({ pictures, deleteBtn }) => {

    /* const classes = useStyles() */
    return (
        <>
            <Grid container sx={{ rowGap: '25px', paddingLeft: '15px', mx: "auto", width: 1 }} spacing={2}>                    
                {pictures.map(picture => <Grid item xs={12} sm={6} md={4}> 
                    <Picture key={pictures.id} picture={picture} deleteBtn={deleteBtn}/> 
                </Grid>)}
            </Grid>
        </>
    )
}

export default Pictures
