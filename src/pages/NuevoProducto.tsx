
const NuevoProducto = () => {
    return (
        <>
            <div className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-2 text-gray-700 text-m font-bold mb-2">
                    <p>Nuevo Producto</p>
                </div>
                <form className="grid grid-cols-2 gap-4 ">
                    <div className="mb-4">
                        <label 
                            className="
                            block 
                            text-gray-700 
                            text-sm 
                            font-bold 
                            mb-2">
                            Nombre
                        </label>
                        <input 
                            className="
                                shadow 
                                appearance-none 
                                border rounded 
                                w-full py-2 px-3 
                                text-gray-700 
                                leading-tight 
                                focus:outline-none 
                                focus:shadow-outline" 
                            id="username" 
                            type="text" 
                            placeholder="Cheetos"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Descripcion
                        </label>
                        <input 
                            className="
                                shadow 
                                appearance-none 
                                border rounded 
                                w-full py-2 px-3 
                                text-gray-700 
                                leading-tight 
                                focus:outline-none 
                                focus:shadow-outline" 
                            id="username" 
                            type="text" 
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Existencias
                    </label>
                    <input 
                        className="
                            shadow 
                            appearance-none 
                            border rounded 
                            w-full py-2 px-3 
                            text-gray-700 
                            leading-tight 
                            focus:outline-none 
                            focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Username"
                    />
                    </div>
                    <div className="mb-4">
                    <label 
                        className="
                            block 
                            text-gray-700 
                            text-sm 
                            font-bold mb-2"
                    >
                        precio
                    </label>
                    <input 
                        className="
                            shadow 
                            appearance-none 
                            border rounded 
                            w-full py-2 px-3 
                            text-gray-700 
                            leading-tight 
                            focus:outline-none 
                            focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Username"
                    />
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            className="
                                bg-blue-500 
                                hover:bg-blue-700 
                                text-white 
                                font-bold py-2 
                                px-4 rounded 
                                focus:outline-none 
                                focus:shadow-outline" 
                            type="button"
                        >
                            Crear
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NuevoProducto