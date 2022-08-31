import { useContext } from 'react';
import { EmployeeContext } from '../contexts/employee/state';
export function useEmployee() {
    const context = useContext(EmployeeContext)
    
    return context
}