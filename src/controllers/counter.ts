import { Handler, res } from "apiker";

export const getUserCounter: Handler = async ({ state }) => {
  const initialCount = (await state().get("counter")) ?? 0;
  const counter = initialCount + 1;
  await state().put({ counter });
  return res({ counter });
};
