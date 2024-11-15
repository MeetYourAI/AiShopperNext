export const generateSlug: any = (name: string) =>
  name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '').replace(/®/g, '');
