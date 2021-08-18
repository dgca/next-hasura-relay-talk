export async function fetchRelay(
  query: string,
  variables: Record<string, unknown>
) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  return response.json();
}
