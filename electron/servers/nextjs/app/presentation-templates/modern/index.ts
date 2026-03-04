import { TemplateWithData, TemplateGroupSettings, createTemplateEntry } from "../utils";

import BulletsWithIconsDescriptionGrid, { Schema as BulletsWithIconsDescriptionGridSchema, layoutId as BulletsWithIconsDescriptionGridId, layoutName as BulletsWithIconsDescriptionGridName, layoutDescription as BulletsWithIconsDescriptionGridDesc } from "./BulletsWithIconsDescriptionGrid";
import BulletWithIconsSlideLayout, { Schema as BulletWithIconsSchema, layoutId as BulletWithIconsId, layoutName as BulletWithIconsName, layoutDescription as BulletWithIconsDesc } from "./BulletWithIconsSlideLayout";
import ChartOrTableWithDescription, { Schema as ChartOrTableWithDescriptionSchema, layoutId as ChartOrTableWithDescriptionId, layoutName as ChartOrTableWithDescriptionName, layoutDescription as ChartOrTableWithDescriptionDesc } from "./ChartOrTableWithDescription";
import ChartOrTableWithMetricsDescription, { Schema as ChartOrTableWithMetricsDescriptionSchema, layoutId as ChartOrTableWithMetricsDescriptionId, layoutName as ChartOrTableWithMetricsDescriptionName, layoutDescription as ChartOrTableWithMetricsDescriptionDesc } from "./ChartOrTableWithMetricsDescription";
import ImageAndDescriptionLayout, { Schema as ImageAndDescriptionSchema, layoutId as ImageAndDescriptionId, layoutName as ImageAndDescriptionName, layoutDescription as ImageAndDescriptionDesc } from "./ImageAndDescriptionLayout";
import ImageListWithDescriptionSlideLayout, { Schema as ImageListWithDescriptionSchema, layoutId as ImageListWithDescriptionId, layoutName as ImageListWithDescriptionName, layoutDescription as ImageListWithDescriptionDesc } from "./ImageListWithDescriptionSlideLayout";
import ImagesWithDescriptionLayout, { Schema as ImagesWithDescriptionSchema, layoutId as ImagesWithDescriptionId, layoutName as ImagesWithDescriptionName, layoutDescription as ImagesWithDescriptionDesc } from "./ImagesWithDescriptionLayout";
import IntroSlideLayout, { Schema as IntroSchema, layoutId as IntroId, layoutName as IntroName, layoutDescription as IntroDesc } from "./IntroSlideLayout";
import MetricsWithDescription, { Schema as MetricsWithDescriptionSchema, layoutId as MetricsWithDescriptionId, layoutName as MetricsWithDescriptionName, layoutDescription as MetricsWithDescriptionDesc } from "./MetricsWithDescription";
import TableOfContentsLayout, { Schema as TableOfContentsSchema, layoutId as TableOfContentsId, layoutName as TableOfContentsName, layoutDescription as TableOfContentsDesc } from "./TableOfContentsLayout";

const GROUP_ID = "modern";

export const settings: TemplateGroupSettings = {
    description: "Modern white and blue business pitch deck layouts with clean, professional design",
    ordered: false,
    default: false,
};

export const templates: TemplateWithData[] = [
    createTemplateEntry(BulletsWithIconsDescriptionGrid, BulletsWithIconsDescriptionGridSchema, BulletsWithIconsDescriptionGridId, BulletsWithIconsDescriptionGridName, BulletsWithIconsDescriptionGridDesc, GROUP_ID, "BulletsWithIconsDescriptionGrid"),
    createTemplateEntry(BulletWithIconsSlideLayout, BulletWithIconsSchema, BulletWithIconsId, BulletWithIconsName, BulletWithIconsDesc, GROUP_ID, "BulletWithIconsSlideLayout"),
    createTemplateEntry(ChartOrTableWithDescription, ChartOrTableWithDescriptionSchema, ChartOrTableWithDescriptionId, ChartOrTableWithDescriptionName, ChartOrTableWithDescriptionDesc, GROUP_ID, "ChartOrTableWithDescription"),
    createTemplateEntry(ChartOrTableWithMetricsDescription, ChartOrTableWithMetricsDescriptionSchema, ChartOrTableWithMetricsDescriptionId, ChartOrTableWithMetricsDescriptionName, ChartOrTableWithMetricsDescriptionDesc, GROUP_ID, "ChartOrTableWithMetricsDescription"),
    createTemplateEntry(ImageAndDescriptionLayout, ImageAndDescriptionSchema, ImageAndDescriptionId, ImageAndDescriptionName, ImageAndDescriptionDesc, GROUP_ID, "ImageAndDescriptionLayout"),
    createTemplateEntry(ImageListWithDescriptionSlideLayout, ImageListWithDescriptionSchema, ImageListWithDescriptionId, ImageListWithDescriptionName, ImageListWithDescriptionDesc, GROUP_ID, "ImageListWithDescriptionSlideLayout"),
    createTemplateEntry(ImagesWithDescriptionLayout, ImagesWithDescriptionSchema, ImagesWithDescriptionId, ImagesWithDescriptionName, ImagesWithDescriptionDesc, GROUP_ID, "ImagesWithDescriptionLayout"),
    createTemplateEntry(IntroSlideLayout, IntroSchema, IntroId, IntroName, IntroDesc, GROUP_ID, "IntroSlideLayout"),
    createTemplateEntry(MetricsWithDescription, MetricsWithDescriptionSchema, MetricsWithDescriptionId, MetricsWithDescriptionName, MetricsWithDescriptionDesc, GROUP_ID, "MetricsWithDescription"),
    createTemplateEntry(TableOfContentsLayout, TableOfContentsSchema, TableOfContentsId, TableOfContentsName, TableOfContentsDesc, GROUP_ID, "TableOfContentsLayout"),
];
