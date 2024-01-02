import { renderData, renderError, renderLoading } from "./render";

export default async function fetchProducts(url) {
  try {
    renderLoading(true);
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed Fetch ⚠️!");
    const data = await res.json();
    console.log(data);
    renderData(data);
  } catch (err) {
    renderError(err.message);
  } finally {
    renderLoading(false);
  }
}
