// import {faker} from '@faker-js/faker';

// export const reviews = Array.from({length: 7}, (_, index) => ({
//   id: index,
//   image: faker.image.avatarLegacy(),
//   name: faker.person.fullName(),
//   designation: faker.lorem.sentence(),
// }));

export type ReviewType = {
  id: number;
  image: string;
  name: string;
  designation: string;
};
