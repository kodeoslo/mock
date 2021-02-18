import {
  Coverage,
  CoverageId,
  Email,
  Organization,
  OrganizationId,
  Role,
  RoleId,
  User,
  UserId,
  WantedDataStructure
} from './coverage-types';

const randomString = () => Math.random().toString(36).substring(7);

const ORGANIZATIONS: Organization[] = [
  { id: 1 as OrganizationId, name: 'Apple' },
  { id: 2 as OrganizationId, name: 'AAR Corp' },
  { id: 3 as OrganizationId, name: 'Abbott Laboratories' },
  { id: 4 as OrganizationId, name: 'Aegon NV' },
  { id: 5 as OrganizationId, name: 'Advanced Micro Devices Inc' }
];

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export const ROLES: Role[] = [
  { id: 1 as RoleId, role: 'Interest' },
  { id: 2 as RoleId, role: 'Voting' },
  { id: 3 as RoleId, role: 'Active ownership responsible' },
  { id: 4 as RoleId, role: 'Portfolio' },
  { id: 4 as RoleId, role: 'Excluded by council of ethics' },
  { id: 5 as RoleId, role: 'Coverage responsible' },
  { id: 6 as RoleId, role: 'Sustainability initiatives responsible' },
  { id: 7 as RoleId, role: 'Research List' }];

export const USERS: User[] = [...Array(100000).keys()].map(id => {
    return {
      user_id: id.toString() as UserId,
      first_name: randomString(),
      middle_name: randomString(),
      last_name: randomString(),
      preferred_name: randomString(),
      full_name: randomString(),
      gender: 'M',
      work_phone: randomString(),
      mobile_phone: randomString(),
      email: randomString() as Email,
      hire_date: randomString(),
      termination_date: randomString(),
      last_day_in_office: randomString(),
      employee_class: randomString(),
      contingent_worker: randomString(),
      business_unit: randomString(),
      company: ORGANIZATIONS[getRandomInt(0, 4)].name,
      country_code: randomString(),
      country: randomString(),
      location: randomString(),
      area_code: randomString(),
      area_name: randomString(),
      department_code: randomString(),
      department_name: randomString(),
      group_code: randomString(),
      group_name: randomString(),
      job_family: randomString(),
      job_title: randomString(),
      manager: randomString(),
      manager_email: randomString()
    };
  })
;

export const COVERAGES: Coverage[] = USERS.map(user => {
  return {
    id: parseInt(user.user_id, 10) as CoverageId,
    email: user.email,
    organization: ORGANIZATIONS[getRandomInt(0, 4)].id,
    role: ROLES[getRandomInt(0, 6)].id
  };
});

export const WANTED_DATASTRUCTURE: WantedDataStructure[] = USERS.map(user => {
  return {
    organization: ORGANIZATIONS[getRandomInt(0, 4)],
    user: {userId: user.user_id, fullName: user.full_name},
    coverages: [
      {
        id: parseInt(user.user_id, 10) as CoverageId,
        role: ROLES[getRandomInt(0, 6)]
      }
    ]
  };
});
