import { useState, useMemo } from 'react';
import {
  SimulationParams,
  SimulationOutput,
  calculateDssSimulation,
  RESIDUE_OPTIONS,
  SNI_MUTU_SPECS,
} from '../models/silica.model';

export function useSimulationController() {
  const [selectedResidueId, setSelectedResidueId] = useState<string>('xerogel');
  const [substitutionRate, setSubstitutionRate] = useState<number>(8); // 8% default from study case
  const [targetMutu, setTargetMutu] = useState<'A' | 'B' | 'C' | 'D'>('B');
  const [dailyCapacity, setDailyCapacity] = useState<number>(5000);
  const [sellingPricePerM2, setSellingPricePerM2] = useState<number>(80000);
  const [isPassportOpen, setIsPassportOpen] = useState<boolean>(false);

  const simulationParams: SimulationParams = useMemo(
    () => ({
      selectedResidueId,
      substitutionRate,
      targetMutu,
      dailyCapacity,
      sellingPricePerM2,
    }),
    [selectedResidueId, substitutionRate, targetMutu, dailyCapacity, sellingPricePerM2]
  );

  const calculation: SimulationOutput = useMemo(
    () => calculateDssSimulation(simulationParams),
    [simulationParams]
  );

  const resetParams = () => {
    setSelectedResidueId('xerogel');
    setSubstitutionRate(8);
    setTargetMutu('B');
    setDailyCapacity(5000);
    setSellingPricePerM2(80000);
  };

  const openPassport = () => setIsPassportOpen(true);
  const closePassport = () => setIsPassportOpen(false);

  return {
    selectedResidueId,
    setSelectedResidueId,
    substitutionRate,
    setSubstitutionRate,
    targetMutu,
    setTargetMutu,
    dailyCapacity,
    setDailyCapacity,
    sellingPricePerM2,
    setSellingPricePerM2,
    isPassportOpen,
    openPassport,
    closePassport,
    resetParams,
    calculation,
    residueOptions: RESIDUE_OPTIONS,
    sniSpecs: SNI_MUTU_SPECS,
  };
}
