import HeaderForm from './HeaderForm'
import { Grid, Typography, Container, Button } from '@mui/material';

const HeaderArticle = () => {
    return (
        <main>
            <Container maxWidth='md' justify='center'>
                <Typography variant='h1' sx={{textAlign: 'center'}}>We Believe</Typography>
                <Typography variant='p' paragraph sx={{textAlign: 'center'}}>Art Can Change the World. Art can totally transform what we think we know about the world and what we dont know, we can imagine through art. What we think we know
                we dont and even what we think we do know it is only like a leaf blowing in the wind. It's meaningless outside the ambigious and abstraction that is art itself - defined...
                </Typography>
            </Container>
            
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item >
                    <Button variant='contained' color='primary'>See All Photos</Button>
                </Grid>
                <Grid item >
                <Button variant='outlined' color='primary'>Add Your Photos</Button>
                </Grid>
            </Grid>
                {/* <HeaderForm /> */}
            
        </main>
    )
}

export default HeaderArticle
