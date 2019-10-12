export interface Note {
  id: string;
  text: string;
  tags: Array<string>;
  createdAt: Date;
  links: Array<string>;
}
