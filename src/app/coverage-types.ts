export type Brand<A, B> = A & { __brand: B };
export type UserId = Brand<string, 'UserId'>;
export type OrganizationId = Brand<number, 'OrganizationId'>;
export type RoleId = Brand<number, 'RoleId'>;
export type CoverageId = Brand<number, 'CoverageId'>;
export type Email = Brand<string, 'Email'>;

export type Gender = | 'M' | 'F';

export type Role = {id: RoleId, role: string };

export type Organization = {
  id: OrganizationId,
  name: string
};

export type User = {
 // user_info: number,
  user_id: UserId
  first_name: string,
  middle_name: string,
  last_name: string,
  preferred_name: string,
  full_name: string,
  gender: Gender,
  work_phone: string,
  mobile_phone: string,
  email: Email,
  hire_date: string, // DateTime
  termination_date: string, // DateTime
  last_day_in_office: string, // DateTime
  employee_class: string,
  contingent_worker: string, // bit?
  business_unit: string,
  company: string,
  country_code: string,
  country: string,
  location: string,
  area_code: string,
  area_name: string,
  department_code: string,
  department_name: string,
  group_code: string,
  group_name: string,
  job_family: string,
  job_title: string,
  manager: string,
  manager_email: string
};

export type Coverage = {
  id: CoverageId,
  email: Email,
  organization: OrganizationId,
  role: RoleId
};

export type CoverageWanted = { id: CoverageId, role: Role };

export type WantedDataStructure = {
  organization: Organization
  user: { userId: UserId, fullName: string }
  coverages: CoverageWanted[]
};
