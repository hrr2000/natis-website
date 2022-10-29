// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Page from "../../models/Page";
import {DEFAULT_LOCALE} from "../../utils/constants";
import {Article, CommitteeMember, ContentPage} from "../../Types/directus";


type Data = {
  committeeMembers: CommitteeMember[],
  news: Article[],
  contentPages: ContentPage[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { locale, q } = req.query || {};

  const query = typeof q === 'string' ? q : '';

  const page = new Page("", typeof locale === "string" ? locale : DEFAULT_LOCALE);
  const committeeMembers: CommitteeMember[] = (await page.getItems("committee_members")).filter((member: CommitteeMember) => {
      return (
        member.name?.toLowerCase().includes(query.toLowerCase()) ||
        member.role?.toLowerCase().includes(query.toLowerCase()) ||
        member.bio?.toLowerCase().includes(query.toLowerCase()) ||
        member.about?.toLowerCase().includes(query.toLowerCase())
      );
  });
  const news: Article[] = (await page.getItems("news")).filter((item: Article) => {
    return (
      item.title?.toLowerCase().includes(query.toLowerCase()) ||
      item.short_description?.toLowerCase().includes(query.toLowerCase()) ||
      item.content?.toLowerCase().includes(query.toLowerCase())
    );
  });
  const contentPages: ContentPage[] = (await page.getItems("content_pages")).filter((item: ContentPage) => {
    return (
      item.title?.toLowerCase().includes(query.toLowerCase()) ||
      item.hero_heading?.toLowerCase().includes(query.toLowerCase()) ||
      item.hero_description?.toLowerCase().includes(query.toLowerCase()) ||
      item.content?.toLowerCase().includes(query.toLowerCase())
    );
  });

  const result = {
    committeeMembers,
    news,
    contentPages
  }

  return res.status(200).json(result);
}

