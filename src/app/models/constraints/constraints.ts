import {Constraint} from "./constraint";

export class Constraints {

  static readonly DOCUMENT_TYPE: Constraint[] = [
    {name: "CEDULA", value: "CC"},
    {name: "IDENTITY_CARD", value: "TI"},
    {name: "FOREIGN_CARD", value: "CE"},
    {name: "PASSPORT", value: "PA"},
    {name: "OTHER", value: "OTHER"},
  ]

  static readonly GENDER: Constraint[] = [
    {name: "MALE"},
    {name: "FEMALE"},
    {name: "OTHER"},
  ]

  static readonly BLOOD_TYPE: Constraint[] = [
    {name: "A_POSITIVE", value: "A+"},
    {name: "A_NEGATIVE", value: "A-"},
    {name: "B_POSITIVE", value: "B+"},
    {name: "B_NEGATIVE", value: "B-"},
    {name: "O_POSITIVE", value: "O+"},
    {name: "O_NEGATIVE", value: "O-"},
    {name: "AB_POSITIVE", value: "AB+"},
    {name: "AB_NEGATIVE", value: "AB-"},
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
    {name: "STRATUM_ONE", value: 1},
    {name: "STRATUM_SIX", value: 6}
  ]

  static readonly MARITAL_STATUS: Constraint[] = [
    {name: "SINGLE"},
    {name: "MARRIED"},
  ]
}
