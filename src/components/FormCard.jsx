import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Form from './Form';
import Preview from './Preview';


const FormCard = () => {

    const [userData, setuserData] = useState(
        {
            firstName: "Test",
            lastName: "User",
            displayName: "myUserName",
            email: "example@gmail.com",
            phone: "+91 7733558866",
            location: "India"
        }
    );

    const handleReset = (event) => {
        event.preventDefault();
        alert("Resetting the form");
        setuserData({
            firstName: "Test",
            lastName: "User",
            displayName: "myUserName",
            email: "example@gmail.com",
            phone: "+91 7733558866",
            location: "India"
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setuserData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Form handleChange={handleChange} userData={userData} setuserData={setuserData} handleReset={handleReset} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Preview userData={userData} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default FormCard