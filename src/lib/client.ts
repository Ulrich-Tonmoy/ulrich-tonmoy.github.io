import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "jpwqlm1c",
  dataset: "production",
  apiVersion: "2022-05-01",
  // @ts-ignore
  useCsn: true,
  token:
    "skIzpFf6Nd3fD6G4MyBSoXMKdlXgBMFY6IBRq1J6F5qY8y4Q2ttA0dNwFN06hF11jfuWymxTv3jpFGzPGQgkMjd0yG3coY3YORYUuNQMqD3PLsgKdf2xb1pfSpOsMBXBJ2vhROF8vE0lI9Q6M1kp3lwtXzDNGYBojcdCj1iROdvLqxlb4QEz",
  ignoreBrowserTokenWarning: true,
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: string) => builder.image(source);
