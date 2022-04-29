import React from "react";

import Typography from '@material-ui/core/Typography'
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  animation:{
    fontSize: 75,
    fontWeight: "bold",
    backgroundColor: "lightblue",
    height: "93vh",
    width: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  
  background:{
    backgroundColor: 'aqua',
    width: "100%"
  }

}) 

function Home() {
  const classes = useStyles()

  return (
    <Container> 
      <Typography 
      variant="h1"
      className={classes.animation}
      gutterBottom
      >
        Welcome to <br/>Computational Mathematics Group
      </Typography>

      <Typography 
      gutterBottom
      >
        Computational Mathematics Group (CMG) at the Department of Computational
        and Data Sciences is under the Division of Interdisciplinary Research at
        Indian Institute of Science Bangalore, India.
        <br/>
        We develop accurate, efficient and robust parallel numerical (finite
        element) schemes for solving partial differential equations (PDEs) that
        model several physical and industrial processes.
        <br/>  
        Please visit our in-house finite element package ParMooN.
      </Typography>

      <Typography 
      variant="h2"
      gutterBottom>
          CMG
      </Typography>
            
      <Typography 
      variant="h6" 
      gutterBottom
      className={classes.background}
      >
      Finite Element Analysis:
      </Typography>

      <Typography 
      gutterBottom
      >
      finite element methods for the solution of PDEs and surface PDEs
      </Typography>

      <Typography
      gutterBottom
      >
      multigrid methods, ALE approach for moving meshes
      </Typography>

      <Typography
      gutterBottom
      >
      
      splitting methods for high-dimensional (>3) PDEs
      </Typography>

      <Typography
      gutterBottom
      >
      Fstability, convergence analysis and error estimates
      </Typography>

      <Typography
      gutterBottom
      >
      stabilization (SUPG, LPS) and variational multiscale methods
      </Typography>

      <Typography 
      variant="h6"
      className={classes.background}
      gutterBottom
      >
      High Performance Computing:
      </Typography>
      
      <Typography
      gutterBottom
      >
      ParMooN, an open-source finite element software development
      </Typography>

      <Typography gutterBottom>
      efficient, robust, scalable finite element algorithms
      </Typography>

      <Typography gutterBottom>
      OpenMP and MPI based hybrid parallel algorithms
      </Typography>
      
      <Typography gutterBottom>
      parallel geometric multigrid solver
      </Typography>
      
      <Typography 
      variant="h6" 
      className={classes.background}
      gutterBottom>
      Computational Fluid Dynamics:
      </Typography>

      <Typography gutterBottom>
      free surface and two-phase flows with surfactants and heat transfer
      </Typography>
      
      <Typography gutterBottom>
      complex (viscoelastic) fluid flows
      </Typography>
      
      <Typography gutterBottom>
      flows in reactors, fluid-structure interaction problems
      </Typography>
      
      <Typography gutterBottom>
      flows with boundary and interior layers
      </Typography>
      
      <Typography gutterBottom> 
      flows with floating bodies, ship hydrodynamics
      </Typography>
      
      <Typography gutterBottom>
      moving contact line problems, dynamics contact angles
      </Typography>
      
      <Typography gutterBottom>
      population balance systems in crystallizers
      </Typography>
      
      <Typography gutterBottom>
      turbulent flows with moving/deforming solid bodies
      </Typography>
      
      <Typography 
      variant="h6" 
      className={classes.background}
      gutterBottom>
      Bio-medical Applications:
      </Typography>
      
      <Typography gutterBottom>
      computational models for eye
      </Typography>

      <Typography gutterBottom>
      biophysical model of cancer invasion
      </Typography>
      
      <Typography gutterBottom>
      flow through nasal cavities and respiratory tract
      </Typography>

      <Typography gutterBottom>
      terahertz heating effects in realistic tissues
      </Typography>
      
    </Container>
  );
}

export default Home;
