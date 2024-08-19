import getHealthStatus from "../healthIndicator";

test("health > 50 returns 'healthy'", () => {
  expect(getHealthStatus({ name: "Маг", health: 90 })).toBe("healthy");
});

test("health <= 50 and >=15 returns 'wounded'", () => {
  const characters = [
    { name: "Воин", health: 50 },
    { name: "Лучник", health: 30 },
  ];
  characters.forEach((character) => {
    expect(getHealthStatus(character)).toBe("wounded");
  });
});

test("health < 15 returns 'critical'", () => {
  expect(getHealthStatus({ name: "Маг", health: 10 })).toBe("critical");
});
