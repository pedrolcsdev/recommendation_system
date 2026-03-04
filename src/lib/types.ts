export type Partner = "Oxygeni" | "Ceuma" | "IoA";

export type Space = {
  id: string;
  title: string;
  description: string;
  partner: Partner;
  city: string;
  address: string;
  pricePerDay: number;
  capacity: number;
  areaM2: number;
  amenities: string[];
  images: string[];
  rating: number;
  reviewsCount: number;
};
