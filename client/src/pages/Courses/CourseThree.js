import { Container, Typography } from "@material-ui/core";
import React from "react";

function Feature3() {
  return (
    <Container>
      <Typography 
      variant="h3"
      component="h2"
      gutterBottom >
        Parallel Computing for FEM
      </Typography>

      <Typography 
      variant="h3"
      component="h2"
      gutterBottom >
        Parallel Computing for Finite Element Methods : DS 323 (Aug) 1:1
      </Typography>

      <Typography gutterBottom >
      This course will provide an introduction to parallel finite element data structure and its efficient implementation in ParMooN (Parallel Mathematics and object oriented Numerics), an open source parallel finite element package. Further, the implementation of  the parallel (MPI/OpenMPI) geometric multigrid solver  will also be taught. Parallel finite element solution of scalar and incompressible Navier-Stokes equations in two- and three-dimensions using ParMooN (cmg.cds.iisc.ac.in/parmoon/) will also be a part of this course.
      </Typography>

      <Typography
      variant="h4"
      component="h3"
      gutterBottom >
        Topics:
      </Typography>

      <Typography gutterBottom >Introduction to  parallel computer architectures, Message Passing Interface (MPI) and OpenMPI, hybrid (MPI/OpenMPI) concepts. Basics of finite element methods, hierarchical mesh partition/decomposition, scalable solvers/smothers (Jacobi, Gauss-Seidel, SOR, Vanka-type) and parallel geometric multigrid solver/preconditioner, parallel visualization using ParaView/VTK.</Typography>
    
      <Typography gutterBottom >
      Prerequisites:  Good knowledge of finite element methods and C/C++.
      </Typography>

      <Typography gutterBottom> Reference Text books: </Typography>
      <Typography gutterBottom > Sashikumaar Ganesan, Lutz Tobiska: Finite elements: Theory and Algorithms, Cambridge-IISc Series, Cambridge University Press, 2017
      <br/>
      An Introduction to Parallel Programming. Peter S Pacheco. Publisher: Morgan Kauffman. ISBN: 978-93-80931-75-3. 2011
      <br/>
      Current literature 
      </Typography>

      <Typography gutterBottom >
      Title:  Parallel Computing for Finite Element Methods : DS 323 (1:1)
      </Typography>

      <Typography
      variant="h4"
      component="h3"
      gutterBottom >
        Course Information
      </Typography>

      <Typography gutterBottom >
      Instructor: Prof. Sashikumaar Ganesan, CDS 
      </Typography>

      <Typography gutterBottom >
      Time/Place: MW 10:00-11:00 am / CDS Lecture Hall 202
      </Typography>

      <Typography gutterBottom >
      Office hours: F 12 noon -1 pm
      </Typography>

      <Typography
      variant="h4"
      component="h3"
      gutterBottom >
        Course Information
      </Typography>

      <Typography gutterBottom >
      Introduction to Computational Science
      </Typography>

      <Typography gutterBottom >
      Basics of Message Passing Interface (MPI)
      </Typography>

    </Container>
  );
}

export default Feature3;
