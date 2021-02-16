import { testFunction } from "./optionalChainingFile";

export async function handler() {
  const result = testFunction({});

  return {
    statusCode: 200,
    body: "Hello World!",
    headers: { "Content-Type": "text/plain" },
  };
}
