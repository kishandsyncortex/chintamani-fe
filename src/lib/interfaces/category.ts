export interface Category {
    id: string;
    description: string;
    name: string;
    status: number;
    subCategories: [];
    createdAt: string;
    updatedAt: string;
  }

export interface subCategory {
    id: string;
    description: string;
    name: string;
    status: number;
    image?:any
    innerCategories?: [];
    createdAt: string;
    updatedAt: string;
  }


  export interface breadCrumbType{
    id:string;
    name:string;
   path:string;

  }


  export interface diamondProperty {
    id:string;
    name:string;
    createdAt: string;
    updatedAt: string;
  }