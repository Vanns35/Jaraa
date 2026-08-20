import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "heroSlides": z.array(z.object({
        "src": z.string(),
        "alt": z.string(),
        "headline": z.string(),
        "sub": z.string(),
        "id": z.string()
      })),
      "products": z.array(z.object({
        "emoji": z.string(),
        "name": z.string(),
        "price": z.string(),
        "teaser": z.string(),
        "src": z.string(),
        "alt": z.string(),
        "badge": z.string(),
        "id": z.string()
      }))
    }),
    how_it_works: z.object({
      "steps": z.array(z.object({
        "number": z.string(),
        "title": z.string(),
        "description": z.string(),
        "image": z.string(),
        "alt": z.string(),
        "color": z.string(),
        "id": z.string()
      })),
      "faqs": z.array(z.object({
        "q": z.string(),
        "a": z.string(),
        "id": z.string()
      })),
      "testimonials": z.array(z.object({
        "name": z.string(),
        "city": z.string(),
        "text": z.string(),
        "stars": z.number(),
        "id": z.string()
      }))
    }),
    shop: z.object({
      "priceTiers": z.array(z.object({
        "emoji": z.string(),
        "name": z.string(),
        "price": z.string(),
        "priceNum": z.number(),
        "src": z.string(),
        "alt": z.string(),
        "badge": z.string(),
        "badgeColor": z.string(),
        "pieces": z.string(),
        "contents": z.array(z.string()),
        "teaser": z.string(),
        "id": z.string()
      })),
      "occasions": z.array(z.object({
        "id": z.string(),
        "emoji": z.string(),
        "name": z.string(),
        "subtitle": z.string(),
        "src": z.string(),
        "alt": z.string(),
        "description": z.string(),
        "tag": z.string(),
        "tagColor": z.string(),
        "highlight": z.string()
      }))
    }),
    about: z.object({
      "values": z.array(z.object({
        "emoji": z.string(),
        "title": z.string(),
        "desc": z.string(),
        "id": z.string()
      }))
    })
  }
};
export type Schemas = typeof schemas;