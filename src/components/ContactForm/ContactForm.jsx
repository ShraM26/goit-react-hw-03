 import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';



const ContactForm = ({initialValues, validationSchema, handleSubmit, nameFieldId, numberFieldId}) => {
   
    return (
        <>
             <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit} 
    >
      {() => (
            <Form className={css.Form}>
          <div className={css.cntInp}>
          <label className={css.text} htmlFor={nameFieldId}>Name</label>
          <Field className={css.input}
            type="text"
            id={nameFieldId}
            name="name"
            placeholder="Monica Bellucci"
          />
            <ErrorMessage className={css.error} name="name" component="span" />
            </div>
            <div className={css.cntInp}>
          <label className={css.text} htmlFor={numberFieldId}>Number</label>
          <Field className={css.input}
            type="text"
            id={numberFieldId}
            name="number"
            placeholder="999-99-99"
          />
            <ErrorMessage className={css.error} name="number" component="span" />
            </div>    
          <button className={css.addBtn} type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
        </>
    );
};

export default ContactForm;