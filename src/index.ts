export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);

		// We can get the request URL and according to that we can show results.
		const url = new URL(request.url);
		const pathname = url.pathname;
		console.log("pathname: ", pathname);
		

		if (request.method === 'GET' && pathname === "/") {
			return Response.json({
				message: 'You have sent a GET request.',
			});
		} else if (request.method === "GET" && pathname === '/api/users') {
			return Response.json({
				message: 'You are hitting the users path',
			});
		} else {
			return Response.json({
				message: 'You have sent a different request!',
			});
		}
	},
};
