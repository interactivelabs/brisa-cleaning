export interface ITestimonials {
  testimonials: any[];
}

export default function Testimonials({ testimonials }: ITestimonials) {
  console.log(testimonials);

  return (
    <section>
      <h2>Testimonials</h2>
      <ul>
        {testimonials.modules.map((testimonial) => (
          <li key={testimonial.author_name}>
            <h3>{testimonial.title}</h3>
            <p>{testimonial.content}</p>
            <span>{testimonial.author_name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
