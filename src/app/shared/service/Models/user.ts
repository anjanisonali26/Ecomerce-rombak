export interface User {
  _id: String;
  email: String;
  name: String;
  password: String;
  firstname: String;
  lastname: String;
  age: String;
  address: String;
}
export interface UpdateUser {
  name: string;
  password: string;
  firstname: string;
  lastname: string;
  age: string;
  address: string;
}
export interface addressUser {
  country: string;
  province: string;
  city: string;
  district: string;
  village: string;
  phone: number;
  zip: number;
}
