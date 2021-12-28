import { Typography, Grid } from '@mui/material';
import Picture from './picture/Picture';
import useStyles from './styles';

const Pictures = ({ pictures, deleteBtn }) => {

    /* const classes = useStyles() */
    return (
        <>
            <Typography variant='h2'>
                Featured Photos
            </Typography>
                <Grid container spacing={2}>                    
                    {pictures.map(picture => <Grid item xs={12} sm={6} md={4}> 
                    <Picture key={pictures.id} picture={picture} deleteBtn={deleteBtn}/> 
                    </Grid>)}
                </Grid>
            
        </>
    )
}

export default Pictures
