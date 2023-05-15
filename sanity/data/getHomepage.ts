import { groq } from 'next-sanity';
import { client } from '../lib/client';

const getHomepage = async () =>
  client.fetch(groq`*[_type == "page" && slug.current == "home"] {
    _type,
    title,
    modules[] {
      _type,
      title,
      modules[] {
        _type,
        title,
        author_name,
        content,
      }
    }
  }`);

export default getHomepage;
