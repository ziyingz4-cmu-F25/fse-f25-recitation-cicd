const { increment, decrement, setMessage, state } = require("../src/app");

describe('simple math', () => {
  test('1 + 1', () => {
    expect(1 + 1).toBe(2);
  });
});

describe("counter", () => {
  beforeEach(() => {
    state.count = 0;
  });

  test("increment increases count", () => {
    expect(increment()).toBe(1);
    expect(increment()).toBe(2);
  });

  test("decrement decreases count", () => {
    state.count = 2;
    expect(decrement()).toBe(1);
    expect(decrement()).toBe(0);
  });
});

describe("setMessage", () => {
  test("sets textContent on element", () => {
    const el = { textContent: "" };
    setMessage(el, "hello");
    expect(el.textContent).toBe("hello");
    setMessage(el, "");
    expect(el.textContent).toBe("Nothing yet");
  });
});
