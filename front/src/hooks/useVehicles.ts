import { useContext } from 'react';
import { VehicleContext } from '../contexts/state';
export function useVehicles() {
    const context = useContext(VehicleContext)
    
    return context
}