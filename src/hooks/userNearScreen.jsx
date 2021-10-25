import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(function () {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined' // verifica si el window.IntersectionObserver es soportado por el navegador.
      ? window.IntersectionObserver
      : import('intersection-observer'))
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) { // observar, recibe una funcion con las entradas del viewport
          if (entries[0].isIntersecting) { // si se esta viendo en el view port, se cambia el estado
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })
  }, [element])

  return [show, element]
}
