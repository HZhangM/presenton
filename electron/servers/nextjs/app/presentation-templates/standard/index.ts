import { TemplateWithData, TemplateGroupSettings, createTemplateEntry } from "../utils";

import ChartLeftTextRightLayout, { Schema as ChartLeftTextRightSchema, layoutId as ChartLeftTextRightId, layoutName as ChartLeftTextRightName, layoutDescription as ChartLeftTextRightDesc } from "./ChartLeftTextRightLayout";
import ContactLayout, { Schema as ContactSchema, layoutId as ContactId, layoutName as ContactName, layoutDescription as ContactDesc } from "./ContactLayout";
import HeadingBulletImageDescriptionLayout, { Schema as HeadingBulletImageDescriptionSchema, layoutId as HeadingBulletImageDescriptionId, layoutName as HeadingBulletImageDescriptionName, layoutDescription as HeadingBulletImageDescriptionDesc } from "./HeadingBulletImageDescriptionLayout";
import IconBulletDescriptionLayout, { Schema as IconBulletDescriptionSchema, layoutId as IconBulletDescriptionId, layoutName as IconBulletDescriptionName, layoutDescription as IconBulletDescriptionDesc } from "./IconBulletDescriptionLayout";
import IconImageDescriptionLayout, { Schema as IconImageDescriptionSchema, layoutId as IconImageDescriptionId, layoutName as IconImageDescriptionName, layoutDescription as IconImageDescriptionDesc } from "./IconImageDescriptionLayout";
import ImageListWithDescriptionLayout, { Schema as ImageListWithDescriptionSchema, layoutId as ImageListWithDescriptionId, layoutName as ImageListWithDescriptionName, layoutDescription as ImageListWithDescriptionDesc } from "./ImageListWithDescriptionLayout";
import IntroSlideLayout, { Schema as IntroSchema, layoutId as IntroId, layoutName as IntroName, layoutDescription as IntroDesc } from "./IntroSlideLayout";
import MetricsDescriptionLayout, { Schema as MetricsDescriptionSchema, layoutId as MetricsDescriptionId, layoutName as MetricsDescriptionName, layoutDescription as MetricsDescriptionDesc } from "./MetricsDescriptionLayout";
import NumberedBulletSingleImageLayout, { Schema as NumberedBulletSingleImageSchema, layoutId as NumberedBulletSingleImageId, layoutName as NumberedBulletSingleImageName, layoutDescription as NumberedBulletSingleImageDesc } from "./NumberedBulletSingleImageLayout";
import TableOfContentsLayout, { Schema as TableOfContentsSchema, layoutId as TableOfContentsId, layoutName as TableOfContentsName, layoutDescription as TableOfContentsDesc } from "./TableOfContentsLayout";
import VisualMetricsSlideLayout, { Schema as VisualMetricsSchema, layoutId as VisualMetricsId, layoutName as VisualMetricsName, layoutDescription as VisualMetricsDesc } from "./VisualMetricsSlideLayout";

const GROUP_ID = "standard";

export const settings: TemplateGroupSettings = {
    description: "Standard layouts for presentations",
    ordered: false,
    default: false,
};

export const templates: TemplateWithData[] = [
    createTemplateEntry(ChartLeftTextRightLayout, ChartLeftTextRightSchema, ChartLeftTextRightId, ChartLeftTextRightName, ChartLeftTextRightDesc, GROUP_ID, "ChartLeftTextRightLayout"),
    createTemplateEntry(ContactLayout, ContactSchema, ContactId, ContactName, ContactDesc, GROUP_ID, "ContactLayout"),
    createTemplateEntry(HeadingBulletImageDescriptionLayout, HeadingBulletImageDescriptionSchema, HeadingBulletImageDescriptionId, HeadingBulletImageDescriptionName, HeadingBulletImageDescriptionDesc, GROUP_ID, "HeadingBulletImageDescriptionLayout"),
    createTemplateEntry(IconBulletDescriptionLayout, IconBulletDescriptionSchema, IconBulletDescriptionId, IconBulletDescriptionName, IconBulletDescriptionDesc, GROUP_ID, "IconBulletDescriptionLayout"),
    createTemplateEntry(IconImageDescriptionLayout, IconImageDescriptionSchema, IconImageDescriptionId, IconImageDescriptionName, IconImageDescriptionDesc, GROUP_ID, "IconImageDescriptionLayout"),
    createTemplateEntry(ImageListWithDescriptionLayout, ImageListWithDescriptionSchema, ImageListWithDescriptionId, ImageListWithDescriptionName, ImageListWithDescriptionDesc, GROUP_ID, "ImageListWithDescriptionLayout"),
    createTemplateEntry(IntroSlideLayout, IntroSchema, IntroId, IntroName, IntroDesc, GROUP_ID, "IntroSlideLayout"),
    createTemplateEntry(MetricsDescriptionLayout, MetricsDescriptionSchema, MetricsDescriptionId, MetricsDescriptionName, MetricsDescriptionDesc, GROUP_ID, "MetricsDescriptionLayout"),
    createTemplateEntry(NumberedBulletSingleImageLayout, NumberedBulletSingleImageSchema, NumberedBulletSingleImageId, NumberedBulletSingleImageName, NumberedBulletSingleImageDesc, GROUP_ID, "NumberedBulletSingleImageLayout"),
    createTemplateEntry(TableOfContentsLayout, TableOfContentsSchema, TableOfContentsId, TableOfContentsName, TableOfContentsDesc, GROUP_ID, "TableOfContentsLayout"),
    createTemplateEntry(VisualMetricsSlideLayout, VisualMetricsSchema, VisualMetricsId, VisualMetricsName, VisualMetricsDesc, GROUP_ID, "VisualMetricsSlideLayout"),
];
