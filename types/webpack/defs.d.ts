interface __BuildInfo{
    buildID: number;
    buildName: string;
    dev: boolean;
}

interface __Definitions {
    buildInfo: __BuildInfo;
}

declare const __DEF: __Definitions;