export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const // significa que son variables constantes de SOLO LECTURA

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'Todos',
    href: `/filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: `/filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completos',
    href: `/filter=${TODO_FILTERS.COMPLETED}`
  }
} as const // significa que son variables constantes de SOLO LECTURA
