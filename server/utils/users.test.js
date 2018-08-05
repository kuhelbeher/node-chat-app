const expect = require('expect');

const { Users } = require('./users');

describe('users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '123',
        name: 'Dmitriy',
        room: 'THE',
      },
      {
        id: '124',
        name: 'Alena',
        room: 'THE',
      },
      {
        id: '125',
        name: 'Ira',
        room: 'React',
      },
    ];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Dmitriy',
      room: 'THE',
    };

    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    const userList = users.getUserList('THE');

    expect(userList).toEqual(['Dmitriy', 'Alena']);
  });

  it('should return names for node course', () => {
    const userList = users.getUserList('React');

    expect(userList).toEqual(['Ira']);
  });

  it('should find user', () => {
    const userId = '123';
    const user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    const userId = '90';
    const user = users.getUser(userId);

    expect(user).toBeUndefined();
  });

  it('should remove user', () => {
    const userId = '123';
    const user = users.removeUser(userId);

    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    const userId = '90';
    const user = users.removeUser(userId);

    expect(user).toBeUndefined();
  });
});
