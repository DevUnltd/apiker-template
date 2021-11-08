import "regenerator-runtime/runtime";
import API from "./API";
exports.API = API;

exports.handlers = {
  async fetch(request, env) {
    try {
      return await handleRequest(request, env);
    } catch (e) {
      return new Response(e.message);
    }
  }
};

async function handleRequest(request, env) {
  const id = env.API.idFromName("A");
  const obj = env.API.get(id);
  return obj.fetch(request.url);
}
