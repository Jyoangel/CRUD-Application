import { Box, Typography, styled } from '@mui/material';
import Foodimg from '../Images/Foodimg.jpg';
import Foody from '../Images/Foody.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const FoodCompany = () => {
    
    return (
        <Header>
            <Typography variant="h4">The Food company</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={Foodimg}  />
                <Image  src={Foody} />
            </Box>
        </Header>
    )
}

export default FoodCompany;