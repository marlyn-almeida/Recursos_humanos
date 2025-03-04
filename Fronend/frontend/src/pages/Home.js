import React from "react";

const Home = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-xl font-bold mb-4">Menú</h2>
                <ul>
                    <li className="mb-2">
                        <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                            Opción 1
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                            Opción 2
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                            Opción 3
                        </a>
                    </li>
                </ul>
            </aside>

            {/* Contenido Principal */}
            <main className="flex-1 flex items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold">Gestión de Recursos Humanos</h1>
            </main>
        </div>
    );
};

export default Home;
