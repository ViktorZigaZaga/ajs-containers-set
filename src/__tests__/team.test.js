import Team from '../team';

const character = {
  name: 'Viktor',
  type: 'Full-stack',
};

const character1 = {
  name: 'Alex',
  type: 'Backend',
};

const character2 = {
  name: 'Max',
  type: 'Frontend',
};

test('Add character', () => {
  const team = new Team();
  team.add(character1);
  expect(team.members).toEqual(new Set([{
    name: 'Alex',
    type: 'Backend',
  }]));
});

test('Add again character', () => {
  const team = new Team();
  team.add(character1);
  expect(() => team.add(character1)).toThrow(`Member ${character1.name} is already in the team`);
});

test('Add many characters', () => {
  const team = new Team();
  team.addAll(character, character1, character2);
  expect(team.members).toEqual(new Set([
    { name: 'Viktor', type: 'Full-stack' },
    { name: 'Alex', type: 'Backend' },
    { name: 'Max', type: 'Frontend' },
  ]));
});

test('Add many characters', () => {
  const team = new Team();
  team.addAll(character, character1, character2);
  expect(team.toArray()).toEqual([
    { name: 'Viktor', type: 'Full-stack' },
    { name: 'Alex', type: 'Backend' },
    { name: 'Max', type: 'Frontend' },
  ]);
});
