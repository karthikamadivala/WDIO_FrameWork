import type { Options } from '@wdio/types';
declare class PercyBinary {
    #private;
    constructor();
    getBinaryPath(conf: Options.Testrunner): Promise<string>;
    validateBinary(binaryPath: string): Promise<unknown>;
    download(conf: any, destParentDir: any): Promise<string>;
}
export default PercyBinary;
//# sourceMappingURL=PercyBinary.d.ts.map