import { Button, Container, Typography } from '@material-ui/core'
import React from 'react'

export default function Ongoing() {
  return (
    <Container>
      <Typography variant='h3' gutterBottom>
      Ongoing Projects
      </Typography>

      <Typography 
      variant='h6' 
      component='body1'
      gutterBottom> 
      Efficient and Robust Numerical Scheme for Computations of Liquidized Alloy 
      </Typography>

      <Typography gutterBottom>
      supported by Science and Engineering Research Board, DST <br/> 
      </Typography>

      <Typography gutterBottom>
      Aim of this project is to develop a robust and efficient finite element scheme for computations of dislocation and accumulation of liquidized alloy coating on a solid substrate. The targeted application of the proposed project is to investigate the dislocation and accumulation phenomenon of alloy coating from a hot region to a cold region during Hot Forming Die Quenching (HFDQ) in an ultra-high-strength steel production.
      <br/> 
      <Button variant="text">More Details</Button> 
      <br/>
      The mathematical model consists of time-dependent Navier-Stokes and energy equations in a time-dependent (moving) domain. Further, the Marangoni effect and a temperature-dependent dynamic contact angle will also be incorporated in the model. The domain will be handled by the arbitrary Lagrangian-Eulerian approach. Moreover, the PDEs will be discretized by finite elements in space and by a fractional step-theta scheme in time. Since the density of the alloy is very high, the PDEs become convection dominated, and therefore a local projection stabilization will be used.
      <br/>
      The developed numerical scheme will be used to get an insight into the effects of Marangoni convection on the dislocation and accumulation of the liquidized alloy coating. Further, parametric studies will be performed to study the dislocation phenomenon. we believe that the findings of this numerical study will help to develop technologies to use high heating rates to increase ultra-high-strength steel production in HFDQ process.
      <br/>
      In addition to the targeted application, the considered type of problems initiate new scientific questions in fundamental areas of computational mathematics. Moreover, the findings will have a huge impact in automobile industries. 
     
      </Typography>

      <Typography gutterBottom variant='h6'> 
      Computational Ship Hydrodynamics: Modeling of Free Surface and Two-Phase Flows Around Ships
      </Typography>
      
      <Typography gutterBottom>  
          supported by Naval Research Board, DRDO
      <br/> supported by Department of Higher Education, MHRD, India
      </Typography>
    
      <Typography gutterBottom>
      A finite element method (FEM) for simulations of free surface and two-phase flows around ships will be developed. The ALE-FEM scheme can be used for computations of free surface/two-phase flows around ships, in particular, tank tests and hydrodynamics coefficients estimation.
      <br/>
      <Button variant="text">More Details</Button> 
      <br/>
      The free surface/two-phase flow will be described by the time-dependent Navier-Stokes equations in a moving domain, whereas the rigid body (ship) motion will be described by the equations of variation of linear and angular momentum. Apart from the other challenges associated with the solution of the coupled Navier-Stokes and momentum equations, tracking and/or capturing the moving free surface/interface makes the computation more complicate. In this project, finite element schemes based on the arbitrary Lagrangian-Eulerian (ALE) will be developed for the coupled equations.
      <br/>
      The developed scheme can be used to solve the ship resistance problem, that is, to predict the resistance of the ship moving at low speed through still water. In practice, a very high accuracy of resistance prediction is often required to determine the hull form of design, and the proposed ALE-FEM will be well suited for these models, and will be capable of simulating free surface/two-phase flows around ships very accurately. 
      <br/> 
      </Typography>

      <Typography gutterBottom variant='h6'> 
      Variational Multiscale Methods (VMS) for Turbulent Incompressible Navier-Stokes Equation on Time-Dependent Domains
      </Typography>

      <Typography gutterBottom>
    supported by Department of Higher Education, MHRD, India
      
      </Typography>
    
      <Typography gutterBottom>
      The aim of this project is to develop computationally efficient finite element scheme to study the liquid metal flow and heat transfer behind a cylinder in a duct under the presence of a strong axial magnetic field. The targeted application of the proposed project is to investigate the behaviour of liquid metal blanket used in nuclear fusion reactor (such as International Thermonuclear Experiment reactor) to transfer heat from main core to the turbines.

      <br/>
      <Button variant="text">More Details</Button> 
      <br/>
      The mathematical model consists of Magnetohydrodynamics (MHD) equations that involves time-dependent Navier-stokes equations and Maxwell’s equations of electromagnetism. To calculate heat transfer convection-diffusion equation is coupled with MHD equations. The PDEs are discretized by finite elements in space and by a fraction step-theta scheme in time. Further, for simulating the flow with high Reynolds number, a projection based variational multiscale scheme (VMS) is used. The VMS allows the separation of entire range of scales in the flow field into three groups enabling different numerical treatment for different groups.<br/>
      <br/>
      The developed scheme can be used to study the effect on heat transfer in MHD flows. Further, effects on heat transfer due to the introduction of obstacle of various shapes and sizes, inside the duct, can be investigated to efficiently design a nuclear reactor.
      </Typography>
      
      <Typography gutterBottom  variant='h6'> 
       
      Magnetohydrodynamics Flows at High Reynolds Numbers
      </Typography>
      <Typography gutterBottom>
      supported by Department of Higher Education, MHRD, India
      
      </Typography>
    
      <Typography gutterBottom>
      Our interest is to develop a new projection based scheme for scale separation in turbulent flow simulations which is much simpler to implement for various flow problems. More specifically, we planned to extend the variational multiscale methods for moving domains (time-dependent domains) and fluid-structure interactions problems.

      <br/>
      <Button variant="text">More Details</Button> 
      <br/>
      Due to the presence of multitude of scales in turbulent flows, the standard Galerkin approach has severe limitations. Variational multiscale method (VMS) is relatively a new technique that can be used to solve the Navier-Stokes equations accurately for turbulent flows. Much like LES (large eddy simulation), VMS separates flow scales into resolved and unresolved scales, and the effects of the unresolved scales are incorporated into the resolved scales by a turbulence model.      <br/>
      </Typography>
      

    </Container>
  )
}
