import React from "react";

const Home = () => {
    return (
        <div className="flex h-screen">
            {/* Contenido Principal correctamente centrado */}
            <main className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800">
                        Gestión de Recursos Humanos
                    </h1>
                </div>
            </main>
        </div>
    );
};

export default Home;
