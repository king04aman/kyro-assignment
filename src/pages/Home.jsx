import * as React from 'react';
import Box from '@mui/material/Box';
import FormCard from '../components/FormCard';


const Home = () => {
  // https://www.youtube.com/watch?v=lhMKvyLRWo0
  
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
            <FormCard />
        </Box>
      </Box>
    </>
  );
}

export default Home