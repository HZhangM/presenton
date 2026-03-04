import { TemplateWithData, TemplateGroupSettings, createTemplateEntry } from "../utils";

import TitleCenteredChart, { Schema as TitleCenteredChartSchema, layoutId as TitleCenteredChartId, layoutName as TitleCenteredChartName, layoutDescription as TitleCenteredChartDesc } from "./TitleCenteredChart";
import TitleChartMetricsSidebar, { Schema as TitleChartMetricsSidebarSchema, layoutId as TitleChartMetricsSidebarId, layoutName as TitleChartMetricsSidebarName, layoutDescription as TitleChartMetricsSidebarDesc } from "./TitleChartMetricsSidebar";
import TitleDescriptionBulletList, { Schema as TitleDescriptionBulletListSchema, layoutId as TitleDescriptionBulletListId, layoutName as TitleDescriptionBulletListName, layoutDescription as TitleDescriptionBulletListDesc } from "./TitleDescriptionBulletList";
import TitleDescriptionDataTable, { Schema as TitleDescriptionDataTableSchema, layoutId as TitleDescriptionDataTableId, layoutName as TitleDescriptionDataTableName, layoutDescription as TitleDescriptionDataTableDesc } from "./TitleDescriptionDataTable";
import TitleDescriptionFourChartsSixBullets, { Schema as TitleDescriptionFourChartsSixBulletsSchema, layoutId as TitleDescriptionFourChartsSixBulletsId, layoutName as TitleDescriptionFourChartsSixBulletsName, layoutDescription as TitleDescriptionFourChartsSixBulletsDesc } from "./TitleDescriptionFourChartsSixBullets";
import TitleDescriptionImageRight, { Schema as TitleDescriptionImageRightSchema, layoutId as TitleDescriptionImageRightId, layoutName as TitleDescriptionImageRightName, layoutDescription as TitleDescriptionImageRightDesc } from "./TitleDescriptionImageRight";
import TitleDescriptionMetricsGrid, { Schema as TitleDescriptionMetricsGridSchema, layoutId as TitleDescriptionMetricsGridId, layoutName as TitleDescriptionMetricsGridName, layoutDescription as TitleDescriptionMetricsGridDesc } from "./TitleDescriptionMetricsGrid";
import TitleDescriptionMetricsGridImage, { Schema as TitleDescriptionMetricsGridImageSchema, layoutId as TitleDescriptionMetricsGridImageId, layoutName as TitleDescriptionMetricsGridImageName, layoutDescription as TitleDescriptionMetricsGridImageDesc } from "./TitleDescriptionMetricsGridImage";
import TitleDescriptionSixChartsFourMetrics, { Schema as TitleDescriptionSixChartsFourMetricsSchema, layoutId as TitleDescriptionSixChartsFourMetricsId, layoutName as TitleDescriptionSixChartsFourMetricsName, layoutDescription as TitleDescriptionSixChartsFourMetricsDesc } from "./TitleDescriptionSixChartsFourMetrics";
import TitleDescriptionSixChartsGrid, { Schema as TitleDescriptionSixChartsGridSchema, layoutId as TitleDescriptionSixChartsGridId, layoutName as TitleDescriptionSixChartsGridName, layoutDescription as TitleDescriptionSixChartsGridDesc } from "./TitleDescriptionSixChartsGrid";
import TitleDualComparisonBlocks, { Schema as TitleDualComparisonBlocksSchema, layoutId as TitleDualComparisonBlocksId, layoutName as TitleDualComparisonBlocksName, layoutDescription as TitleDualComparisonBlocksDesc } from "./TitleDualComparisonBlocks";
import TitleLabelDescriptionStatCards, { Schema as TitleLabelDescriptionStatCardsSchema, layoutId as TitleLabelDescriptionStatCardsId, layoutName as TitleLabelDescriptionStatCardsName, layoutDescription as TitleLabelDescriptionStatCardsDesc } from "./TitleLabelDescriptionStatCards";
import TitleSubtitleTeamMemberCards, { Schema as TitleSubtitleTeamMemberCardsSchema, layoutId as TitleSubtitleTeamMemberCardsId, layoutName as TitleSubtitleTeamMemberCardsName, layoutDescription as TitleSubtitleTeamMemberCardsDesc } from "./TitleSubtitleTeamMemberCards";
import TitleTaglineDescriptionNumberedSteps, { Schema as TitleTaglineDescriptionNumberedStepsSchema, layoutId as TitleTaglineDescriptionNumberedStepsId, layoutName as TitleTaglineDescriptionNumberedStepsName, layoutDescription as TitleTaglineDescriptionNumberedStepsDesc } from "./TitleTaglineDescriptionNumberedSteps";
import TitleThreeByThreeMetricsGrid, { Schema as TitleThreeByThreeMetricsGridSchema, layoutId as TitleThreeByThreeMetricsGridId, layoutName as TitleThreeByThreeMetricsGridName, layoutDescription as TitleThreeByThreeMetricsGridDesc } from "./TitleThreeByThreeMetricsGrid";

const GROUP_ID = "neo-swift";

export const settings: TemplateGroupSettings = {
    description: "New swift purpose layouts for common presentation elements",
    ordered: false,
    default: false,
};

export const templates: TemplateWithData[] = [
    createTemplateEntry(TitleCenteredChart, TitleCenteredChartSchema, TitleCenteredChartId, TitleCenteredChartName, TitleCenteredChartDesc, GROUP_ID, "TitleCenteredChart"),
    createTemplateEntry(TitleChartMetricsSidebar, TitleChartMetricsSidebarSchema, TitleChartMetricsSidebarId, TitleChartMetricsSidebarName, TitleChartMetricsSidebarDesc, GROUP_ID, "TitleChartMetricsSidebar"),
    createTemplateEntry(TitleDescriptionBulletList, TitleDescriptionBulletListSchema, TitleDescriptionBulletListId, TitleDescriptionBulletListName, TitleDescriptionBulletListDesc, GROUP_ID, "TitleDescriptionBulletList"),
    createTemplateEntry(TitleDescriptionDataTable, TitleDescriptionDataTableSchema, TitleDescriptionDataTableId, TitleDescriptionDataTableName, TitleDescriptionDataTableDesc, GROUP_ID, "TitleDescriptionDataTable"),
    createTemplateEntry(TitleDescriptionFourChartsSixBullets, TitleDescriptionFourChartsSixBulletsSchema, TitleDescriptionFourChartsSixBulletsId, TitleDescriptionFourChartsSixBulletsName, TitleDescriptionFourChartsSixBulletsDesc, GROUP_ID, "TitleDescriptionFourChartsSixBullets"),
    createTemplateEntry(TitleDescriptionImageRight, TitleDescriptionImageRightSchema, TitleDescriptionImageRightId, TitleDescriptionImageRightName, TitleDescriptionImageRightDesc, GROUP_ID, "TitleDescriptionImageRight"),
    createTemplateEntry(TitleDescriptionMetricsGrid, TitleDescriptionMetricsGridSchema, TitleDescriptionMetricsGridId, TitleDescriptionMetricsGridName, TitleDescriptionMetricsGridDesc, GROUP_ID, "TitleDescriptionMetricsGrid"),
    createTemplateEntry(TitleDescriptionMetricsGridImage, TitleDescriptionMetricsGridImageSchema, TitleDescriptionMetricsGridImageId, TitleDescriptionMetricsGridImageName, TitleDescriptionMetricsGridImageDesc, GROUP_ID, "TitleDescriptionMetricsGridImage"),
    createTemplateEntry(TitleDescriptionSixChartsFourMetrics, TitleDescriptionSixChartsFourMetricsSchema, TitleDescriptionSixChartsFourMetricsId, TitleDescriptionSixChartsFourMetricsName, TitleDescriptionSixChartsFourMetricsDesc, GROUP_ID, "TitleDescriptionSixChartsFourMetrics"),
    createTemplateEntry(TitleDescriptionSixChartsGrid, TitleDescriptionSixChartsGridSchema, TitleDescriptionSixChartsGridId, TitleDescriptionSixChartsGridName, TitleDescriptionSixChartsGridDesc, GROUP_ID, "TitleDescriptionSixChartsGrid"),
    createTemplateEntry(TitleDualComparisonBlocks, TitleDualComparisonBlocksSchema, TitleDualComparisonBlocksId, TitleDualComparisonBlocksName, TitleDualComparisonBlocksDesc, GROUP_ID, "TitleDualComparisonBlocks"),
    createTemplateEntry(TitleLabelDescriptionStatCards, TitleLabelDescriptionStatCardsSchema, TitleLabelDescriptionStatCardsId, TitleLabelDescriptionStatCardsName, TitleLabelDescriptionStatCardsDesc, GROUP_ID, "TitleLabelDescriptionStatCards"),
    createTemplateEntry(TitleSubtitleTeamMemberCards, TitleSubtitleTeamMemberCardsSchema, TitleSubtitleTeamMemberCardsId, TitleSubtitleTeamMemberCardsName, TitleSubtitleTeamMemberCardsDesc, GROUP_ID, "TitleSubtitleTeamMemberCards"),
    createTemplateEntry(TitleTaglineDescriptionNumberedSteps, TitleTaglineDescriptionNumberedStepsSchema, TitleTaglineDescriptionNumberedStepsId, TitleTaglineDescriptionNumberedStepsName, TitleTaglineDescriptionNumberedStepsDesc, GROUP_ID, "TitleTaglineDescriptionNumberedSteps"),
    createTemplateEntry(TitleThreeByThreeMetricsGrid, TitleThreeByThreeMetricsGridSchema, TitleThreeByThreeMetricsGridId, TitleThreeByThreeMetricsGridName, TitleThreeByThreeMetricsGridDesc, GROUP_ID, "TitleThreeByThreeMetricsGrid"),
];
