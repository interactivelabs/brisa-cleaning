import { SchemaTypeDefinition } from 'sanity';
import menu from './schemas/documents/menu';
import page from './schemas/documents/page';
import section from './schemas/documents/section';
import content_section from './schemas/modules/content_section';
import hero from './schemas/modules/hero';
import photo from './schemas/modules/photo';
import testimonials from './schemas/modules/testimonials';
import navDropdown from './schemas/objects/nav-dropdown';
import navLink from './schemas/objects/nav-link';
import navPage from './schemas/objects/nav-page';
import pharagraph from './schemas/objects/pharagraph';
import testimonial from './schemas/objects/testimonial';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    content_section,
    menu,
    page,
    hero,
    photo,
    navDropdown,
    navLink,
    navPage,
    section,
    pharagraph,
    testimonial,
    testimonials,
  ],
};
