import { useState } from "react";

const Form = ({ addTask }) => {
    const INITIAL_STATE = {
        title: "",
    };
    const [form, setForm] = useState(INITIAL_STATE);

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(form);
        setForm(INITIAL_STATE);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <form className="d-flex flex-row align-items-center mb-4 gap-3" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Enter a title for the task"
                    value={form.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">
                    <span className="material-symbols-outlined">add_task</span>
                </button>
            </div>
        </form>
    );
};

export default Form;
