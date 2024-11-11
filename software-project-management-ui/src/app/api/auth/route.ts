export async function POST(request: Request) {
	const res = await request.json();
	const sessionToken = res.response.data.accessToken;
	if (!sessionToken) {
		return Response.json(
			{
				message: "Không Nhận Được Token!",
			},
			{
				status: 400,
			}
		);
	}
	return Response.json(
		{ res },
		{
			status: 200,
			headers: { "Set-Cookie": `sessionToken=${sessionToken}` },
		}
	);
}
