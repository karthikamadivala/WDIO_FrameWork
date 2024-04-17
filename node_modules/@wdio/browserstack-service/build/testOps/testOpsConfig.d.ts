declare class TestOpsConfig {
    enabled: boolean;
    manuallySet: boolean;
    private static _instance;
    buildStopped: boolean;
    buildHashedId?: string;
    static getInstance(...args: any[]): TestOpsConfig;
    constructor(enabled?: boolean, manuallySet?: boolean);
}
export default TestOpsConfig;
//# sourceMappingURL=testOpsConfig.d.ts.map