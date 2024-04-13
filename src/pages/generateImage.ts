export async function GET({ params, request }) {
    const response = await fetch("https://docs.astro.build/assets/full-logo-dark.png");
    return new Response(await response.arrayBuffer());
}