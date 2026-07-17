import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const episodes = (await getCollection("podcast"))
    .filter(({ data }) => !data.draft)
    .sort((a, b) => b.data.episode - a.data.episode);

  const PODCAST = {
    title: "链周志播客",
    subtitle: "穿透 Web3 噪音，抵达信号深处",
    author: "Jask",
    email: "hi@jask.dev",
    category: "Technology",
    subcategory: "Crypto",
    language: "zh",
    cover: "https://podcast.jask.dev/cover-3000.png",
    siteUrl: site?.toString() ?? "https://weekly.jask.dev/",
  };

  const escapeXml = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const items = episodes
    .map(({ data }) => {
      const pubDate = new Date(data.pubDatetime).toUTCString();
      return `    <item>
      <title>${escapeXml(data.title)}</title>
      <description>${escapeXml(data.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${data.audioUrl}" length="${data.audioSize}" type="audio/mpeg" />
      <itunes:duration>${data.duration}</itunes:duration>
      <itunes:episode>${data.episode}</itunes:episode>
      <itunes:season>${data.season}</itunes:season>
      <itunes:summary>${escapeXml(data.description)}</itunes:summary>
      <guid isPermaLink="false">chain-podcast-ep${data.episode}</guid>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(PODCAST.title)}</title>
    <link>${PODCAST.siteUrl}</link>
    <description>${escapeXml(PODCAST.subtitle)}</description>
    <language>${PODCAST.language}</language>
    <itunes:author>${escapeXml(PODCAST.author)}</itunes:author>
    <itunes:owner>
      <itunes:name>${escapeXml(PODCAST.author)}</itunes:name>
      <itunes:email>${PODCAST.email}</itunes:email>
    </itunes:owner>
    <itunes:image href="${PODCAST.cover}" />
    <image>
      <url>${PODCAST.cover}</url>
      <title>${escapeXml(PODCAST.title)}</title>
      <link>${PODCAST.siteUrl}</link>
    </image>
    <itunes:category text="${PODCAST.category}">
      <itunes:category text="${PODCAST.subcategory}" />
    </itunes:category>
    <itunes:explicit>false</itunes:explicit>
    <itunes:type>episodic</itunes:type>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "max-age=3600",
    },
  });
};
