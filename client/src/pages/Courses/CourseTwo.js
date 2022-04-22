import React from "react";

function Feature2() {
  return (
    <>
      <div className="course-two section-one">
        <h1 className="section-main-header">FEM</h1>
        <h1 className="section-second-header">
          Finite elements : Theory and Algorithms : DS 291 (Aug) 3:1
        </h1>

        <p>
          Course Homepage :
          https://indianinstituteofscience.sharepoint.com/sites/nmsc
          <br />
          Lecture Videos :
          https://web.microsoftstream.com/embed/channel/9c1e6137-f0a8-4f15-976f-21a004e69c20?sort=trending
        </p>

        <p>
          Note : Used needs to have access to an Microsoft Account in order to
          access these materials.
          <br />
          This course will provide an introduction to the finite element methods
          and their applications to the scalar convection diffusion equations
          and to the Navier-Stokes equations. The course will cover the basic
          mathematical theory of the finite element methods, and the development
          of fully practical finite element algorithms for solving partial
          differential equations elliptic and parabolic scalar PDES, linear
          elasticity, Mindlin-Reissner plate problem, Navier-Stokes equations.
          Further, the lab component will consists of programming assignments
          including the implementation of the finite element algorithms, solving
          scalar and Navier-Stokes equations using the in-house package ParMooN.
        </p>
        <br />
      </div>

      <div className="course-two section-two">
        <h2 className="section-third-header">Topics</h2>

        <p>
          Generalized (weak) derivatives, Sobolev norms and associated spaces,
          inner-product spaces, Hilbert spaces, construction of finite element
          spaces, mapped finite elements, two- and three-dimensional finite
          elements, Interpolation and discretization error, variational
          formulation of second order elliptic boundary value problems, finite
          element algorithms and implementation for linear elasticity,
          Mindlin-Reissner plate problem, two-dimensional stationary
          incompressible Navier-Stokes equations systems in fluid mechanics.
        </p>

        <p>
          <span className="weight">Prerequisites:</span>Good knowledge of
          numerical analysis and/or consent from the instructor.
          <span className="weight">Reference Text books:</span>
          <br />
          1. Sashikumaar Ganesan, Lutz Tobiska: Finite elements: Theory and
          Algorithms, Cambridge-IISc Series, Cambridge University Press, 2017.
          <br />
          2. Dietrich Braess, Finite Elements: Theory, Fast Solvers, and
          Applications in Solid Mechanics, Cambridge University Press, 3rd ed.,
          2007.
          <br />
        </p>
        <h2 className="section-third-header">Course information</h2>
        <p>
          <span className="weight">Title:</span>
          Finite Elements: Theory and Algorithms : DS 291 (3:1)
          <br />
          <span className="weight">Instructor: </span>
          Prof. Sashikumaar Ganesan, CDS
          <br />
          <span className="weight">
            Finite Elements: Theory and Algorithms : DS 291 (3:1)
          </span>
          <br />
          <span className="weight">Time/Place: </span>
          TTH 8:30-10:00 am / CDS Lecture Hall 202
          <br />
          <span className="weight">Office hours:</span>
          F 10 -12 am
          <br />
          <span className="weight">Grading: </span>
          Assignments 25%, Midterm Exam 25% and Final Exam 50%.
          <br />
          <span className="weight">Grading: </span>
          There will be three assignments and most of the assignment problems
          require computer programming. Matlab/Fortran/C/C++ can be used. Late
          submission (beyond the deadline) of assignment will result in zero
          credit.
          <br />
          <span className="weight">Midterm/Final Exam: </span>
          Both midterm and final written exams will examine the understanding of
          the finite element theory and algorithms. Students will NOT be allowed
          to carry any text materials for both midterm and final exams.
          <br />
        </p>
      </div>

      <div className="footer">
        Copyright © 2022 Computational Mathematics Group (CMG). All rights
        reserved.
      </div>
    </>
  );
}

export default Feature2;
