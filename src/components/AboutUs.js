import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";

function AboutUs() {
    return (
        <Container maxWidth="lg" sx={{ padding: "2rem" }}>
            {/* About Section */}
            <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", color: "primary.main" }}>
                    About Us
                </Typography>
                <Typography variant="body1" sx={{ marginTop: "1rem", color: "text.secondary", fontSize: "1.2rem" }}>
                    Established in 2022, we are a passionate team of innovators dedicated to delivering top-notch IT solutions. 
                    With a commitment to excellence and client satisfaction, we aim to revolutionize the industry by providing 
                    exceptional services tailored to your needs.
                </Typography>
            </Box>

            {/* Vision, Mission, and Goals */}
            <Grid container spacing={4} sx={{ marginBottom: "3rem" }}>
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ padding: "2rem", boxShadow: 3, textAlign: "center", backgroundColor: "#f5f5f5" }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "1rem", color: "primary.main" }}>
                            Our Vision
                        </Typography>
                        <Typography variant="body1" sx={{ color: "text.secondary" }}>
                            To be the industry leader in providing innovative and reliable IT solutions, empowering businesses worldwide.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Paper sx={{ padding: "2rem", boxShadow: 3, textAlign: "center", backgroundColor: "#f5f5f5" }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "1rem", color: "primary.main" }}>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" sx={{ color: "text.secondary" }}>
                            To deliver value and innovation by building exceptional IT solutions that address real-world challenges for our clients.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Paper sx={{ padding: "2rem", boxShadow: 3, textAlign: "center", backgroundColor: "#f5f5f5" }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "1rem", color: "primary.main" }}>
                            Our Goals
                        </Typography>
                        <Typography variant="body1" sx={{ color: "text.secondary" }}>
                            - Drive innovation in the IT sector<br />
                            - Achieve 100% client satisfaction<br />
                            - Foster long-term relationships with our partners<br />
                            - Expand our reach globally
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            {/* Core Values Section */}
            <Box sx={{ marginBottom: "3rem" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary.main", textAlign: "center", marginBottom: "2rem" }}>
                    Our Core Values
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Paper sx={{ padding: "1.5rem", boxShadow: 3, textAlign: "center", backgroundColor: "#e8f4f8" }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
                                Innovation
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Continuously pushing boundaries to deliver cutting-edge solutions.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper sx={{ padding: "1.5rem", boxShadow: 3, textAlign: "center", backgroundColor: "#e8f4f8" }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
                                Integrity
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Building trust through transparency and ethical practices.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper sx={{ padding: "1.5rem", boxShadow: 3, textAlign: "center", backgroundColor: "#e8f4f8" }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
                                Customer Focus
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                Prioritizing our clients' needs to deliver exceptional outcomes.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            {/* Why Choose Us Section */}
            <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary.main", marginBottom: "1rem" }}>
                    Why Choose Us?
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", marginBottom: "1rem" }}>
                    Here’s what makes us stand out:
                </Typography>
                <Box component="ul" sx={{ textAlign: "left", margin: "0 auto", maxWidth: "600px", color: "text.secondary" }}>
                    <Box component="li" sx={{ marginBottom: "0.5rem" }}>Experienced and passionate team of professionals</Box>
                    <Box component="li" sx={{ marginBottom: "0.5rem" }}>Tailored IT solutions to meet unique client needs</Box>
                    <Box component="li" sx={{ marginBottom: "0.5rem" }}>Commitment to innovation and quality</Box>
                    <Box component="li" sx={{ marginBottom: "0.5rem" }}>Global reach with a personal touch</Box>
                </Box>
            </Box>
        </Container>
    );
}

export default AboutUs;
