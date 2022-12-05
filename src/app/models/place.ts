export interface Place{
  idPlace: number,
  idLocation?: number,
  placeName: string,
  placeType: string,
  places?: Place[]
}
