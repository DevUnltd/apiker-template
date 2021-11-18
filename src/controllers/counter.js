import { res } from "apiker";

export const getUserCounter = async ({ state }) => {
  const initialCount = (await state().get("counter")) ?? 0;
  const count = initialCount + 1;
  await state().put("counter", count);
  return res({ count });
};
