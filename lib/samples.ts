// Doppel's own output for four things Claude Code might read, captured on 26 October 2026 by
// sending each through doppel-server (a scripted model on the other side). {braces} mark a value
// and its double. Every file came back exactly as typed.

export type Sample = { real: readonly string[]; double: readonly string[] };

export const SAMPLES = {
  ticket: {
    real: [
      "From: {Priya Sharma} <{priya.sharma@acme.com}>",
      "{Acme Corp}’s invoice sync fails for customer {ACME-204311} since Tuesday.",
      "Call me on {+1 415 555 0134} or ping {@priya}, login {psharma}.",
    ],
    double: [
      "From: {Jaya Ilic} <{jaya.ilic@driftmark.example}>",
      "{Driftmark Corp}’s invoice sync fails for customer {ACME-572309} since Tuesday.",
      "Call me on {+1 415 421 9945} or ping {@jaya}, login {jilic}.",
    ],
  },
  config: {
    real: [
      "AWS_ACCESS_KEY_ID={AKIAIOSFODNN7EXAMPLE}",
      "DATABASE_URL=postgres://billing:{Tr0ub4dor-3}@{db-prod-7.acme.internal}:5432/billing",
      "Replica {10.0.4.17} lags behind {10.0.4.18} after the failover.",
    ],
    double: [
      "AWS_ACCESS_KEY_ID={AKIAJFLVCCCR1TKQCENC}",
      "DATABASE_URL=postgres://billing:{Ti7yg4gey-3}@{db-prod-7.driftmark.internal}:5432/billing",
      "Replica {10.200.39.225} lags behind {10.200.39.226} after the failover.",
    ],
  },
  row: {
    real: [
      "{Rahul Verma}, {rahul.verma@acme.com}, card {4111 1111 1111 1111}",
      "IBAN {DE89 3704 0044 0532 0130 00}, customer {ACME-118402}",
    ],
    double: [
      "{Bram Tran}, {bram.tran@driftmark.example}, card {4834 9667 0504 5942}",
      "IBAN {DE03 2397 0683 6212 1160 40}, customer {ACME-183452}",
    ],
  },
  plan: {
    real: [
      "{Project Falcon} ships to {Acme Corp} in March; {Rahul Verma} signs off.",
      "{Priya Sharma} sends the launch notes to {rahul.verma@acme.com} today.",
    ],
    double: [
      "{Ashcombe} ships to {Driftmark Corp} in March; {Bram Tran} signs off.",
      "{Jaya Ilic} sends the launch notes to {bram.tran@driftmark.example} today.",
    ],
  },
} satisfies Record<string, Sample>;

export type SampleName = keyof typeof SAMPLES;

export const isSampleName = (name: string | undefined): name is SampleName => name !== undefined && name in SAMPLES;

/** How many values a sample marks: the status line's "N protected". */
export const valueCount = (sample: Sample): number => sample.real.join("").split("{").length - 1;
