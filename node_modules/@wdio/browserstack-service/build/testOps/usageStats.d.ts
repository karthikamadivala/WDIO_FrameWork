import FeatureStats from './featureStats.js';
import FeatureUsage from './featureUsage.js';
import type { TOUsageStats } from '../types.js';
declare class UsageStats {
    static instance: UsageStats;
    testStartedStats: FeatureStats;
    testFinishedStats: FeatureStats;
    hookStartedStats: FeatureStats;
    hookFinishedStats: FeatureStats;
    cbtSessionStats: FeatureStats;
    logStats: FeatureStats;
    launchBuildUsage: FeatureUsage;
    stopBuildUsage: FeatureUsage;
    static getInstance(): UsageStats;
    constructor();
    add(usageStats: UsageStats): void;
    getFormattedData(workersData: any[]): TOUsageStats;
    addDataFromWorkers(workersData: any[]): void;
    getEventsData(): {
        buildEvents: {
            started: {
                isTriggered: boolean | undefined;
                status: string | undefined;
                error: string | undefined;
            };
            finished: {
                isTriggered: boolean | undefined;
                status: string | undefined;
                error: string | undefined;
            };
        };
        testEvents: {
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
            started: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
            finished: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
            started: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
            finished: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
        } | {
            started: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
            finished: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
            started: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
            finished: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
        };
        hookEvents: {
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
            started: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
            finished: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
            started: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
            finished: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
        } | {
            started: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
            finished: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
            started: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
            finished: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
        };
        logEvents: {
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
        } | {
            [x: string]: import("../types.js").FeatureStatsOverview;
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
        };
        cbtSessionEvents: {
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
        } | {
            [x: string]: import("../types.js").FeatureStatsOverview;
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
        };
    };
    getDataToSave(): {
        testEvents: {
            started: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
            finished: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
        };
        hookEvents: {
            started: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
            finished: {
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
                triggeredCount: number;
                sentCount: number;
                failedCount: number;
            } | {
                [x: string]: import("../types.js").FeatureStatsOverview;
            } | {
                groups: Record<string, import("../types.js").FeatureStatsOverview>;
            };
        };
        logEvents: {
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
        } | {
            [x: string]: import("../types.js").FeatureStatsOverview;
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
        };
        cbtSessionEvents: {
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
            triggeredCount: number;
            sentCount: number;
            failedCount: number;
        } | {
            [x: string]: import("../types.js").FeatureStatsOverview;
        } | {
            groups: Record<string, import("../types.js").FeatureStatsOverview>;
        };
    };
    static fromJSON(data: any): UsageStats;
}
export default UsageStats;
//# sourceMappingURL=usageStats.d.ts.map