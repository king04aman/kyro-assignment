import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';



const Form = (props) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { firstName, lastName, displayName, email, phone, location } = props.userData;

        const response = await fetch("https://myfirstproject-47317-default-rtdb.firebaseio.com/testDB.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                displayName,
                email,
                phone,
                location,
            }),
        });

        if(response){
            alert("Data Saved Successfully");
            window.location.reload(true);
        }
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Card sx={{ height: 85 + "vh" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h5" sx={{ paddingTop: 5, paddingLeft: 5 }}>
                            My Profile
                        </Typography>
                        <Card sx={{ margin: 5, padding: 3 }}>
                            <CardContent>
                                <Box
                                    component="form"
                                    noValidate
                                    sx={{ mt: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item sm={12} md={6}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                name="firstName"
                                                autoComplete="name"
                                                autoFocus
                                                onChange={props.handleChange}
                                            />
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="name"
                                                onChange={props.handleChange}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item sm={12} md={6}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="displayName"
                                                label="Display Name"
                                                name="displayName"
                                                autoComplete="username"
                                                onChange={props.handleChange}
                                            />
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email"
                                                name="email"
                                                autoComplete="email"
                                                onChange={props.handleChange}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item sm={12} md={6}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="phone"
                                                label="Phone"
                                                name="phone"
                                                autoComplete="phone"
                                                onChange={props.handleChange}
                                            />
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="location"
                                                label="Location"
                                                name="location"
                                                autoComplete="location"
                                                onChange={props.handleChange}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{ mt: 5, mb: 3, background: "#800000" }}
                                                onClick={props.handleReset}
                                            >
                                                <RotateLeftOutlinedIcon />
                                                <span style={{ paddingLeft: 5 }}>Reset</span>
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{ mt: 5, mb: 3, background: "#800000" }}
                                                onClick={handleSubmit}
                                            >
                                                <SaveOutlinedIcon />
                                                <span style={{ paddingLeft: 5 }}>Save</span>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
            </Box>

        </>
    )
}

export default Form