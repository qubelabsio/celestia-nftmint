export interface NftMetadata {
  name: string;
  description: string;
  edition: number;
  dna: string;
  attributes: Array<{ trait_type: string; value: string }>;
  compiler: string;
  date: Date;
  image: string;
}
