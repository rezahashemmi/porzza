import {
  Coffee,
  SchoolRounded,
  DataObjectRounded,
  DomainVerificationRounded,
} from '@mui/icons-material';

export const projectsData = [
  {
    title: 'تعداد چای',
    icon: <Coffee />,
    count: '135',
    color: 'error',
  },
  {
    title: 'پروژه های در حال انجام',
    icon: <DataObjectRounded />,
    count: '225',
    color: 'warning',
  },
  {
    title: 'پروژه های تمام شده',
    icon: <DomainVerificationRounded />,
    count: '410',
    color: 'success',
  },
  {
    title: 'دوره های گذرانده',
    icon: <SchoolRounded />,
    count: '370',
    color: 'info',
  },
];
