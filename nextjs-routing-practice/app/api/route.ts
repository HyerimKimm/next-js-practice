export function GET(request: Request) {
  const response = {
    success: true,
    errorCode: null,
    data: {},
  };

  return new Response(JSON.stringify(response));
}
