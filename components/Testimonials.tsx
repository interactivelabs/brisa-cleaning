import {
  TestimonialFragment,
  TestimonialsFragment,
} from '@/sanity/data/gql-sdk';

export interface ITestimonials {
  testimonials: TestimonialsFragment;
}

export default function Testimonials({ testimonials }: ITestimonials) {
  if (!testimonials || !testimonials.modules) return null;
  return (
    <section>
      <h2>Testimonials</h2>
      <ul>
        {testimonials.modules.map(
          (testimonial: TestimonialFragment | null) =>
            testimonial && (
              <li key={testimonial.author_name}>
                <h3>{testimonial.title}</h3>
                <p>{testimonial.content}</p>
                <span>{testimonial.author_name}</span>
              </li>
            ),
        )}
      </ul>
    </section>
  );
}
