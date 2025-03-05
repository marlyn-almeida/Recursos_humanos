import React from "react";
import Sidebar from "../components/Sidebar"; // Asegúrate de que la ruta es correcta

const Home = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar fijo a la izquierda */}
            <Sidebar />

            {/* Contenido Principal ajustado correctamente */}
            <main className="flex-1 flex items-center justify-center bg-gray-100 ml-64">
                <div className="text-center w-full">
                    <h1 className="text-5xl font-bold text-gray-800">
                        Gestión de Recursos Humanos
                    </h1>
                </div>
            </main>
        </div>
    );
};

export default Home;
