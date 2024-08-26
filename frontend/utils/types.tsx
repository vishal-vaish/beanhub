type BurgerCustomizationOption = {
  label: string;
  price: number;
};

type BurgerCustomization = {
  [key: string]: {
    type: "checkbox" | "select";
    label: string;
    price?: number;
    options?: BurgerCustomizationOption[];
  };
};

type PizzaCustomizationOption = {
  label: string;
  price: number;
};

type PizzaCustomization = {
  [key: string]: {
    type: "checkbox" | "select";
    label: string;
    price?: number;
    options?: PizzaCustomizationOption[];
  };
};

export type Pizza = {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  rating: number;
  image: string;
  available: boolean;
  customizations: PizzaCustomization;
};


export type Burger = {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  rating: number;
  image: string;
  available: boolean;
  customizations: BurgerCustomization;
};

type MomoCustomizationOption = {
  label: string;
  price: number;
};

type MomoCustomization = {
  [key: string]: {
    type: "checkbox" | "select";
    label: string;
    price?: number;
    options?: MomoCustomizationOption[];
  };
};

export type Momo = {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  rating: number;
  image: string;
  available: boolean;
  customizations: MomoCustomization;
};


type ItemsType = {
  burger?: Burger[];
  pizza?: Pizza[];
  momos?: Momo[];
};

export type ItemCardTypes = {
  id: string;
  cafeName: string;
  closed: boolean;
  rating: number;
  distance: string;
  items: ItemsType;
  images:string[];
}