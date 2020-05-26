import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './../App.scss';
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "./Navbar"
import { ExercisesList } from "./ExercisesList";
import { EditExercise } from "./EditExercise";
import { CreateExercise } from "./CreateExercise";
import { CreateUser } from "./CreateUser";

export const App = () => 
  <Router>
    <div className="container">
      <Navbar />
      <br />
      {/* react router will load the exact component for each path */}
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </div>
  </Router>


