import { useApi } from "../../contexts/ApiContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";

const Home = () => {
  const { submitFeedback } = useApi();

  
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  return (
    <div className="p-4 w-full max-w-screen-xl mx-auto flex flex-col items-center">
      <h2 className="text-xl font-bold">Submit Feedback</h2>
      
      <Formik
        initialValues={{ name: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setStatus }) => {
          const result = await submitFeedback(values);
          setStatus(result.message);
          resetForm();
        }}
      >
        {({ status }) => (
          <Form className="mt-4 w-full md:w-6/12  ">
           
            <div className="mb-4 rounded-lg">
              <Field
                type="text"
                name="name"
                placeholder="Your Name"
                className="border p-2 w-full rounded-lg"
              />
              <ErrorMessage name="name" component="p" className="text-red-500" />
            </div>

           
            <div className="mb-4 rounded-lg">
              <Field
                as="textarea"
                name="message"
                placeholder="Your Message"
                className="border p-2 w-full rounded-lg"
              />
              <ErrorMessage name="message" component="p" className="text-red-500" />
            </div>

            
            <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded-lg">
              Submit
            </button>

           
            {status && <p className="mt-4 text-green-600">{status}</p>}
          </Form>
        )}
      </Formik>
      <div className="w-fit h-fit bg-blue-600 text-white mt-12 rounded-lg">
        <Link className="p-6" to={"/feedback"}>
        Feedback List
        </Link>
      </div>
    </div>
  );
};

export default Home;