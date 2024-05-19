export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.TbU5BiAP.js","app":"_app/immutable/entry/app.CygRtgtM.js","imports":["_app/immutable/entry/start.TbU5BiAP.js","_app/immutable/chunks/entry.Div7-rKU.js","_app/immutable/chunks/scheduler.DHTTB31Y.js","_app/immutable/chunks/index.BDqcD_k8.js","_app/immutable/entry/app.CygRtgtM.js","_app/immutable/chunks/scheduler.DHTTB31Y.js","_app/immutable/chunks/index.8iMzuK7F.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
