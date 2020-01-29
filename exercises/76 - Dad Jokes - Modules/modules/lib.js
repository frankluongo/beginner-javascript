const endpointUrl = "https://icanhazdadjoke.com";

export async function fetchJoke() {
  const res = await fetch(endpointUrl, {
    headers: {
      Accept: "application/json"
    }
  });
  const data = await res.json();
  return data;
}
