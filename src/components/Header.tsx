import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
    const [searchFilter, setSearchFilter] = useState({
        ingredient: '',
        category: ''
    })

    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore((state) => state.categories)
    const searchRecipes = useAppStore((state) => state.searchRecipes)

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setSearchFilter({
            ...searchFilter,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // TODO: Validar
        if (Object.values(searchFilter).includes('')) {
            console.log('Todos los campos son requeridos')
            return
        }

        // consultar las recetas
        searchRecipes(searchFilter)
    }


    return (
        <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div >
                        <img src="/logo.svg" alt="logotipo" className="w-32" />
                    </div>

                    <nav className="flex gap-4">
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 font-bold uppercase"' : 'text-white font-bold uppercase"'
                            }
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to='/favoritos'
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 font-bold uppercase"' : 'text-white font-bold uppercase"'
                            }
                        >
                            Favoritos
                        </NavLink>
                    </nav>
                </div>

                {isHome && (
                    <form action=""
                        className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div className="space-y-4">
                            <label
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Nombre o ingredientes</label>
                            <input
                                type="text"
                                name="ingredient"
                                id="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe"
                                onChange={handleChange}
                                value={searchFilter.ingredient} />
                        </div>

                        <div className="space-y-4">
                            <label
                                htmlFor="category"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Categoría</label>
                            <select
                                name="category"
                                id="category"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                onChange={handleChange}
                                value={searchFilter.category}
                            >
                                <option value="">----Seleccione----</option>
                                {categories.drinks.map(category => (
                                    <option
                                        value={category.strCategory}
                                        key={category.strCategory}
                                    >
                                        {category.strCategory}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <input type="submit"
                            value={'Buscar Recetas'}
                            className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                        />
                    </form>
                )}
            </div>

        </header>
    )
}
