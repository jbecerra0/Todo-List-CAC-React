const List = ({ tasks, deleteTask, changeCompleted }) => {
    return (
        tasks.length > 0 && (
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Completed</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(({ id, title, completed }, index) => (
                        <tr key={id}>
                            <th scope="row">{index + 1}</th>
                            <td>{title}</td>
                            <td className="text-center">
                                <button
                                    type="button"
                                    className="btn btn-outline-light"
                                    onClick={() => changeCompleted(id)}
                                >
                                    {completed ? (
                                        <span className="material-symbols-outlined">
                                            done
                                        </span>
                                    ) : (
                                        <span className="material-symbols-outlined">
                                            close
                                        </span>
                                    )}
                                </button>
                            </td>
                            <td>
                                <div className="btn-group" role="group">
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={() => console.log("edit")}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => deleteTask(id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    );
};

export default List;
