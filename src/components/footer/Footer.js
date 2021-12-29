import { Typography, Grid, Box } from '@mui/material';
import FooterNav from './FooterNav';
import FooterSocialMedia from './FooterSocialMedia';
import FooterSubscribeForm from './FooterSubscribeForm';
const Footer = () => {
    return (
        <Box xs={12} sm={6} md={4} sx={{height: '50rem', backgroundColor: '#525252', overflow: 'hidden', position: 'relative'}} >
            <FooterSocialMedia/>
            <Grid container>
                <Grid item sm={8} md={8}>
                    <FooterNav />
                </Grid>
                <Grid item sm={12} md={4}>
                    <FooterSubscribeForm />
                </Grid>
            </Grid>
            <Box display="flex" 
                width={1} 
                alignItems="center"
                justifyContent="center">
                    doodle&copy; 2021
            </Box>
            <div >
            <Typography variant='h1' component='h1' sx={{
                display: 'flex',
                background: 'linear-gradient(#000000, #0e1111)',
                backgroundClip: 'text',
                color: 'transparent',
                justifyContent: 'center',
                fontSize: '35rem',
                width: '100%',
                margin: 0,
                padding: '0',
                position: 'absolute',
                bottom: '-15rem',

                
            }}>
                doodle
            </Typography>
            </div>
        </Box>
        
    )
}

export default Footer
