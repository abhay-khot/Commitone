import { Container, Typography } from "@material-ui/core";
import React from "react";

function Feature2() {
  return (
    <Container>
      <Typography 
      variant="h3"
      component="h2"
      gutterBottom >
      FEM
      </Typography>

      <Typography 
      variant="h3"
      component="h2"
      gutterBottom >
        Finite elements : Theory and Algorithms : DS 291 (Aug) 3:1
      </Typography>

      <Typography gutterBottom >
      Course Homepage : https://indianinstituteofscience.sharepoint.com/sites/nmsc
      Lecture Videos : https://web.microsoftstream.com/embed/channel/9c1e6137-f0a8-4f15-976f-21a004e69c20?sort=trending
      </Typography>


      <Typography gutterBottom >
      Note : Used needs to have access to an Microsoft Account in order to access these materials. <br/>
      This course will provide an introduction to the finite element methods and their applications to the scalar convection diffusion equations and to the Navier-Stokes equations. The course will cover the basic mathematical theory of the finite element methods, and the development of fully practical finite element algorithms for solving partial differential equations elliptic and parabolic scalar PDES, linear elasticity, Mindlin-Reissner plate problem, Navier-Stokes equations. Further, the lab component will consists of programming assignments including the implementation of the finite element algorithms, solving scalar and Navier-Stokes equations using the in-house package ParMooN</Typography>
      <Typography/>

      <Typography
      variant="h4"
      component="h3"
      gutterBottom >
        Topics:
      </Typography>

      <Typography gutterBottom >
        Generalized (weak) derivatives, Sobolev norms and associated spaces, inner-product spaces, Hilbert spaces, construction of finite element spaces, mapped finite elements, two- and three-dimensional finite elements, Interpolation and discretization error, variational formulation of second order elliptic boundary value problems, finite element algorithms and implementation for linear elasticity, Mindlin-Reissner plate problem, two-dimensional stationary incompressible Navier-Stokes equations systems in fluid mechanics. 
      </Typography>
    
      <Typography gutterBottom >
      Prerequisites: Good knowledge of numerical analysis and/or consent from the instructor. 
      </Typography>

      <Typography gutterBottom> Reference Text books: </Typography>
      <Typography gutterBottom > 1. Sashikumaar Ganesan, Lutz Tobiska: Finite elements: Theory and Algorithms, Cambridge-IISc Series, Cambridge University Press, 2017
      <br/>
      2. Dietrich Braess, Finite Elements: Theory, Fast Solvers, and Applications in Solid Mechanics, Cambridge University Press, 3rd ed., 2007<br/>
      Current literature 
      </Typography>

      <Typography gutterBottom >
      Title: Finite Elements: Theory and Algorithms : DS 291 (3:1)
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
      Time/Place: TTH 8:30-10:00 am / CDS Lecture Hall 202 
      </Typography>

      <Typography gutterBottom >
      Office hours: F 10 -12 am 
      </Typography>

      <Typography gutterBottom >
      Grading: Assignments 25%, Midterm Exam 25% and Final Exam 50%. 
      </Typography>

      <Typography gutterBottom >
      Office hours: F 10 -12 am 
      </Typography>

      <Typography gutterBottom >
      Homework: There will be three assignments and most of the assignment problems require computer programming. Matlab/Fortran/C/C++ can be used. Late submission (beyond the deadline) of assignment will result in zero credit.
      </Typography>

      <Typography gutterBottom >
      Midterm/Final Exam: Both midterm and final written exams will examine the understanding of the finite element theory and algorithms. Students will NOT be allowed to carry any text materials for both midterm and final exams.
      </Typography>
    </Container>
  );
}

export default Feature2;
