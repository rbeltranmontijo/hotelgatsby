import { useStaticQuery, graphql } from "gatsby"

const useHabitaciones = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacione {
        nodes {
          titulo
          id
          slug
          contenido
          imagen {
            fluid(maxHeight: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  console.log(data)
}

export default useHabitaciones
