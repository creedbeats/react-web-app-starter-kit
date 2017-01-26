import e from '../actionTypes';
import faker from 'faker';

export function getUser () {
  return (dispatch, getState) => {
    return new Promise(function (resolve, reject) {
      const user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        bio: faker.lorem.sentence(),
        image: faker.image.avatar()
      };
      dispatch({ type: e.GET_USER, user: user });
      resolve(user);
    });
  };
}
