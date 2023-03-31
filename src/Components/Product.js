import { Container} from "@mui/system";
import {Grid} from '@mui/material';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
export default function Product()
{
    return(
        <div>
    <Container sx={{marginY :15}}>
    <Typography variant="h5" align="centre" marginBottom={5} marginRight={9}>Shop now with super offers !!</Typography>
        <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuLjU_hA0jB9Q7Uvchr9kF7xPAl2oY8qbiWQ&usqp=CAU'></img>
                <Typography component="legend">WRAP UP!!</Typography>
                <Typography component="legend">5 stars</Typography>
                <Rating name="customized-5" defaultValue={2} max={5} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuLjU_hA0jB9Q7Uvchr9kF7xPAl2oY8qbiWQ&usqp=CAU'></img>
                <Typography component="legend">WRAP UP!!</Typography>
                <Typography component="legend">5 stars</Typography>
                <Rating name="customized-10" defaultValue={2} max={5} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuLjU_hA0jB9Q7Uvchr9kF7xPAl2oY8qbiWQ&usqp=CAU'></img>
                <Typography component="legend">WRAP UP!!</Typography>
                <Typography component="legend">5 stars</Typography>
                <Rating name="customized-10" defaultValue={2} max={5} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuLjU_hA0jB9Q7Uvchr9kF7xPAl2oY8qbiWQ&usqp=CAU'></img>
                <Typography component="legend">WRAP UP!!</Typography>
                <Typography component="legend">5 stars</Typography>
                <Rating name="customized-10" defaultValue={2} max={5} />
            </Grid>
        </Grid>
    </Container>
    </div> 
    );
}