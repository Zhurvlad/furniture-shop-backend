
/*export enum TopLevelCategory {
  Kitchens,
  Bedrooms,
  LivingRooms,
  Hallways,
  OfficeFurniture,
  ChildrenRoom,
  Stocks,
  NewProducts,
  Mattresses,
  SoftFurniture,
  Wardrobe,
}*/

export class TopPageModel {
  firstCategory: TopLevelCategory;
  secondCategory?: string
  title: string
  category: string
}

export enum TopLevelCategory {
  Kitchens,
  Beds,
  Sofas,
  Wardrobes,
  OfficeFurniture,
  ChildrenRoom,
  Sale,
}