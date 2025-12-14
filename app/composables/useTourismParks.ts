import type { Park } from '~/types/park'
import { PARKS_DATA } from '~/data/parksData'

/**
 * Composable for accessing parks with tourism-specific URLs
 * Uses shared parks data source to maintain DRY principle
 */
export const useTourismParks = () => {
  const parks: Park[] = PARKS_DATA.map(park => ({
    id: park.id,
    name: park.name,
    image: park.image,
    url: park.tourismUrl
  }))

  return {
    parks
  }
}
