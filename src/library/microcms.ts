import { createClient, type MicroCMSQueries, type MicroCMSImage } from "microcms-js-sdk";

// Lecture Type Definition
export type Lecture = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  guest_name: string;
  event_date: string;
  eyecatch?: MicroCMSImage;
  content?: string;
};

export type LectureResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Lecture[];
};

// MicroCMS Client
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// Helper functions
export const getLectures = async (queries?: MicroCMSQueries) => {
  return await client.get<LectureResponse>({ endpoint: "lectures", queries });
};

export const getLectureDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Lecture>({
    endpoint: "lectures",
    contentId,
    queries,
  });
};
