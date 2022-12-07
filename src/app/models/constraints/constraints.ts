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
    {name: "POBLACION DISCAPACITADA", value: "POBLACION_DISCAPACITADA"},
    {name: "POBLACION INDIGENA", value: "POBLACION_INDIGENA"},
    {name: "POBLACION AFROCOLOMBIANA", value: "POBLACION_AFROCOLOMBIANA"},
    {name: "COMUNIDADES NEGRAS", value: "COMUNIDADES_NEGRAS"},
    {name: "POBLACION PALENQUERA", value: "POBLACION_PALENQUERA"},
    {name: "POBLACIONES RAIZALES", value: "POBLACIONES_RAIZALES"},
    {name: "POBLACIONES PRIVADAS LIBERTAD", value: "POBLACIONES_PRIVADAS_LIBERTAD"},
    {name: "POBLACIONES VICTIMAS TRATA PERSONAS", value: "POBLACIONES_VICTIMAS_TRATA_PERSONAS"},
    {name: "TERCERA EDAD", value: "TERCERA_EDAD"},
    {name: "POBLACION ADOLESCENTES JOVENES VULNERABLES", value: "POBLACION_ADOLESCENTES_JOVENES_VULNERABLES"},
    {name: "ADOLESCENTES CONFLICTO LEY PENAL", value: "ADOLESCENTES_CONFLICTO_LEY_PENAL"},
    {name: "POBLACIONES MUJER CABEZA HOGAR", value: "POBLACIONES_MUJER_CABEZA_HOGAR"},
    {name: "POBLACIONES PROCESO REINCORPORACION", value: "POBLACIONES_PROCESO_REINCORPORACION"},
    {name: "POBLACIONES PROCESO REIN TEGRACION", value: "POBLACIONES_PROCESO_REINTEGRACION"},
    {name: "PUEBLO RROM", value: "PUEBLO_RROM"},
    {name: "POBLACIONES VICTIMAS ATAQUE QUIMICO", value: "POBLACIONES_VICTIMAS_ATAQUE_QUIMICO"},
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
