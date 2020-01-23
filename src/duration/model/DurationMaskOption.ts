export interface DurationMaskOption {
    digitAmount: number;
    suffix: string;
}

type durationMaskOptionKeys = 'hour' | 'minute' | 'second';

export const durationMaskOptions: Record<durationMaskOptionKeys, DurationMaskOption> = {
'hour' : {digitAmount: 2, suffix: 'h'},
'minute' : {digitAmount: 2, suffix: 'm'},
'second' : {digitAmount: 2, suffix: 's'},
};
