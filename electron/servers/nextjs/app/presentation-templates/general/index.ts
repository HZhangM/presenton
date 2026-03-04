import { TemplateWithData, TemplateGroupSettings, createTemplateEntry } from "../utils";

import BasicInfoSlideLayout, { Schema as BasicInfoSchema, layoutId as BasicInfoId, layoutName as BasicInfoName, layoutDescription as BasicInfoDesc } from "./BasicInfoSlideLayout";
import BulletIconsOnlySlideLayout, { Schema as BulletIconsOnlySchema, layoutId as BulletIconsOnlyId, layoutName as BulletIconsOnlyName, layoutDescription as BulletIconsOnlyDesc } from "./BulletIconsOnlySlideLayout";
import BulletWithIconsSlideLayout, { Schema as BulletWithIconsSchema, layoutId as BulletWithIconsId, layoutName as BulletWithIconsName, layoutDescription as BulletWithIconsDesc } from "./BulletWithIconsSlideLayout";
import ChartWithBulletsSlideLayout, { Schema as ChartWithBulletsSchema, layoutId as ChartWithBulletsId, layoutName as ChartWithBulletsName, layoutDescription as ChartWithBulletsDesc } from "./ChartWithBulletsSlideLayout";
import IntroSlideLayout, { Schema as IntroSchema, layoutId as IntroId, layoutName as IntroName, layoutDescription as IntroDesc } from "./IntroSlideLayout";
import MetricsSlideLayout, { Schema as MetricsSchema, layoutId as MetricsId, layoutName as MetricsName, layoutDescription as MetricsDesc } from "./MetricsSlideLayout";
import MetricsWithImageSlideLayout, { Schema as MetricsWithImageSchema, layoutId as MetricsWithImageId, layoutName as MetricsWithImageName, layoutDescription as MetricsWithImageDesc } from "./MetricsWithImageSlideLayout";
import NumberedBulletsSlideLayout, { Schema as NumberedBulletsSchema, layoutId as NumberedBulletsId, layoutName as NumberedBulletsName, layoutDescription as NumberedBulletsDesc } from "./NumberedBulletsSlideLayout";
import QuoteSlideLayout, { Schema as QuoteSchema, layoutId as QuoteId, layoutName as QuoteName, layoutDescription as QuoteDesc } from "./QuoteSlideLayout";
import TableInfoSlideLayout, { Schema as TableInfoSchema, layoutId as TableInfoId, layoutName as TableInfoName, layoutDescription as TableInfoDesc } from "./TableInfoSlideLayout";
import TableOfContentsSlideLayout, { Schema as TableOfContentsSchema, layoutId as TableOfContentsId, layoutName as TableOfContentsName, layoutDescription as TableOfContentsDesc } from "./TableOfContentsSlideLayout";
import TeamSlideLayout, { Schema as TeamSchema, layoutId as TeamId, layoutName as TeamName, layoutDescription as TeamDesc } from "./TeamSlideLayout";

const GROUP_ID = "general";

export const settings: TemplateGroupSettings = {
    description: "General purpose layouts for common presentation elements",
    ordered: false,
    default: true,
};

export const templates: TemplateWithData[] = [
    createTemplateEntry(BasicInfoSlideLayout, BasicInfoSchema, BasicInfoId, BasicInfoName, BasicInfoDesc, GROUP_ID, "BasicInfoSlideLayout"),
    createTemplateEntry(BulletIconsOnlySlideLayout, BulletIconsOnlySchema, BulletIconsOnlyId, BulletIconsOnlyName, BulletIconsOnlyDesc, GROUP_ID, "BulletIconsOnlySlideLayout"),
    createTemplateEntry(BulletWithIconsSlideLayout, BulletWithIconsSchema, BulletWithIconsId, BulletWithIconsName, BulletWithIconsDesc, GROUP_ID, "BulletWithIconsSlideLayout"),
    createTemplateEntry(ChartWithBulletsSlideLayout, ChartWithBulletsSchema, ChartWithBulletsId, ChartWithBulletsName, ChartWithBulletsDesc, GROUP_ID, "ChartWithBulletsSlideLayout"),
    createTemplateEntry(IntroSlideLayout, IntroSchema, IntroId, IntroName, IntroDesc, GROUP_ID, "IntroSlideLayout"),
    createTemplateEntry(MetricsSlideLayout, MetricsSchema, MetricsId, MetricsName, MetricsDesc, GROUP_ID, "MetricsSlideLayout"),
    createTemplateEntry(MetricsWithImageSlideLayout, MetricsWithImageSchema, MetricsWithImageId, MetricsWithImageName, MetricsWithImageDesc, GROUP_ID, "MetricsWithImageSlideLayout"),
    createTemplateEntry(NumberedBulletsSlideLayout, NumberedBulletsSchema, NumberedBulletsId, NumberedBulletsName, NumberedBulletsDesc, GROUP_ID, "NumberedBulletsSlideLayout"),
    createTemplateEntry(QuoteSlideLayout, QuoteSchema, QuoteId, QuoteName, QuoteDesc, GROUP_ID, "QuoteSlideLayout"),
    createTemplateEntry(TableInfoSlideLayout, TableInfoSchema, TableInfoId, TableInfoName, TableInfoDesc, GROUP_ID, "TableInfoSlideLayout"),
    createTemplateEntry(TableOfContentsSlideLayout, TableOfContentsSchema, TableOfContentsId, TableOfContentsName, TableOfContentsDesc, GROUP_ID, "TableOfContentsSlideLayout"),
    createTemplateEntry(TeamSlideLayout, TeamSchema, TeamId, TeamName, TeamDesc, GROUP_ID, "TeamSlideLayout"),
];
