import { supabase } from './supabase';

export interface Category {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category_id: string;
  category?: Category;
}

export const fetchCategories = async (): Promise<Category[]> => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');
    
  if (error) throw error;
  return data;
};

export const fetchProducts = async (categoryId?: string): Promise<Product[]> => {
  let query = supabase
    .from('products')
    .select(`
      *,
      category:categories(*)
    `);
    
  if (categoryId) {
    query = query.eq('category_id', categoryId);
  }
  
  const { data, error } = await query.order('name');
  if (error) throw error;
  return data;
};

export const fetchProduct = async (id: string): Promise<Product> => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(*)
    `)
    .eq('id', id)
    .single();
    
  if (error) throw error;
  return data;
};