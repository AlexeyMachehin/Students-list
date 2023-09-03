/* eslint-disable @typescript-eslint/no-namespace */
export enum Specialities {
  Kb = 'kb',
  Kn = 'kn',
  Mt = 'mt',
}

export namespace Specialities {
  const TO_TITLE_MAP: Record<Specialities, string> = {
    [Specialities.Kb]: 'Компьютерная безопасность',
    [Specialities.Kn]: 'Компьютерные науки',
    [Specialities.Mt]: 'Математика',
  };

  export function toReadonly(option: Specialities): string {
    return TO_TITLE_MAP[option];
  }
}
