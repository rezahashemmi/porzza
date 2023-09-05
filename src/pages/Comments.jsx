import { Helmet } from 'react-helmet-async';
import { Comment } from '../components/page';
import { Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Comments = ({ pageTitle }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100vh',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <CardContent>
        <Comment />
      </CardContent>
    </Card>
  );
};

export default Comments;
