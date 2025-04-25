import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface SupabaseImage {
  name: string;
  url: string;
}

const SupabaseGallery: React.FC = () => {
  const [images, setImages] = useState<SupabaseImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        // List all images in the 'public' bucket (change bucket if needed)
        const { data, error } = await supabase.storage.from('public').list('', { limit: 100 });
        if (error) throw error;
        if (data) {
          const urls = await Promise.all(
            data
              .filter((file: any) => file.name.match(/\.(jpg|jpeg|png|gif|webp)$/i))
              .map(async (file: any) => {
                const { data: urlData } = supabase.storage.from('public').getPublicUrl(file.name);
                return { name: file.name, url: urlData.publicUrl };
              })
          );
          setImages(urls);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load images');
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (loading) return <div className="text-center py-10">Loading images...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (images.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Supabase Image Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map(img => (
            <div key={img.name} className="rounded overflow-hidden shadow bg-white">
              <img src={img.url} alt={img.name} className="w-full h-48 object-cover" />
              <div className="p-2 text-center text-xs text-gray-600">{img.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupabaseGallery;
