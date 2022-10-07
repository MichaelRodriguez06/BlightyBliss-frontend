export interface User {
  id?: number,
  full_name?: string,//Para recibir
  document_type?: string,//Para recibir
  document?: string,
  address?: string,
  city?: string,
  phone_number?: string,//Para recibir
  credentialId?: string,//Para recibir email
  password?: string,
}
