import { Container, Typography } from "@material-ui/core";
import React from "react";

export default function ParMoon() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        ParMooN
      </Typography>

      <Typography gutterBottom>
        ParMooN (Parallel Mathematics and object oriented Numerics) is an
        in-house finite element package. This package has been successfully used
        to solve the incompressible stationary and instationary Navier-Stokes
        equations, the large eddy simulation of turbulent flows, and the free
        boundary value problems in moving domains.
        <br />
        If you are interested in this FEM package, please visit the ParMooN
        webpage.
      </Typography>
      
    </Container>
  );
}
