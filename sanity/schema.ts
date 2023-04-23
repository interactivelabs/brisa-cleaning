import { SchemaTypeDefinition } from 'sanity';
import menu from './schemas/documents/menu';
import page from './schemas/documents/page';
import section from './schemas/documents/section';
import grid from './schemas/modules/grid';
import hero from './schemas/modules/hero';
import marquee from './schemas/modules/marquee';
import photo from './schemas/modules/photo';
import navDropdown from './schemas/objects/nav-dropdown';
import navLink from './schemas/objects/nav-link';
import navPage from './schemas/objects/nav-page';
import testimonials from './schemas/objects/testimonials';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    menu,
    page,
    section,
    grid,
    hero,
    marquee,
    photo,
    navDropdown,
    navLink,
    navPage,
    testimonials,
  ],
};
