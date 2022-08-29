import React from "react";
import { Routes, Route } from "react-router-dom";
import { Employee } from "../screens/employee";
import { Home } from "../screens/home";
import { PetrolPump } from "../screens/petrolPump";
import { Vehicle } from "../screens/vehicle";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/petrolPump" element={<PetrolPump />} />
      </Routes>
    </div>
  );
}
