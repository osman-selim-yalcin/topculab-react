import { useEffect } from "react";

const SITE_URL = "https://topculab.com";

type Meta = {
  title: string;
  description: string;
  image?: string;
  type?: string;
};

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key, prop] = selector.match(/^meta\[(name|property)="(.+)"\]$/) ?? [];
    if (!key || !prop) return;
    el.setAttribute(key, prop);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useDocumentMeta({ title, description, image, type }: Meta) {
  useEffect(() => {
    document.title = title;

    const url = `${SITE_URL}${window.location.pathname}`;
    const img = image ?? `${SITE_URL}/static/Home.jpg`;

    setMeta('meta[name="description"]', "content", description);

    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:image"]', "content", img);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:type"]', "content", type ?? "website");

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", img);

    setLink("canonical", url);
  }, [title, description, image, type]);
}
