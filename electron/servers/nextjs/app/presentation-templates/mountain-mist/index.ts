import { TemplateWithData, TemplateGroupSettings, createTemplateEntry } from "../utils";

import BulletIconsSlideLayout, { Schema as BulletIconsSchema, layoutId as BulletIconsId, layoutName as BulletIconsName, layoutDescription as BulletIconsDesc } from "./BulletIconsSlideLayout";
import ClosingSlideLayout, { Schema as ClosingSchema, layoutId as ClosingId, layoutName as ClosingName, layoutDescription as ClosingDesc } from "./ClosingSlideLayout";
import ContentSlideLayout, { Schema as ContentSchema, layoutId as ContentId, layoutName as ContentName, layoutDescription as ContentDesc } from "./ContentSlideLayout";
import ImageTextSlideLayout, { Schema as ImageTextSchema, layoutId as ImageTextId, layoutName as ImageTextName, layoutDescription as ImageTextDesc } from "./ImageTextSlideLayout";
import IntroSlideLayout, { Schema as IntroSchema, layoutId as IntroId, layoutName as IntroName, layoutDescription as IntroDesc } from "./IntroSlideLayout";
import MetricsSlideLayout, { Schema as MetricsSchema, layoutId as MetricsId, layoutName as MetricsName, layoutDescription as MetricsDesc } from "./MetricsSlideLayout";
import QuoteSlideLayout, { Schema as QuoteSchema, layoutId as QuoteId, layoutName as QuoteName, layoutDescription as QuoteDesc } from "./QuoteSlideLayout";
import TeamSlideLayout, { Schema as TeamSchema, layoutId as TeamId, layoutName as TeamName, layoutDescription as TeamDesc } from "./TeamSlideLayout";
import TimelineSlideLayout, { Schema as TimelineSchema, layoutId as TimelineId, layoutName as TimelineName, layoutDescription as TimelineDesc } from "./TimelineSlideLayout";

const GROUP_ID = "mountain-mist";

export const settings: TemplateGroupSettings = {
    description: "mountain-mist templates",
    ordered: false,
    default: false,
};

export const templates: TemplateWithData[] = [
    createTemplateEntry(BulletIconsSlideLayout, BulletIconsSchema, BulletIconsId, BulletIconsName, BulletIconsDesc, GROUP_ID, "BulletIconsSlideLayout"),
    createTemplateEntry(ClosingSlideLayout, ClosingSchema, ClosingId, ClosingName, ClosingDesc, GROUP_ID, "ClosingSlideLayout"),
    createTemplateEntry(ContentSlideLayout, ContentSchema, ContentId, ContentName, ContentDesc, GROUP_ID, "ContentSlideLayout"),
    createTemplateEntry(ImageTextSlideLayout, ImageTextSchema, ImageTextId, ImageTextName, ImageTextDesc, GROUP_ID, "ImageTextSlideLayout"),
    createTemplateEntry(IntroSlideLayout, IntroSchema, IntroId, IntroName, IntroDesc, GROUP_ID, "IntroSlideLayout"),
    createTemplateEntry(MetricsSlideLayout, MetricsSchema, MetricsId, MetricsName, MetricsDesc, GROUP_ID, "MetricsSlideLayout"),
    createTemplateEntry(QuoteSlideLayout, QuoteSchema, QuoteId, QuoteName, QuoteDesc, GROUP_ID, "QuoteSlideLayout"),
    createTemplateEntry(TeamSlideLayout, TeamSchema, TeamId, TeamName, TeamDesc, GROUP_ID, "TeamSlideLayout"),
    createTemplateEntry(TimelineSlideLayout, TimelineSchema, TimelineId, TimelineName, TimelineDesc, GROUP_ID, "TimelineSlideLayout"),
];
