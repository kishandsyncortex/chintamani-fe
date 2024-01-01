import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {  toast } from 'react-toastify';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const apiPath = {
  categories:{
    all:"category/getall",
    product:"product/product",
    
  },
  color:{
    all:"color/fetch"
  },
  cuts:{
    all:"cut/fetch"
  },
  clarity:{
    all:"clarity/fetch"
  }
}

export const showToast =(msg:string) => {
  toast(msg);
}