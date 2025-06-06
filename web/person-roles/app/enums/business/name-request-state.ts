export enum NameRequestState {
  // API STATES
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  CONDITIONAL = 'CONDITIONAL', // NR state
  CONDITION = 'CONDITION', // NR name state
  CONSUMED = 'CONSUMED',
  DRAFT = 'DRAFT',
  EXPIRED = 'EXPIRED',
  HISTORICAL = 'HISTORICAL',
  HOLD = 'HOLD',
  INPROGRESS = 'INPROGRESS',
  PENDING_PAYMENT = 'PENDING_PAYMENT',
  REFUND_REQUESTED = 'REFUND_REQUESTED',
  REJECTED = 'REJECTED',
  NRO_UPDATING = 'NRO_UPDATING',

  // ADDITIONAL UI STATES FOR ERROR HANDLING
  NOT_APPROVED = 'NOT_APPROVED',
  NOT_FOUND = 'NOT_FOUND',
  NEED_CONSENT = 'NEED_CONSENT',
  INVALID = 'INVALID'
}
