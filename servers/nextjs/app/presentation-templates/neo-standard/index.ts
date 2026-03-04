import { TemplateWithData, TemplateGroupSettings, createTemplateEntry } from "../utils";

import TitleBadgeChart, { Schema as TitleBadgeChartSchema, layoutId as TitleBadgeChartId, layoutName as TitleBadgeChartName, layoutDescription as TitleBadgeChartDesc } from "./TitleBadgeChart";
import TitleDescriptionBulletList, { Schema as TitleDescriptionBulletListSchema, layoutId as TitleDescriptionBulletListId, layoutName as TitleDescriptionBulletListName, layoutDescription as TitleDescriptionBulletListDesc } from "./TitleDescriptionBulletList";
import TitleDescriptionContactCards, { Schema as TitleDescriptionContactCardsSchema, layoutId as TitleDescriptionContactCardsId, layoutName as TitleDescriptionContactCardsName, layoutDescription as TitleDescriptionContactCardsDesc } from "./TitleDescriptionContactCards";
import TitleDescriptionIconList, { Schema as TitleDescriptionIconListSchema, layoutId as TitleDescriptionIconListId, layoutName as TitleDescriptionIconListName, layoutDescription as TitleDescriptionIconListDesc } from "./TitleDescriptionIconList";
import TitleDescriptionImageRight, { Schema as TitleDescriptionImageRightSchema, layoutId as TitleDescriptionImageRightId, layoutName as TitleDescriptionImageRightName, layoutDescription as TitleDescriptionImageRightDesc } from "./TitleDescriptionImageRight";
import TitleDescriptionMultiChartGrid, { Schema as TitleDescriptionMultiChartGridSchema, layoutId as TitleDescriptionMultiChartGridId, layoutName as TitleDescriptionMultiChartGridName, layoutDescription as TitleDescriptionMultiChartGridDesc } from "./TitleDescriptionMultiChartGrid";
import TitleDescriptionMultiChartGridWithBullets, { Schema as TitleDescriptionMultiChartGridWithBulletsSchema, layoutId as TitleDescriptionMultiChartGridWithBulletsId, layoutName as TitleDescriptionMultiChartGridWithBulletsName, layoutDescription as TitleDescriptionMultiChartGridWithBulletsDesc } from "./TitleDescriptionMultiChartGridWithBullets";
import TitleDescriptionMultiChartGridWithMetrics, { Schema as TitleDescriptionMultiChartGridWithMetricsSchema, layoutId as TitleDescriptionMultiChartGridWithMetricsId, layoutName as TitleDescriptionMultiChartGridWithMetricsName, layoutDescription as TitleDescriptionMultiChartGridWithMetricsDesc } from "./TitleDescriptionMultiChartGridWithMetrics";
import TitleDescriptionRadialCards, { Schema as TitleDescriptionRadialCardsSchema, layoutId as TitleDescriptionRadialCardsId, layoutName as TitleDescriptionRadialCardsName, layoutDescription as TitleDescriptionRadialCardsDesc } from "./TitleDescriptionRadialCards";
import TitleDescriptionTable, { Schema as TitleDescriptionTableSchema, layoutId as TitleDescriptionTableId, layoutName as TitleDescriptionTableName, layoutDescription as TitleDescriptionTableDesc } from "./TitleDescriptionTable";
import TitleDescriptionTimeline, { Schema as TitleDescriptionTimelineSchema, layoutId as TitleDescriptionTimelineId, layoutName as TitleDescriptionTimelineName, layoutDescription as TitleDescriptionTimelineDesc } from "./TitleDescriptionTimeline";
import TitleDualChartsComparison, { Schema as TitleDualChartsComparisonSchema, layoutId as TitleDualChartsComparisonId, layoutName as TitleDualChartsComparisonName, layoutDescription as TitleDualChartsComparisonDesc } from "./TitleDualChartsComparison";
import TitleDualComparisonCards, { Schema as TitleDualComparisonCardsSchema, layoutId as TitleDualComparisonCardsId, layoutName as TitleDualComparisonCardsName, layoutDescription as TitleDualComparisonCardsDesc } from "./TitleDualComparisonCards";
import TitleKpiGrid, { Schema as TitleKpiGridSchema, layoutId as TitleKpiGridId, layoutName as TitleKpiGridName, layoutDescription as TitleKpiGridDesc } from "./TitleKpiGrid";
import TitleMetricsChart, { Schema as TitleMetricsChartSchema, layoutId as TitleMetricsChartId, layoutName as TitleMetricsChartName, layoutDescription as TitleMetricsChartDesc } from "./TitleMetricsChart";
import TitleMetricsImage, { Schema as TitleMetricsImageSchema, layoutId as TitleMetricsImageId, layoutName as TitleMetricsImageName, layoutDescription as TitleMetricsImageDesc } from "./TitleMetricsImage";
import TitlePointsDonutGrid, { Schema as TitlePointsDonutGridSchema, layoutId as TitlePointsDonutGridId, layoutName as TitlePointsDonutGridName, layoutDescription as TitlePointsDonutGridDesc } from "./TitlePointsDonutGrid";

const GROUP_ID = "neo-standard";

export const settings: TemplateGroupSettings = {
    description: "New standard purpose layouts for common presentation elements",
    ordered: false,
    default: false,
};

export const templates: TemplateWithData[] = [
    createTemplateEntry(TitleBadgeChart, TitleBadgeChartSchema, TitleBadgeChartId, TitleBadgeChartName, TitleBadgeChartDesc, GROUP_ID, "TitleBadgeChart"),
    createTemplateEntry(TitleDescriptionBulletList, TitleDescriptionBulletListSchema, TitleDescriptionBulletListId, TitleDescriptionBulletListName, TitleDescriptionBulletListDesc, GROUP_ID, "TitleDescriptionBulletList"),
    createTemplateEntry(TitleDescriptionContactCards, TitleDescriptionContactCardsSchema, TitleDescriptionContactCardsId, TitleDescriptionContactCardsName, TitleDescriptionContactCardsDesc, GROUP_ID, "TitleDescriptionContactCards"),
    createTemplateEntry(TitleDescriptionIconList, TitleDescriptionIconListSchema, TitleDescriptionIconListId, TitleDescriptionIconListName, TitleDescriptionIconListDesc, GROUP_ID, "TitleDescriptionIconList"),
    createTemplateEntry(TitleDescriptionImageRight, TitleDescriptionImageRightSchema, TitleDescriptionImageRightId, TitleDescriptionImageRightName, TitleDescriptionImageRightDesc, GROUP_ID, "TitleDescriptionImageRight"),
    createTemplateEntry(TitleDescriptionMultiChartGrid, TitleDescriptionMultiChartGridSchema, TitleDescriptionMultiChartGridId, TitleDescriptionMultiChartGridName, TitleDescriptionMultiChartGridDesc, GROUP_ID, "TitleDescriptionMultiChartGrid"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithBullets, TitleDescriptionMultiChartGridWithBulletsSchema, TitleDescriptionMultiChartGridWithBulletsId, TitleDescriptionMultiChartGridWithBulletsName, TitleDescriptionMultiChartGridWithBulletsDesc, GROUP_ID, "TitleDescriptionMultiChartGridWithBullets"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithMetrics, TitleDescriptionMultiChartGridWithMetricsSchema, TitleDescriptionMultiChartGridWithMetricsId, TitleDescriptionMultiChartGridWithMetricsName, TitleDescriptionMultiChartGridWithMetricsDesc, GROUP_ID, "TitleDescriptionMultiChartGridWithMetrics"),
    createTemplateEntry(TitleDescriptionRadialCards, TitleDescriptionRadialCardsSchema, TitleDescriptionRadialCardsId, TitleDescriptionRadialCardsName, TitleDescriptionRadialCardsDesc, GROUP_ID, "TitleDescriptionRadialCards"),
    createTemplateEntry(TitleDescriptionTable, TitleDescriptionTableSchema, TitleDescriptionTableId, TitleDescriptionTableName, TitleDescriptionTableDesc, GROUP_ID, "TitleDescriptionTable"),
    createTemplateEntry(TitleDescriptionTimeline, TitleDescriptionTimelineSchema, TitleDescriptionTimelineId, TitleDescriptionTimelineName, TitleDescriptionTimelineDesc, GROUP_ID, "TitleDescriptionTimeline"),
    createTemplateEntry(TitleDualChartsComparison, TitleDualChartsComparisonSchema, TitleDualChartsComparisonId, TitleDualChartsComparisonName, TitleDualChartsComparisonDesc, GROUP_ID, "TitleDualChartsComparison"),
    createTemplateEntry(TitleDualComparisonCards, TitleDualComparisonCardsSchema, TitleDualComparisonCardsId, TitleDualComparisonCardsName, TitleDualComparisonCardsDesc, GROUP_ID, "TitleDualComparisonCards"),
    createTemplateEntry(TitleKpiGrid, TitleKpiGridSchema, TitleKpiGridId, TitleKpiGridName, TitleKpiGridDesc, GROUP_ID, "TitleKpiGrid"),
    createTemplateEntry(TitleMetricsChart, TitleMetricsChartSchema, TitleMetricsChartId, TitleMetricsChartName, TitleMetricsChartDesc, GROUP_ID, "TitleMetricsChart"),
    createTemplateEntry(TitleMetricsImage, TitleMetricsImageSchema, TitleMetricsImageId, TitleMetricsImageName, TitleMetricsImageDesc, GROUP_ID, "TitleMetricsImage"),
    createTemplateEntry(TitlePointsDonutGrid, TitlePointsDonutGridSchema, TitlePointsDonutGridId, TitlePointsDonutGridName, TitlePointsDonutGridDesc, GROUP_ID, "TitlePointsDonutGrid"),
];
