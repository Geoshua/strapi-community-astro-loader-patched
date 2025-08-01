import { Loader } from 'astro/loaders';

/**
 * Creates a Strapi content loader for Astro
 * @param contentType The Strapi content type to load
 * @returns An Astro loader for the specified content type
 */
interface StrapiLoaderOptions {
    contentType: string;
    strapiUrl?: string;
    syncInterval?: number;
    params?: object;
    pageSize?: number;
}
declare function strapiLoader({ contentType, strapiUrl, syncInterval, params, pageSize, }: StrapiLoaderOptions): Loader;

export { strapiLoader };
