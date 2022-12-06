import {Constraint} from "./constraint";

export class Constraints {

  static readonly DOCUMENT_TYPE: Constraint[] = [
    {name: "CEDULA", value: "CC"},
    {name: "IDENTITY CARD", value: "TI"},
    {name: "FOREIGN CARD", value: "CE"},
    {name: "PASSPORT", value: "PA"},
    {name: "OTHER", value: "OTHER"},
  ]

  static readonly GENDER: Constraint[] = [
    {name: "MALE"},
    {name: "FEMALE"},
    {name: "OTHER"},
  ]

  static readonly BLOOD_TYPE: Constraint[] = [
    {name: "A POSITIVE", value: "A+"},
    {name: "A NEGATIVE", value: "A-"},
    {name: "B POSITIVE", value: "B+"},
    {name: "B NEGATIVE", value: "B-"},
    {name: "O POSITIVE", value: "O+"},
    {name: "O NEGATIVE", value: "O-"},
    {name: "AB POSITIVE", value: "AB+"},
    {name: "AB NEGATIVE", value: "AB-"},
  ]

  static readonly VULNERABLE_POPULATION: Constraint[] = [
    {name: "POBLACION_DISCAPACITADA"},
    {name: "POBLACION_INDIGENA"},
    {name: "POBLACION_AFROCOLOMBIANA"},
    {name: "COMUNIDADES_NEGRAS"},
    {name: "POBLACION_PALENQUERA"},
    {name: "POBLACIONES_RAIZALES"},
    {name: "POBLACIONES_PRIVADAS_LIBERTAD"},
    {name: "POBLACIONES_VICTIMAS_TRATA_PERSONAS"},
    {name: "TERCERA_EDAD"},
    {name: "POBLACION_ADOLESCENTES_JOVENES_VULNERABLES"},
    {name: "ADOLESCENTES_CONFLICTO_LEY_PENAL"},
    {name: "POBLACIONES_MUJER_CABEZA_HOGAR"},
    {name: "POBLACIONES_PROCESO_REINCORPORACION"},
    {name: "POBLACIONES_PROCESO_REINTEGRACION"},
    {name: "PUEBLO_RROM"},
    {name: "POBLACIONES_VICTIMAS_ATAQUE_QUIMICO"},
  ]

  static readonly SOCIOECONOMIC_STRATUM: Constraint[] = [
    {name: "STRATUM ONE", value: 1},
    {name: "STRATUM TWO", value: 2},
    {name: "STRATUM THREE", value: 3},
    {name: "STRATUM FOUR", value: 4},
    {name: "STRATUM FIVE", value: 5},
    {name: "STRATUM SIX", value: 6}
  ]

  static readonly MARITAL_STATUS: Constraint[] = [
    {name: "SINGLE"},
    {name: "MARRIED"},
  ]
}
