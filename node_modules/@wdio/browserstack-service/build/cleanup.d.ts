export default class BStackCleanup {
    static startCleanup(): Promise<void>;
    static executeObservabilityCleanup(funnelData: any): Promise<void>;
    static updateO11yStopData(funnelData: any, status: string, error?: unknown): void;
    static sendFunnelData(funnelData: any): Promise<void>;
    static getFunnelDataFromFile(filePath: string): any;
    static removeFunnelDataFile(filePath?: string): void;
}
//# sourceMappingURL=cleanup.d.ts.map