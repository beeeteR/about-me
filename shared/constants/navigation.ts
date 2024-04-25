export enum ENavigationVisibleItems {
  'home' = 'home',
  'projects' = 'projects',
  'me' = 'me',
  'contact' = 'contact'
}

export type TNavigationVisibleItemsCondition = keyof typeof ENavigationVisibleItems
