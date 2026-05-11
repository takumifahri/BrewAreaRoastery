import { brewData } from '@/lib/brew-data';
import { BrewMethod } from '@/types/brew';

export class BrewRepository {
  static getAllMethods(): BrewMethod[] {
    return Object.values(brewData) as BrewMethod[];
  }

  static getMethodById(id: string): BrewMethod | undefined {
    return brewData[id as keyof typeof brewData] as BrewMethod | undefined;
  }
}
