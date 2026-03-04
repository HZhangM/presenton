import { TemplateWithData, TemplateGroupSettings, createTemplateEntry } from "../utils";

import TitleDescriptionBulletList, { Schema as TitleDescriptionBulletListSchema, layoutId as TitleDescriptionBulletListId, layoutName as TitleDescriptionBulletListName, layoutDescription as TitleDescriptionBulletListDesc } from "./TitleDescriptionBulletList";
import TitleDescriptionContactList, { Schema as TitleDescriptionContactListSchema, layoutId as TitleDescriptionContactListId, layoutName as TitleDescriptionContactListName, layoutDescription as TitleDescriptionContactListDesc } from "./TitleDescriptionContactList";
import TitleDescriptionDualMetricsGrid, { Schema as TitleDescriptionDualMetricsGridSchema, layoutId as TitleDescriptionDualMetricsGridId, layoutName as TitleDescriptionDualMetricsGridName, layoutDescription as TitleDescriptionDualMetricsGridDesc } from "./TitleDescriptionDualMetricsGrid";
import TitleDescriptionIconTimeline, { Schema as TitleDescriptionIconTimelineSchema, layoutId as TitleDescriptionIconTimelineId, layoutName as TitleDescriptionIconTimelineName, layoutDescription as TitleDescriptionIconTimelineDesc } from "./TitleDescriptionIconTimeline";
import TitleDescriptionImageRight, { Schema as TitleDescriptionImageRightSchema, layoutId as TitleDescriptionImageRightId, layoutName as TitleDescriptionImageRightName, layoutDescription as TitleDescriptionImageRightDesc } from "./TitleDescriptionImageRight";
import TitleDescriptionMetricsChart, { Schema as TitleDescriptionMetricsChartSchema, layoutId as TitleDescriptionMetricsChartId, layoutName as TitleDescriptionMetricsChartName, layoutDescription as TitleDescriptionMetricsChartDesc } from "./TitleDescriptionMetricsChart";
import TitleDescriptionMetricsImage, { Schema as TitleDescriptionMetricsImageSchema, layoutId as TitleDescriptionMetricsImageId, layoutName as TitleDescriptionMetricsImageName, layoutDescription as TitleDescriptionMetricsImageDesc } from "./TitleDescriptionMetricsImage";
import TitleDescriptionMultiChartGrid, { Schema as TitleDescriptionMultiChartGridSchema, layoutId as TitleDescriptionMultiChartGridId, layoutName as TitleDescriptionMultiChartGridName, layoutDescription as TitleDescriptionMultiChartGridDesc } from "./TitleDescriptionMultiChartGrid";
import TitleDescriptionMultiChartGridWithBullets, { Schema as TitleDescriptionMultiChartGridWithBulletsSchema, layoutId as TitleDescriptionMultiChartGridWithBulletsId, layoutName as TitleDescriptionMultiChartGridWithBulletsName, layoutDescription as TitleDescriptionMultiChartGridWithBulletsDesc } from "./TitleDescriptionMultiChartGridWithBullets";
import TitleDescriptionMultiChartGridWithMetrics, { Schema as TitleDescriptionMultiChartGridWithMetricsSchema, layoutId as TitleDescriptionMultiChartGridWithMetricsId, layoutName as TitleDescriptionMultiChartGridWithMetricsName, layoutDescription as TitleDescriptionMultiChartGridWithMetricsDesc } from "./TitleDescriptionMultiChartGridWithMetrics";
import TitleDescriptionTable, { Schema as TitleDescriptionTableSchema, layoutId as TitleDescriptionTableId, layoutName as TitleDescriptionTableName, layoutDescription as TitleDescriptionTableDesc } from "./TitleDescriptionTable";
import TitleDualComparisonCards, { Schema as TitleDualComparisonCardsSchema, layoutId as TitleDualComparisonCardsId, layoutName as TitleDualComparisonCardsName, layoutDescription as TitleDualComparisonCardsDesc } from "./TitleDualComparisonCards";
import TitleDualComparisonCharts, { Schema as TitleDualComparisonChartsSchema, layoutId as TitleDualComparisonChartsId, layoutName as TitleDualComparisonChartsName, layoutDescription as TitleDualComparisonChartsDesc } from "./TitleDualComparisonCharts";
import TitleHorizontalAlternatingTimeline, { Schema as TitleHorizontalAlternatingTimelineSchema, layoutId as TitleHorizontalAlternatingTimelineId, layoutName as TitleHorizontalAlternatingTimelineName, layoutDescription as TitleHorizontalAlternatingTimelineDesc } from "./TitleHorizontalAlternatingTimeline";
import TitleKpiSnapshotGrid, { Schema as TitleKpiSnapshotGridSchema, layoutId as TitleKpiSnapshotGridId, layoutName as TitleKpiSnapshotGridName, layoutDescription as TitleKpiSnapshotGridDesc } from "./TitleKpiSnapshotGrid";
import TitleSubtitlesChart, { Schema as TitleSubtitlesChartSchema, layoutId as TitleSubtitlesChartId, layoutName as TitleSubtitlesChartName, layoutDescription as TitleSubtitlesChartDesc } from "./TitleSubtitlesChart";
import TitleTwoColumnNumberedList, { Schema as TitleTwoColumnNumberedListSchema, layoutId as TitleTwoColumnNumberedListId, layoutName as TitleTwoColumnNumberedListName, layoutDescription as TitleTwoColumnNumberedListDesc } from "./TitleTwoColumnNumberedList";

const GROUP_ID = "neo-modern";

export const settings: TemplateGroupSettings = {
    description: "New modern purpose layouts for common presentation elements",
    ordered: false,
    default: false,
};

export const templates: TemplateWithData[] = [
    createTemplateEntry(TitleDescriptionBulletList, TitleDescriptionBulletListSchema, TitleDescriptionBulletListId, TitleDescriptionBulletListName, TitleDescriptionBulletListDesc, GROUP_ID, "TitleDescriptionBulletList"),
    createTemplateEntry(TitleDescriptionContactList, TitleDescriptionContactListSchema, TitleDescriptionContactListId, TitleDescriptionContactListName, TitleDescriptionContactListDesc, GROUP_ID, "TitleDescriptionContactList"),
    createTemplateEntry(TitleDescriptionDualMetricsGrid, TitleDescriptionDualMetricsGridSchema, TitleDescriptionDualMetricsGridId, TitleDescriptionDualMetricsGridName, TitleDescriptionDualMetricsGridDesc, GROUP_ID, "TitleDescriptionDualMetricsGrid"),
    createTemplateEntry(TitleDescriptionIconTimeline, TitleDescriptionIconTimelineSchema, TitleDescriptionIconTimelineId, TitleDescriptionIconTimelineName, TitleDescriptionIconTimelineDesc, GROUP_ID, "TitleDescriptionIconTimeline"),
    createTemplateEntry(TitleDescriptionImageRight, TitleDescriptionImageRightSchema, TitleDescriptionImageRightId, TitleDescriptionImageRightName, TitleDescriptionImageRightDesc, GROUP_ID, "TitleDescriptionImageRight"),
    createTemplateEntry(TitleDescriptionMetricsChart, TitleDescriptionMetricsChartSchema, TitleDescriptionMetricsChartId, TitleDescriptionMetricsChartName, TitleDescriptionMetricsChartDesc, GROUP_ID, "TitleDescriptionMetricsChart"),
    createTemplateEntry(TitleDescriptionMetricsImage, TitleDescriptionMetricsImageSchema, TitleDescriptionMetricsImageId, TitleDescriptionMetricsImageName, TitleDescriptionMetricsImageDesc, GROUP_ID, "TitleDescriptionMetricsImage"),
    createTemplateEntry(TitleDescriptionMultiChartGrid, TitleDescriptionMultiChartGridSchema, TitleDescriptionMultiChartGridId, TitleDescriptionMultiChartGridName, TitleDescriptionMultiChartGridDesc, GROUP_ID, "TitleDescriptionMultiChartGrid"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithBullets, TitleDescriptionMultiChartGridWithBulletsSchema, TitleDescriptionMultiChartGridWithBulletsId, TitleDescriptionMultiChartGridWithBulletsName, TitleDescriptionMultiChartGridWithBulletsDesc, GROUP_ID, "TitleDescriptionMultiChartGridWithBullets"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithMetrics, TitleDescriptionMultiChartGridWithMetricsSchema, TitleDescriptionMultiChartGridWithMetricsId, TitleDescriptionMultiChartGridWithMetricsName, TitleDescriptionMultiChartGridWithMetricsDesc, GROUP_ID, "TitleDescriptionMultiChartGridWithMetrics"),
    createTemplateEntry(TitleDescriptionTable, TitleDescriptionTableSchema, TitleDescriptionTableId, TitleDescriptionTableName, TitleDescriptionTableDesc, GROUP_ID, "TitleDescriptionTable"),
    createTemplateEntry(TitleDualComparisonCards, TitleDualComparisonCardsSchema, TitleDualComparisonCardsId, TitleDualComparisonCardsName, TitleDualComparisonCardsDesc, GROUP_ID, "TitleDualComparisonCards"),
    createTemplateEntry(TitleDualComparisonCharts, TitleDualComparisonChartsSchema, TitleDualComparisonChartsId, TitleDualComparisonChartsName, TitleDualComparisonChartsDesc, GROUP_ID, "TitleDualComparisonCharts"),
    createTemplateEntry(TitleHorizontalAlternatingTimeline, TitleHorizontalAlternatingTimelineSchema, TitleHorizontalAlternatingTimelineId, TitleHorizontalAlternatingTimelineName, TitleHorizontalAlternatingTimelineDesc, GROUP_ID, "TitleHorizontalAlternatingTimeline"),
    createTemplateEntry(TitleKpiSnapshotGrid, TitleKpiSnapshotGridSchema, TitleKpiSnapshotGridId, TitleKpiSnapshotGridName, TitleKpiSnapshotGridDesc, GROUP_ID, "TitleKpiSnapshotGrid"),
    createTemplateEntry(TitleSubtitlesChart, TitleSubtitlesChartSchema, TitleSubtitlesChartId, TitleSubtitlesChartName, TitleSubtitlesChartDesc, GROUP_ID, "TitleSubtitlesChart"),
    createTemplateEntry(TitleTwoColumnNumberedList, TitleTwoColumnNumberedListSchema, TitleTwoColumnNumberedListId, TitleTwoColumnNumberedListName, TitleTwoColumnNumberedListDesc, GROUP_ID, "TitleTwoColumnNumberedList"),
];
