import { Box } from '@mui/material';

const Page = (props) => {
  const { children, pageNumber, index, ...others } = props;

  return (
    <div
      role='tabpanel'
      hidden={pageNumber !== index} // If page number and index are different don't show anything.
      id={`tabPanel-${index}`}
      aria-label={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber === index && (
        <Box sx={{ overflow: 'hidden' }}>{children}</Box>
      )}
    </div>
  );
};

export default Page;
