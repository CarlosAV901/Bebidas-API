# Notas Generales

## React Router

Debemos de crear el archivo llamado `router.tsx`

```Sintaxis basica
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'/>
            </Routes>
        </BrowserRouter>
    )
}
```

y dentro de nuestro `main.tsx` debemos de renderizar el componente de AppRouter

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   ----> <AppRouter />
  </React.StrictMode>,
)
```

para que nosotros no tengamos que poner un mismo componente en cada ruta, podemos crear un componente llamado `Layout.tsx`, para eso creamos nuestra carpeta de Layouts, ahora, dentro de nuesto componente pondremos lo siguiente

pero antes en el archivo `route.tsx` se deben de encerrar nuestras rutas donde queramos el layout, por ejemplo

```
<BrowserRouter>
    <Routes>  //Aqui slo afecta a estas dos rutas
        <Route element={<Layout />}>
            <Route path='/' element={<IndexPage />} />
            <Route path='/favoritos' element={<FavoritePage />} />
        </Route>
    </Routes>
</BrowserRouter>
```

```
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
    return (
        <>
            <Header />

            <Outlet />
        </>
    )
}
```

`outlet` es el que nos ayuda a que podamos renderizar el el contenido que tenemos en cada componente, y todo lo que este encima o debajo de el se mostrara en todos los componetes que esten rodeados por mi roure

Para navegar no debemos de ocupar la etiqueta `<a></a>` sino la etiqueta de react `<Link to=''> </Link>`

O podemos usar la etiqueta de `<NavLink to=''></NavLink>` esta nos ayuda con la propiedad en className donde vamos a poder resaltar el Link donde este activo el usuario, de la manera siguiente

```
<NavLink
    to='/favoritos'
    className={({ isActive }) =>
        isActive ? 'text-orange-500 font-bold uppercase"' : 'text-white font-bold uppercase"'
    }
>
```

con el hook de useLocation, podemos saber en que path estamos y podemos mostrar u ocultar contenido, dependiendo de donde nos encontremos

```
import { NavLink, useLocation } from "react-router-dom";

const { pathname } = useLocation()

const isHome = useMemo(() => pathname === '/', [pathname])
```

### Podemos manejar distintos estados con Slice Pattern

Consta en un patron de diseño que nos ayuda a manejar los estados de nuestra aplicacion con zustan, se crean multiples store y todos se unen en un archivo principal

``` archivo principal

// ...a lo que hace es tomar una copia de todos los argumentos como set, get, etc.
export const useAppStore = create((...a) => ({
    ...createRecipesSlice(...a)
}))
```
