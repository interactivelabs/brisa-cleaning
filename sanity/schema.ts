import { SchemaTypeDefinition } from 'sanity';
import menu from './schemas/documents/menu';
import page from './schemas/documents/page';
import section from './schemas/documents/section';
import hero from './schemas/modules/hero';
import marquee from './schemas/modules/marquee';
import photo from './schemas/modules/photo';
import testimonials from './schemas/modules/testimonials';
import navDropdown from './schemas/objects/nav-dropdown';
import navLink from './schemas/objects/nav-link';
import navPage from './schemas/objects/nav-page';
import testimonial from './schemas/objects/testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    menu,
    page,
    section,
    hero,
    marquee,
    photo,
    navDropdown,
    navLink,
    navPage,
    testimonial,
    testimonials,
  ],
};
