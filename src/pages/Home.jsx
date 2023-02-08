import Box from '@mui/material/Box';
import FromCard from '../components/FormCard';
import Typography from '@mui/material/Typography';


const Home = () => {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5">
          My Profile
        </Typography>

        <FromCard />
      </Box>
    </>
  );
}

export default Home