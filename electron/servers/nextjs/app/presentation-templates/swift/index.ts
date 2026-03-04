import { TemplateWithData, TemplateGroupSettings, createTemplateEntry } from "../utils";

import BulletsWithIconsTitleDescription, { Schema as BulletsWithIconsTitleDescriptionSchema, layoutId as BulletsWithIconsTitleDescriptionId, layoutName as BulletsWithIconsTitleDescriptionName, layoutDescription as BulletsWithIconsTitleDescriptionDesc } from "./BulletsWithIconsTitleDescription";
import IconBulletListDescription, { Schema as IconBulletListDescriptionSchema, layoutId as IconBulletListDescriptionId, layoutName as IconBulletListDescriptionName, layoutDescription as IconBulletListDescriptionDesc } from "./IconBulletListDescription";
import ImageListDescription, { Schema as ImageListDescriptionSchema, layoutId as ImageListDescriptionId, layoutName as ImageListDescriptionName, layoutDescription as ImageListDescriptionDesc } from "./ImageListDescription";
import IntroSlideLayout, { Schema as IntroSchema, layoutId as IntroId, layoutName as IntroName, layoutDescription as IntroDesc } from "./IntroSlideLayout";
import MetricsNumbers, { Schema as MetricsNumbersSchema, layoutId as MetricsNumbersId, layoutName as MetricsNumbersName, layoutDescription as MetricsNumbersDesc } from "./MetricsNumbers";
import SimpleBulletPointsLayout, { Schema as SimpleBulletPointsSchema, layoutId as SimpleBulletPointsId, layoutName as SimpleBulletPointsName, layoutDescription as SimpleBulletPointsDesc } from "./SimpleBulletPointsLayout";
import TableOfContents, { Schema as TableOfContentsSchema, layoutId as TableOfContentsId, layoutName as TableOfContentsName, layoutDescription as TableOfContentsDesc } from "./TableOfContents";
import TableorChart, { Schema as TableorChartSchema, layoutId as TableorChartId, layoutName as TableorChartName, layoutDescription as TableorChartDesc } from "./TableorChart";
import Timeline, { Schema as TimelineSchema, layoutId as TimelineId, layoutName as TimelineName, layoutDescription as TimelineDesc } from "./Timeline";

const GROUP_ID = "swift";

export const settings: TemplateGroupSettings = {
    description: "Swift layouts for presentations",
    ordered: false,
    default: false,
};

export const templates: TemplateWithData[] = [
    createTemplateEntry(BulletsWithIconsTitleDescription, BulletsWithIconsTitleDescriptionSchema, BulletsWithIconsTitleDescriptionId, BulletsWithIconsTitleDescriptionName, BulletsWithIconsTitleDescriptionDesc, GROUP_ID, "BulletsWithIconsTitleDescription"),
    createTemplateEntry(IconBulletListDescription, IconBulletListDescriptionSchema, IconBulletListDescriptionId, IconBulletListDescriptionName, IconBulletListDescriptionDesc, GROUP_ID, "IconBulletListDescription"),
    createTemplateEntry(ImageListDescription, ImageListDescriptionSchema, ImageListDescriptionId, ImageListDescriptionName, ImageListDescriptionDesc, GROUP_ID, "ImageListDescription"),
    createTemplateEntry(IntroSlideLayout, IntroSchema, IntroId, IntroName, IntroDesc, GROUP_ID, "IntroSlideLayout"),
    createTemplateEntry(MetricsNumbers, MetricsNumbersSchema, MetricsNumbersId, MetricsNumbersName, MetricsNumbersDesc, GROUP_ID, "MetricsNumbers"),
    createTemplateEntry(SimpleBulletPointsLayout, SimpleBulletPointsSchema, SimpleBulletPointsId, SimpleBulletPointsName, SimpleBulletPointsDesc, GROUP_ID, "SimpleBulletPointsLayout"),
    createTemplateEntry(TableOfContents, TableOfContentsSchema, TableOfContentsId, TableOfContentsName, TableOfContentsDesc, GROUP_ID, "TableOfContents"),
    createTemplateEntry(TableorChart, TableorChartSchema, TableorChartId, TableorChartName, TableorChartDesc, GROUP_ID, "TableorChart"),
    createTemplateEntry(Timeline, TimelineSchema, TimelineId, TimelineName, TimelineDesc, GROUP_ID, "Timeline"),
];
