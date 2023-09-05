import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  fullName: Yup.string().required('نام و نام خانوادگی الزامی است.'),
  email: Yup.string()
    .required('آدرس ایمیل الزامی الزامی است.')
    .email('آدرس ایمیل معتبر نیست.'),
  subject: Yup.string().required('نوشتن عنوان الزامی است.'),
  message: Yup.string().required('نوشتن پیام الزامی است.'),
  recaptcha: Yup.string().required('.کپچا الزامی است'),
});
