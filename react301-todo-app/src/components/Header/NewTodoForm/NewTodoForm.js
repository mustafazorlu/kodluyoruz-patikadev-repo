import React from "react";
import { Field, Form, Formik } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../../contexts/TodoContext";


const NewTodoForm = () => {
    const { addTodo } = useTodo();
    return (
        <div>
            <Formik
                initialValues={{
                    text: "",
                }}
                onSubmit={async (values, bag) => {
                    await new Promise((r) => setTimeout(r, 500));
                    addTodo(values.text)

                    console.log(values);
                    bag.resetForm();
                }}
                validationSchema={validationSchema}
            >
                <Form>
                    <Field
                        className="new-todo"
                        placeholder="what needs to be done"
                        autoFocus
                        id="text"
                        name="text"
                    />
                </Form>
            </Formik>
        </div>
    );
};

export default NewTodoForm;
