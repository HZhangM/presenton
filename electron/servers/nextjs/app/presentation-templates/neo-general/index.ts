import { TemplateWithData, TemplateGroupSettings, createTemplateEntry } from "../utils";

import BulletIconsOnlySlideLayout, { Schema as BulletIconsOnlySchema, layoutId as BulletIconsOnlyId, layoutName as BulletIconsOnlyName, layoutDescription as BulletIconsOnlyDesc } from "./BulletIconsOnlySlideLayout";
import BulletWithIconsSlideLayout, { Schema as BulletWithIconsSchema, layoutId as BulletWithIconsId, layoutName as BulletWithIconsName, layoutDescription as BulletWithIconsDesc } from "./BulletWithIconsSlideLayout";
import ChallengeAndOutcomeWithOneStat, { Schema as ChallengeAndOutcomeWithOneStatSchema, layoutId as ChallengeAndOutcomeWithOneStatId, layoutName as ChallengeAndOutcomeWithOneStatName, layoutDescription as ChallengeAndOutcomeWithOneStatDesc } from "./ChallengeAndOutcomeWithOneStat";
import ChartWithBulletsSlideLayout, { Schema as ChartWithBulletsSchema, layoutId as ChartWithBulletsId, layoutName as ChartWithBulletsName, layoutDescription as ChartWithBulletsDesc } from "./ChartWithBulletsSlideLayout";
import GridBasedEightMetricsSnapshots, { Schema as GridBasedEightMetricsSnapshotsSchema, layoutId as GridBasedEightMetricsSnapshotsId, layoutName as GridBasedEightMetricsSnapshotsName, layoutDescription as GridBasedEightMetricsSnapshotsDesc } from "./GridBasedEightMetricsSnapshots";
import HeadlineDescriptionWithDoubleImage, { Schema as HeadlineDescriptionWithDoubleImageSchema, layoutId as HeadlineDescriptionWithDoubleImageId, layoutName as HeadlineDescriptionWithDoubleImageName, layoutDescription as HeadlineDescriptionWithDoubleImageDesc } from "./HeadlineDescriptionWithDoubleImage";
import HeadlineDescriptionWithImage, { Schema as HeadlineDescriptionWithImageSchema, layoutId as HeadlineDescriptionWithImageId, layoutName as HeadlineDescriptionWithImageName, layoutDescription as HeadlineDescriptionWithImageDesc } from "./HeadlineDescriptionWithImage";
import HeadlineTextWithBulletsAndStats, { Schema as HeadlineTextWithBulletsAndStatsSchema, layoutId as HeadlineTextWithBulletsAndStatsId, layoutName as HeadlineTextWithBulletsAndStatsName, layoutDescription as HeadlineTextWithBulletsAndStatsDesc } from "./HeadlineTextWithBulletsAndStats";
import IndexedThreeColumnList, { Schema as IndexedThreeColumnListSchema, layoutId as IndexedThreeColumnListId, layoutName as IndexedThreeColumnListName, layoutDescription as IndexedThreeColumnListDesc } from "./IndexedThreeColumnList";
import LayoutTextBlockWithMetricCards, { Schema as LayoutTextBlockWithMetricCardsSchema, layoutId as LayoutTextBlockWithMetricCardsId, layoutName as LayoutTextBlockWithMetricCardsName, layoutDescription as LayoutTextBlockWithMetricCardsDesc } from "./LayoutTextBlockWithMetricCards";
import LeftAlignQuote, { Schema as LeftAlignQuoteSchema, layoutId as LeftAlignQuoteId, layoutName as LeftAlignQuoteName, layoutDescription as LeftAlignQuoteDesc } from "./LeftAlignQuote";
import MetricsWithImageSlideLayout, { Schema as MetricsWithImageSchema, layoutId as MetricsWithImageId, layoutName as MetricsWithImageName, layoutDescription as MetricsWithImageDesc } from "./MetricsWithImageSlideLayout";
import MultiChartGridSlideLayout, { Schema as MultiChartGridSchema, layoutId as MultiChartGridId, layoutName as MultiChartGridName, layoutDescription as MultiChartGridDesc } from "./MultiChartGridSlideLayout";
import NumberedBulletsSlideLayout, { Schema as NumberedBulletsSchema, layoutId as NumberedBulletsId, layoutName as NumberedBulletsName, layoutDescription as NumberedBulletsDesc } from "./NumberedBulletsSlideLayout";
import QuoteSlideLayout, { Schema as QuoteSchema, layoutId as QuoteId, layoutName as QuoteName, layoutDescription as QuoteDesc } from "./QuoteSlideLayout";
import TableOfContentWithoutPageNumber, { Schema as TableOfContentWithoutPageNumberSchema, layoutId as TableOfContentWithoutPageNumberId, layoutName as TableOfContentWithoutPageNumberName, layoutDescription as TableOfContentWithoutPageNumberDesc } from "./TableOfContentWithoutPageNumber";
import TeamSlideLayout, { Schema as TeamSchema, layoutId as TeamId, layoutName as TeamName, layoutDescription as TeamDesc } from "./TeamSlideLayout";
import TextSplitWithEmphasisBlock, { Schema as TextSplitWithEmphasisBlockSchema, layoutId as TextSplitWithEmphasisBlockId, layoutName as TextSplitWithEmphasisBlockName, layoutDescription as TextSplitWithEmphasisBlockDesc } from "./TextSplitWithEmphasisBlock";
import ThankYouContactInfoFooterImageSlide, { Schema as ThankYouContactInfoFooterImageSchema, layoutId as ThankYouContactInfoFooterImageId, layoutName as ThankYouContactInfoFooterImageName, layoutDescription as ThankYouContactInfoFooterImageDesc } from "./ThankYouContactInfoFooterImageSlide";
import Timeline, { Schema as TimelineSchema, layoutId as TimelineId, layoutName as TimelineName, layoutDescription as TimelineDesc } from "./Timeline";
import TitleDescriptionMultiChartGridWithBullets, { Schema as TitleDescriptionMultiChartGridWithBulletsSchema, layoutId as TitleDescriptionMultiChartGridWithBulletsId, layoutName as TitleDescriptionMultiChartGridWithBulletsName, layoutDescription as TitleDescriptionMultiChartGridWithBulletsDesc } from "./TitleDescriptionMultiChartGridWithBullets";
import TitleDescriptionMultiChartGridWithMetrics, { Schema as TitleDescriptionMultiChartGridWithMetricsSchema, layoutId as TitleDescriptionMultiChartGridWithMetricsId, layoutName as TitleDescriptionMultiChartGridWithMetricsName, layoutDescription as TitleDescriptionMultiChartGridWithMetricsDesc } from "./TitleDescriptionMultiChartGridWithMetrics";
import TitleDescriptionWithTable, { Schema as TitleDescriptionWithTableSchema, layoutId as TitleDescriptionWithTableId, layoutName as TitleDescriptionWithTableName, layoutDescription as TitleDescriptionWithTableDesc } from "./TitleDescriptionWithTable";
import TitleMetricsWithChart, { Schema as TitleMetricsWithChartSchema, layoutId as TitleMetricsWithChartId, layoutName as TitleMetricsWithChartName, layoutDescription as TitleMetricsWithChartDesc } from "./TitleMetricsWithChart";
import TitleMetricValueMetricLabelFunnelStages, { Schema as TitleMetricValueMetricLabelFunnelStagesSchema, layoutId as TitleMetricValueMetricLabelFunnelStagesId, layoutName as TitleMetricValueMetricLabelFunnelStagesName, layoutDescription as TitleMetricValueMetricLabelFunnelStagesDesc } from "./TitleMetricValueMetricLabelFunnelStages";
import TitleThreeColumnRiskConstraints, { Schema as TitleThreeColumnRiskConstraintsSchema, layoutId as TitleThreeColumnRiskConstraintsId, layoutName as TitleThreeColumnRiskConstraintsName, layoutDescription as TitleThreeColumnRiskConstraintsDesc } from "./TitleThreeColumnRiskConstraints";
import TitleTopDescriptionFourTeamMembersGrid, { Schema as TitleTopDescriptionFourTeamMembersGridSchema, layoutId as TitleTopDescriptionFourTeamMembersGridId, layoutName as TitleTopDescriptionFourTeamMembersGridName, layoutDescription as TitleTopDescriptionFourTeamMembersGridDesc } from "./TitleTopDescriptionFourTeamMembersGrid";
import TitleWithFullWidthChart, { Schema as TitleWithFullWidthChartSchema, layoutId as TitleWithFullWidthChartId, layoutName as TitleWithFullWidthChartName, layoutDescription as TitleWithFullWidthChartDesc } from "./TitleWithFullWidthChart";
import TitleWithGridBasedHeadingAndDescription, { Schema as TitleWithGridBasedHeadingAndDescriptionSchema, layoutId as TitleWithGridBasedHeadingAndDescriptionId, layoutName as TitleWithGridBasedHeadingAndDescriptionName, layoutDescription as TitleWithGridBasedHeadingAndDescriptionDesc } from "./TitleWithGridBasedHeadingAndDescription";

const GROUP_ID = "neo-general";

export const settings: TemplateGroupSettings = {
    description: "New general purpose layouts for common presentation elements",
    ordered: false,
    default: false,
};

export const templates: TemplateWithData[] = [
    createTemplateEntry(BulletIconsOnlySlideLayout, BulletIconsOnlySchema, BulletIconsOnlyId, BulletIconsOnlyName, BulletIconsOnlyDesc, GROUP_ID, "BulletIconsOnlySlideLayout"),
    createTemplateEntry(BulletWithIconsSlideLayout, BulletWithIconsSchema, BulletWithIconsId, BulletWithIconsName, BulletWithIconsDesc, GROUP_ID, "BulletWithIconsSlideLayout"),
    createTemplateEntry(ChallengeAndOutcomeWithOneStat, ChallengeAndOutcomeWithOneStatSchema, ChallengeAndOutcomeWithOneStatId, ChallengeAndOutcomeWithOneStatName, ChallengeAndOutcomeWithOneStatDesc, GROUP_ID, "ChallengeAndOutcomeWithOneStat"),
    createTemplateEntry(ChartWithBulletsSlideLayout, ChartWithBulletsSchema, ChartWithBulletsId, ChartWithBulletsName, ChartWithBulletsDesc, GROUP_ID, "ChartWithBulletsSlideLayout"),
    createTemplateEntry(GridBasedEightMetricsSnapshots, GridBasedEightMetricsSnapshotsSchema, GridBasedEightMetricsSnapshotsId, GridBasedEightMetricsSnapshotsName, GridBasedEightMetricsSnapshotsDesc, GROUP_ID, "GridBasedEightMetricsSnapshots"),
    createTemplateEntry(HeadlineDescriptionWithDoubleImage, HeadlineDescriptionWithDoubleImageSchema, HeadlineDescriptionWithDoubleImageId, HeadlineDescriptionWithDoubleImageName, HeadlineDescriptionWithDoubleImageDesc, GROUP_ID, "HeadlineDescriptionWithDoubleImage"),
    createTemplateEntry(HeadlineDescriptionWithImage, HeadlineDescriptionWithImageSchema, HeadlineDescriptionWithImageId, HeadlineDescriptionWithImageName, HeadlineDescriptionWithImageDesc, GROUP_ID, "HeadlineDescriptionWithImage"),
    createTemplateEntry(HeadlineTextWithBulletsAndStats, HeadlineTextWithBulletsAndStatsSchema, HeadlineTextWithBulletsAndStatsId, HeadlineTextWithBulletsAndStatsName, HeadlineTextWithBulletsAndStatsDesc, GROUP_ID, "HeadlineTextWithBulletsAndStats"),
    createTemplateEntry(IndexedThreeColumnList, IndexedThreeColumnListSchema, IndexedThreeColumnListId, IndexedThreeColumnListName, IndexedThreeColumnListDesc, GROUP_ID, "IndexedThreeColumnList"),
    createTemplateEntry(LayoutTextBlockWithMetricCards, LayoutTextBlockWithMetricCardsSchema, LayoutTextBlockWithMetricCardsId, LayoutTextBlockWithMetricCardsName, LayoutTextBlockWithMetricCardsDesc, GROUP_ID, "LayoutTextBlockWithMetricCards"),
    createTemplateEntry(LeftAlignQuote, LeftAlignQuoteSchema, LeftAlignQuoteId, LeftAlignQuoteName, LeftAlignQuoteDesc, GROUP_ID, "LeftAlignQuote"),
    createTemplateEntry(MetricsWithImageSlideLayout, MetricsWithImageSchema, MetricsWithImageId, MetricsWithImageName, MetricsWithImageDesc, GROUP_ID, "MetricsWithImageSlideLayout"),
    createTemplateEntry(MultiChartGridSlideLayout, MultiChartGridSchema, MultiChartGridId, MultiChartGridName, MultiChartGridDesc, GROUP_ID, "MultiChartGridSlideLayout"),
    createTemplateEntry(NumberedBulletsSlideLayout, NumberedBulletsSchema, NumberedBulletsId, NumberedBulletsName, NumberedBulletsDesc, GROUP_ID, "NumberedBulletsSlideLayout"),
    createTemplateEntry(QuoteSlideLayout, QuoteSchema, QuoteId, QuoteName, QuoteDesc, GROUP_ID, "QuoteSlideLayout"),
    createTemplateEntry(TableOfContentWithoutPageNumber, TableOfContentWithoutPageNumberSchema, TableOfContentWithoutPageNumberId, TableOfContentWithoutPageNumberName, TableOfContentWithoutPageNumberDesc, GROUP_ID, "TableOfContentWithoutPageNumber"),
    createTemplateEntry(TeamSlideLayout, TeamSchema, TeamId, TeamName, TeamDesc, GROUP_ID, "TeamSlideLayout"),
    createTemplateEntry(TextSplitWithEmphasisBlock, TextSplitWithEmphasisBlockSchema, TextSplitWithEmphasisBlockId, TextSplitWithEmphasisBlockName, TextSplitWithEmphasisBlockDesc, GROUP_ID, "TextSplitWithEmphasisBlock"),
    createTemplateEntry(ThankYouContactInfoFooterImageSlide, ThankYouContactInfoFooterImageSchema, ThankYouContactInfoFooterImageId, ThankYouContactInfoFooterImageName, ThankYouContactInfoFooterImageDesc, GROUP_ID, "ThankYouContactInfoFooterImageSlide"),
    createTemplateEntry(Timeline, TimelineSchema, TimelineId, TimelineName, TimelineDesc, GROUP_ID, "Timeline"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithBullets, TitleDescriptionMultiChartGridWithBulletsSchema, TitleDescriptionMultiChartGridWithBulletsId, TitleDescriptionMultiChartGridWithBulletsName, TitleDescriptionMultiChartGridWithBulletsDesc, GROUP_ID, "TitleDescriptionMultiChartGridWithBullets"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithMetrics, TitleDescriptionMultiChartGridWithMetricsSchema, TitleDescriptionMultiChartGridWithMetricsId, TitleDescriptionMultiChartGridWithMetricsName, TitleDescriptionMultiChartGridWithMetricsDesc, GROUP_ID, "TitleDescriptionMultiChartGridWithMetrics"),
    createTemplateEntry(TitleDescriptionWithTable, TitleDescriptionWithTableSchema, TitleDescriptionWithTableId, TitleDescriptionWithTableName, TitleDescriptionWithTableDesc, GROUP_ID, "TitleDescriptionWithTable"),
    createTemplateEntry(TitleMetricsWithChart, TitleMetricsWithChartSchema, TitleMetricsWithChartId, TitleMetricsWithChartName, TitleMetricsWithChartDesc, GROUP_ID, "TitleMetricsWithChart"),
    createTemplateEntry(TitleMetricValueMetricLabelFunnelStages, TitleMetricValueMetricLabelFunnelStagesSchema, TitleMetricValueMetricLabelFunnelStagesId, TitleMetricValueMetricLabelFunnelStagesName, TitleMetricValueMetricLabelFunnelStagesDesc, GROUP_ID, "TitleMetricValueMetricLabelFunnelStages"),
    createTemplateEntry(TitleThreeColumnRiskConstraints, TitleThreeColumnRiskConstraintsSchema, TitleThreeColumnRiskConstraintsId, TitleThreeColumnRiskConstraintsName, TitleThreeColumnRiskConstraintsDesc, GROUP_ID, "TitleThreeColumnRiskConstraints"),
    createTemplateEntry(TitleTopDescriptionFourTeamMembersGrid, TitleTopDescriptionFourTeamMembersGridSchema, TitleTopDescriptionFourTeamMembersGridId, TitleTopDescriptionFourTeamMembersGridName, TitleTopDescriptionFourTeamMembersGridDesc, GROUP_ID, "TitleTopDescriptionFourTeamMembersGrid"),
    createTemplateEntry(TitleWithFullWidthChart, TitleWithFullWidthChartSchema, TitleWithFullWidthChartId, TitleWithFullWidthChartName, TitleWithFullWidthChartDesc, GROUP_ID, "TitleWithFullWidthChart"),
    createTemplateEntry(TitleWithGridBasedHeadingAndDescription, TitleWithGridBasedHeadingAndDescriptionSchema, TitleWithGridBasedHeadingAndDescriptionId, TitleWithGridBasedHeadingAndDescriptionName, TitleWithGridBasedHeadingAndDescriptionDesc, GROUP_ID, "TitleWithGridBasedHeadingAndDescription"),
];
