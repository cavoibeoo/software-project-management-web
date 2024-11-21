export async function POST(request: Request) {
	const res = await request.json();

	const sessionToken = res.response.data.accessToken;
	console.log(sessionToken);

	return Response.json(
		{ res },
		{
			status: 200,
			headers: {
				// "Set-Cookie": `NextsessionToken=${sessionToken}; path=/`,
			},
		}
	);
}
