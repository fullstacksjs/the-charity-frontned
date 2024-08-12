import { fakerFA } from '@faker-js/faker';
import { getRandom } from '@fullstacksjs/toolbox';

export const householderFixture = () => ({
  name: fakerFA.person.firstName(),
  surname: fakerFA.person.lastName(),
  fatherName: fakerFA.person.firstName(),
  nationalId: fakerFA.string.numeric({ length: 10 }),
  gender: getRandom(['Female', 'Male', 'Unknown']),
  religion: getRandom(['Islam', 'Unknown']),
  dob: fakerFA.date.past().toString(),
});
