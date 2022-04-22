import React from "react";

function Feature3() {
  return (
    <>
      <div className="course-three section-one">
        <h1 className="course-three-main-header">Parallel Computing for FEM</h1>
        <h1 className="course-three-second-header">
          Parallel Computing for Finite Element Methods : DS 323 (Aug) 1:1
        </h1>

        <p>
          This course will provide an introduction to parallel finite element
          data structure and its efficient implementation in ParMooN (Parallel
          Mathematics and object oriented Numerics), an open source parallel
          finite element package. Further, the implementation of the parallel
          (MPI/OpenMPI) geometric multigrid solver will also be taught. Parallel
          finite element solution of scalar and incompressible Navier-Stokes
          equations in two- and three-dimensions using ParMooN
          (cmg.cds.iisc.ac.in/parmoon/) will also be a part of this course.
        </p>
      </div>

      <div className="course-three section-two">
        <h2 className="section-three-third-header">Topics</h2>

        <p>
          Introduction to parallel computer architectures, Message Passing
          Interface (MPI) and OpenMPI, hybrid (MPI/OpenMPI) concepts. Basics of
          finite element methods, hierarchical mesh partition/decomposition,
          scalable solvers/smothers (Jacobi, Gauss-Seidel, SOR, Vanka-type) and
          parallel geometric multigrid solver/preconditioner, parallel
          visualization using ParaView/VTK.
        </p>

        <p>
          <span className="weight">Prerequisites:</span>Good knowledge of finite
          element methods and C/C++.
          <span className="weight">Reference Text books:</span>
          <br />
          1. Sashikumaar Ganesan, Lutz Tobiska: Finite elements: Theory and
          Algorithms, Cambridge-IISc Series, Cambridge University Press, 2017
          <br />
          2. An Introduction to Parallel Programming. Peter S Pacheco.
          Publisher: Morgan Kauffman. ISBN: 978-93-80931-75-3. 2011 Cuurent
          literature
          <br />
        </p>

        <h2 className="section-third-header">Course information</h2>
        <p>
          <span className="weight">Title:</span>
          Parallel Computing for Finite Element Methods : DS 323 (1:1)
          <br />
          <span className="weight">Instructor: </span>
          Prof. Sashikumaar Ganesan, CDS
          <br />
          <span className="weight">
            Finite Elements: Theory and Algorithms : DS 291 (3:1)
          </span>
          <br />
          <span className="weight">Time/Place: </span>
          MW 10:00-11:00 am / CDS Lecture Hall 202
          <br />
          <span className="weight">Office hours:</span>
          F 12 noon -1 pm
          <br />
          <span className="weight">Grading: </span>
          Assignments 25%, Midterm Exam 25% and Final Exam 50%.
          <br />
          <h2 className="section-third-header">Class Notes</h2>
          <p>Introduction to Computational Science</p>
          <p>Basics of Message Passing Interface (MPI)</p>
        </p>
      </div>
      
      <div className="footer">
        Copyright © 2022 Computational Mathematics Group (CMG). All rights
        reserved.
      </div>
    </>
  );
}

export default Feature3;
