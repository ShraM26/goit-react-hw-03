 import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';



const ContactForm = ({initialValues, validationSchema, handleSubmit}) => {
   
    return (
        <>
             <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit} 
    >
      {() => (
        <Form className={css.cntForm}>
          <label className={css.text} htmlFor="name">Name</label>
          <Field className={css.input}
            type="text"
            id="name"
            name="name"
            placeholder="Monica Bellucci"
          />
          <ErrorMessage className={css.error} name="name" component="span" />

          <label className={css.text} htmlFor="number">Number</label>
          <Field className={css.input}
            type="text"
            id="number"
            name="number"
            placeholder="999-99-99"
          />
            <ErrorMessage className={css.error} name="number" component="span" />

          <button className={css.addBtn} type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
        </>
    );
};

export default ContactForm;