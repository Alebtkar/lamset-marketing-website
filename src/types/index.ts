
export interface Service {
  title: string;
  description: string;
  price: string;
  icon: "megaphone" | "video" | "image" | "palette";
}

export interface Testimonial {
  name: string;
  company: string;
  content: string;
  rating: number;
}
