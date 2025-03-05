const EmployeeCard = ({ employee, onDelete }) => {
    return (
        <div className="border p-5 rounded-lg shadow bg-white">
            <h2 className="text-lg font-bold">{employee.firstName} {employee.lastName}</h2>
            <p>{employee.position}</p>
            <p className="text-sm text-gray-500">{employee.email}</p>

            <button
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => onDelete(employee.id)}
            >
                🗑 Eliminar
            </button>
        </div>
    );
};

export default EmployeeCard;
