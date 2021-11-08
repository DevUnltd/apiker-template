import { res } from "apiker";

class MyController {
  getUserCounter = async ({ state }) => {
    const initialCount = (await state.storage.get("counter")) ?? 0;
    const count = initialCount + 1;
    await state.storage.put("counter", count);
    return res({ count });
  };
}

export default MyController;
