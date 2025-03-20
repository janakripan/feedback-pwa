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
    <div className="p-4 w-full max-w-screen-xl h-full min-h-screen mx-auto flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Submit Feedback</h2>
      
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
          <Form className="mt-4 w-full md:w-8/12 lg:w-6/12  ">
           
            <div className="mb-4 rounded-lg">
              <Field
                type="text"
                name="name"
                placeholder="Your Name"
                className="border  border-blue-400 bg-[#f8fcff]  p-2 w-full focus:outline-blue-500  rounded-lg"
              />
              <ErrorMessage name="name" component="p" className="text-red-500" />
            </div>

           
            <div className="mb-4 rounded-lg">
              <Field
                as="textarea"
                name="message"
                placeholder="Your Message"
                className="border border-blue-400 bg-[#f8fcff]  p-2 w-full focus:outline-blue-500 rounded-lg"
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
      
    </div>
  );
};

export default Home;