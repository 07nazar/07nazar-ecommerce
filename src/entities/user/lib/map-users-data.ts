export type UserTableList = {
  id: {
    id: string;
    name: string;
    sortable: boolean;
    to: string;
    className: string;
    width: string;
  };
  name: {
    name: string;
    sortable: boolean;
    className: string;
    width: string;
  };
  date: {
    name: string;
    sortable: boolean;
    className: string;
    width: string;
  };
  company?: {
    name: string;
    sortable: boolean;
    className: string;
    width: string;
  };
};

type UserData = {
  id: string;
  name: string;
  date: string;
  supplierCompany?: string;
};

export const mapUsersData = (user: unknown): UserTableList => {
  const userData = user as UserData;

  if (!userData || typeof userData !== 'object') {
    throw new Error('Invalid user data');
  }

  const { name, id, date, supplierCompany } = userData;

  if (!id || !name || !date) {
    throw new Error('Missing required product data fields');
  }

  return {
    id: {
      className: 'text-blue/70 mr-1',
      id,
      name: `#${id.substring(0, 5)}`,
      sortable: false,
      to: '',
      width: 'w-1/12',
    },
    name: {
      className: 'whitespace-nowrap overflow-x-scroll scrollbar pr-0.5',
      name,
      sortable: true,
      width: 'w-5/12',
    },
    date: {
      className: 'hover:text-gray-dark duration-200 leading-6 ml-2  ',
      name: date,
      sortable: true,
      width: 'w-2/12',
    },
    company: {
      className: `whitespace-nowrap overflow-x-scroll scrollbar pr-0.5 ${
        !supplierCompany ? 'pl-9' : ''
      }`,
      name: supplierCompany || '-',
      sortable: true,
      width: 'w-3/12',
    },
  };
};
