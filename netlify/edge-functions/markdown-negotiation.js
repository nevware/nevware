const MARKDOWN_ACCEPT = "text/markdown";

function addVaryAccept(headers) {
  const current = headers.get("Vary");
  if (!current) {
    headers.set("Vary", "Accept");
    return;
  }

  const values = current
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  if (!values.includes("accept")) {
    headers.set("Vary", `${current}, Accept`);
  }
}

function markdownPathFor(pathname) {
  if (pathname.endsWith(".md")) {
    return null;
  }

  if (pathname === "/") {
    return "/index.md";
  }

  if (pathname.endsWith("/")) {
    return `${pathname}index.md`;
  }

  // Keep explicit html pages as HTML unless a markdown sibling is explicitly requested.
  if (pathname.endsWith(".html")) {
    return null;
  }

  return `${pathname}/index.md`;
}

export default async (request, context) => {
  const accept = (request.headers.get("accept") || "").toLowerCase();
  if (!accept.includes(MARKDOWN_ACCEPT)) {
    return context.next();
  }

  const url = new URL(request.url);
  const markdownPath = markdownPathFor(url.pathname);
  if (!markdownPath) {
    return context.next();
  }

  const markdownUrl = new URL(url.toString());
  markdownUrl.pathname = markdownPath;

  const rewrittenRequest = new Request(markdownUrl.toString(), request);
  const markdownResponse = await context.next(rewrittenRequest);

  if (!markdownResponse.ok) {
    // Fallback to default HTML response when no markdown mirror exists.
    return context.next();
  }

  const headers = new Headers(markdownResponse.headers);
  headers.set("Content-Type", "text/markdown; charset=utf-8");
  addVaryAccept(headers);

  return new Response(markdownResponse.body, {
    status: markdownResponse.status,
    statusText: markdownResponse.statusText,
    headers,
  });
};
