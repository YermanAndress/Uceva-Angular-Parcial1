import { Injectable } from '@angular/core';
import {
  SISTEMA_NIVELES_ATOMICOS,
  SISTEMA_POR_QUE_USAR,
  SISTEMA_PROBLEMAS,
  SISTEMA_QUE_ES,
} from '../../../core/config/sistema.config';
import { SistemaNivel } from '../../../core/interfaces/sistema.interface';

@Injectable({
  providedIn: 'root',
})
export class SistemaService {
  getQueEs(): string[] {
    return SISTEMA_QUE_ES;
  }

  getPorQueUsar(): string[] {
    return SISTEMA_POR_QUE_USAR;
  }

  getProblemas(): string[] {
    return SISTEMA_PROBLEMAS;
  }

  getNivelesAtomicos(): SistemaNivel[] {
    return SISTEMA_NIVELES_ATOMICOS;
  }
}
