import { useFormik } from 'formik';
import { useTheme } from '@mui/material/styles';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  TextField,
  InputAdornment,
  CardActions,
  Button,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from '@mui/icons-material';
import { contactSchema } from '../../validations/contactValidation';

const ContactForm = () => {
  const theme = useTheme();
  const contactInputNames = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
    recaptcha: '',
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log('formValues:', values);
    },
    validationSchema: contactSchema,
  });

  return (
    <form autoComplete='off' onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={2}
        sx={{ direction: 'ltr', backgroundColor: 'transparent' }}
      >
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            size='small'
            color='success'
            sx={{
              '& .MuiInputLabel-root': {
                color:
                  theme.palette.mode === 'light'
                    ? 'text.primary'
                    : 'text.secondary',
              },
            }}
            label='نام و نام خانوادگی'
            name='fullName'
            variant='outlined'
            helperText={formik.touched.fullName ? formik.errors.fullName : null}
            error={Boolean(formik.touched.fullName && formik.errors.fullName)}
            value={formik.values?.fullName}
            onChange={formik.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Face6Rounded />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            fullWidth
            size='small'
            color='success'
            sx={{
              '& .MuiInputLabel-root': {
                color:
                  theme.palette.mode === 'light'
                    ? 'text.primary'
                    : 'text.secondary',
              },
            }}
            label='آدرس ایمیل'
            name='email'
            variant='outlined'
            helperText={formik.touched.email ? formik.errors.email : null}
            error={Boolean(formik.touched.email && formik.errors.email)}
            value={formik.values?.email}
            onChange={formik.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <EmailRounded />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid xs={12} md={12}>
          <TextField
            size='small'
            color='success'
            sx={{
              '& .MuiInputLabel-root': {
                color:
                  theme.palette.mode === 'light'
                    ? 'text.primary'
                    : 'text.secondary',
              },
            }}
            label='عنوان'
            name='subject'
            variant='outlined'
            helperText={formik.touched.subject ? formik.errors.subject : null}
            error={Boolean(formik.touched.subject && formik.errors.subject)}
            value={formik.values?.subject}
            onChange={formik.handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <SubjectRounded />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid xs={12} md={12}>
          <TextField
            fullWidth
            multiline
            rows={6}
            size='small'
            color='success'
            sx={{
              '& .MuiInputLabel-root': {
                color:
                  theme.palette.mode === 'light'
                    ? 'text.primary'
                    : 'text.secondary',
              },
            }}
            label='متن پیام'
            name='message'
            variant='outlined'
            helperText={formik.touched.message ? formik.errors.message : null}
            error={Boolean(formik.touched.message && formik.errors.message)}
            value={formik.values?.message}
            onChange={formik.handleChange}
          />
        </Grid>
      </Grid>
      <CardActions
        sx={{
          alignItems: 'end',
          flexDirection: 'column',
        }}
      >
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          theme={theme.palette.mode}
          hl='fa'
          onChange={(value) => {
            formik.setFieldValue('recaptcha', value);
          }}
        />
        {formik.errors.recaptcha && formik.touched.recaptcha && (
          <Typography variant='caption' color='error'>
            {formik.errors.recaptcha}
          </Typography>
        )}
        <Button type='submit' color='success' variant='contained' fullWidth>
          ارسال کن
        </Button>
      </CardActions>
    </form>
  );
};

export default ContactForm;
