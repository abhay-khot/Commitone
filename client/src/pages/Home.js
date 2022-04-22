import React from "react";
import './Home.css'
function Home() {
  return (
    <div className="home-info">
      <div className="home-first-section">
        <h1 className="big-header"> Welcome to <br/>Computational Mathematics Group
</h1> </div> <div>
        Computational Mathematics Group (CMG) at the Department of Computational
        and Data Sciences is under the Division of Interdisciplinary Research at
        Indian Institute of Science Bangalore, India.
        <br />
        We develops accurate, efficient and robust parallel numerical (finite
        element) schemes for solving partial differential equations (PDEs) that
        model several physical and industrial processes. <br />
        Please visit our in-house finite element package ParMooN.
      </div>
      
      

      <div className="home-second-section">
        <h2> CMG </h2>
        <h3 className="home-blue-bg"> Finite Element Analysis:</h3>
        <p>Finite element methods for the solution of PDEs and surface PDEs</p>
        <p>Multi-grid methods, ALE approach for moving meshes</p>
        <p>Splitting methods for high-dimensional (Greater than3) PDEs</p>
        <p>Stability, convergence analysis and error estimates</p>
        <p>Stabilization (SUPG, LPS) and variational multi-scale methods</p>
        <br />

        <h3 className="home-blue-bg"> High Performance Computing:</h3>
        <p>ParMooN, an open-source finite element software development</p>
        <p>Efficient, robust, scalable finite element algorithms</p>
        <p>OpenMP and MPI based hybrid parallel algorithms</p>
        <p>Parallel geometric multi-grid solver</p>
        <br />

        <h3 className="home-blue-bg"> Computational Fluid Dynamics:</h3>
        <p>Free surface and two-phase flows with surfactants and heat transfer</p>
        <p>Complex (viscoelastic) fluid flows</p>
        <p>Flows in reactors, fluid-structure interaction problems</p>
        <p>Flows with boundary and interior layers</p>
        <p>Flows with floating bodies, ship hydrodynamics</p>
        <p>Moving contact line problems, dynamics contact angles</p>
        <p>Population balance systems in crystallizers</p>
        <p>Turbulent flows with moving/deforming solid bodies</p>
        <br />

        <h3 className="home-blue-bg"> Bio-medical Applications:</h3>
        <p>Computational models for eye</p>
        <p>Biophysical model of cancer invasion</p>
        <p>Flow through nasal cavities and respiratory tract</p>
        <p>Terahertz heating effects in realistic tissues</p>

        <br />
      </div>

        <div className="home-footer">
        Copyright © 2022 Computational Mathematics Group (CMG). All rights reserved.
        </div>
    </div>
  );
}

export default Home;
