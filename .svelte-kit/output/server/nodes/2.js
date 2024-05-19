import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DxGSkXZI.js","_app/immutable/chunks/scheduler.DHTTB31Y.js","_app/immutable/chunks/index.8iMzuK7F.js","_app/immutable/chunks/index.BDqcD_k8.js"];
export const stylesheets = ["_app/immutable/assets/2.CBxNluHG.css"];
export const fonts = [];
