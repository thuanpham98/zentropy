import {
  expect,
  jest,
  test,
  beforeEach,
  afterEach,
  describe,
} from "@jest/globals";

import { add } from "../lib/core";

beforeEach(async () => {
  jest.resetModules();
});

afterEach(() => {
  jest.resetModules();
});

describe("test for fun", () => {
  test("test worth case", () => {
    expect(add()).toBe(3);
  });
});
