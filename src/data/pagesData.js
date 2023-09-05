import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
} from '@mui/icons-material';

const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
};

export const tabsData = () => {
  const tabs = [
    {
      ...tabProps(0),
      label: 'صفحه اصلی',
      icon: <HomeRounded />,
    },
    {
      ...tabProps(1),
      label: 'درباره‌ی من',
      icon: <FaceRounded />,
    },
    {
      ...tabProps(2),
      label: 'رزومه‌ی من',
      icon: <TextSnippetRounded />,
    },
    {
      ...tabProps(3),
      label: 'نمونه‌ی کارهای من',
      icon: <TerminalRounded />,
    },
    {
      ...tabProps(4),
      label: 'نظرات شما',
      icon: <MessageRounded />,
    },
    {
      ...tabProps(5),
      label: 'تماس با من',
      icon: <ConnectWithoutContactRounded />,
    },
  ];

  return tabs;
};
