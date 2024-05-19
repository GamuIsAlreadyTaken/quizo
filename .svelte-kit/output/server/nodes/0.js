

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.aa5-3Vdx.js","_app/immutable/chunks/scheduler.DHTTB31Y.js","_app/immutable/chunks/index.8iMzuK7F.js"];
export const stylesheets = [];
export const fonts = [];
