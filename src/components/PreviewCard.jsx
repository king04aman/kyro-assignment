import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const FormCard = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Card sx={{ height: 85 + "vh" }}>
                    <CardContent sx={{ marginTop: 3, textAlign: "center" }}>
                        <Typography variant="h5" component="div">
                            <h3>Preview</h3>
                        </Typography>
                        <Typography variant="div">
                            <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="preview" style={{ width: 50 + "%", borderRadius: "30px", padding: 15 }} />
                        </Typography>
                        <Typography variant="div" color={"text.secondary"} sx={{ padding: 3 }}>
                            <strong><h3 style={{ padding: "5px" }}>Aman Kr</h3></strong>
                            <h5 style={{ padding: "5px" }}>@king04aman</h5>
                            <h5 style={{ padding: "5px" }}>am@fm.cl</h5>
                            <h5 style={{ padding: "5px" }}>785462358</h5>
                            <h5 style={{ padding: "5px" }}>India</h5>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default FormCard