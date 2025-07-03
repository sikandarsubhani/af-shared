import {
  BASE_CURRENCY,
  CALCULATOR_PLAN_TYPES,
  ERROR_TYPE,
  IP_GEOLOCATION_OPTIONS,
  LOGIN_METHOD,
  PLAN_DURATION,
  PRICING_ENDPOINT_ID,
  SUBSCRIPTION_STATUS,
  USER_ROLE,
} from '@/utils/constants';
import { ReactNode } from 'react';

export type FormFeedback = {
  type: 'error' | 'success';
  message: Array<string>;
};

export type ValidationErrorResponseBody = {
  error: {
    type: ERROR_TYPE.ValidationError;
    data: Array<{ message: string; fieldKey: string }>;
  };
};

export type MembersCreditsUsageList = Array<OrganizationUsageRecord>;

export type ApiCategory = string;

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

// ************************* Types for swr api response date *******************************

export type ClientInfo = {
  userName: string;
  email: string;
  status: 'active' | 'inactive';
  createDate: string;
  updateDate: string;
  role: USER_ROLE;
  apiKey: string;
  apiKeyIssuedDate: string;
  signedUpBy: LOGIN_METHOD;
  organizationId: number | null;
  isSubscribedToNewsletter?: boolean;
  clientId: number;
  oneOffCreditsId?: number;
  oneOffCreditsPlanName?: string;
};
export type ClientWithExtraInfo = {
  clientId: number;
  userName: string;
  email: string;
  status: 'active' | 'inactive' | 'deleted';
  createDate: string;
  updateDate: string;
  role: USER_ROLE;
  signedUpBy: LOGIN_METHOD;
  apiKey: string;
  apiKeyIssuedDate: string;
  oneOffCreditsId?: number;
  oneOffCreditsPlanName?: string;
  subscriptionCreditsId?: number;
  subscriptionCreditsPlanName?: string;
  organizationSubscriptionId?: number;
  organizationSubscriptionPlanName?: string;
  organizationId?: number;
  organizationName?: string;
};

export type AllAccounts = {
  accountId: number;
  accountName: string;
  accountRole: USER_ROLE;
  currentlyLoggedIn?: true;
}[];

export type Plan = {
  id: number;
  name: string;
  type: string;
  duration: null | string;
  price: number;
  allowedCredits: number;
  isSurchargeAllowed: boolean | null;
  surchargeAllowedCredits: number | null;
  surchargeRate: string | null;
  isDisplayed: boolean;
  paddleId: string;
  requestThrottleLimit: number;
};

export type OragnizationPlan = {
  id: number;
  name: string;
  type: string;
  duration: number | null;
  price: number;
  allowedMembers: number;
  isDisplayed: boolean;
  paddleId: string;
};

export type OragnizationPlans = {
  monthlySubPlans: Array<OragnizationPlan>;
  yearlySubPlans: Array<OragnizationPlan>;
  organizationCreationFees: Array<OragnizationPlan>;
};

export type Plans = {
  creditPlans: Array<Plan>;
  monthlySubPlans: Array<Plan>;
  yearlySubPlans: Array<Plan>;
};
export enum PlanCategoryType {
  creditPlans = 'creditPlans',
  monthlySubPlans = 'monthlySubPlans',
  yearlySubPlans = 'yearlySubPlans',
}

export type OrganizationPlan = {
  id: number;
  name: string;
  type: 'subs' | 'one_off';
  duration: 'monthly' | 'yearly' | null;
  price: number;
  allowedMembers: number | null;
  isDisplayed: boolean;
  paddleId: string;
};

export type OrganizationPlans = {
  yearlySubPlans: any[];
  monthlySubPlans: OrganizationPlan[];
  organizationCreationFees: OrganizationPlan[];
};

export type ContactDetails = {
  city: string;
  country: string;
  phone: string;
  zipCode: string;
};

export type UsageHistory = Array<{
  date: string;
  planName: string;
  usedCredits: number;
  userEmail: string;
}>;

export type OneOffCreditsInfo = {
  activationUpdateDate: string;
  allowedCredits: number;
  assigned: null | number;
  assignedUpdateDate: string;
  isActive: boolean;
  planName: string;
  planUpdateDate: string;
  usedCredits: number;
};

export type Organizations = Array<{
  id: number;
  name?: string;
  isContactEmail: boolean;
  website?: string;
  email?: string;
  type?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  phone?: string;
  createdAt: string;
}>;

export type OrganizationDetails = {
  name?: string;
  isContactEmail: boolean;
  website?: string;
  email?: string;
  type?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  phone?: string;
  createdAt: string;
  admin: string;
  adminName: string;
  status?: 'active' | 'inactive' | 'deleted';
};

export type OrganizationMembers = {
  email: string;
  role: USER_ROLE;
}[];

type OrganizationInvitee = {
  email: string;
  inviteDateTime: string;
  role: USER_ROLE | undefined;
};

export type OrganizationInvitees = Array<OrganizationInvitee>;

export type OrganizationApiRestrictions = Array<string>;

export type OrganizationIpWhitelist = {
  [key: string]: string[];
};

export type OrganizationIpItemWhitelist = {
  [key: string]: string[];
};

export type SubscriptionInfo = {
  isActive: boolean;
  activationUpdateDate: string;
  assigned: null;
  assignedUpdateDate: string | null;
  planId: number;
  paddleId: string;
  planPrice: number;
  planName: string;
  planDuration: PLAN_DURATION;
  allowedCredits: number;
  surchargeAllowedCredits: number;
  isSurchargeAllowed: boolean;
  planUpdateDate: string;
  subsStartDate: string;
  subsEndDate: string;
  status: SUBSCRIPTION_STATUS;
  statusUpdateDate: string;
  isOverDue: boolean;
  usedCredits: number;
  usedSurchargeCredits: number;
  subsSurchargeStatus: string;
  subsSurchargeStatusUpdateDate: string;
};

export type OrganizationSubscriptionInfo = {
  isActive: boolean;
  activationUpdateDate: string;
  planId: number;
  paddleId: number;
  planPrice: number;
  planName: string;
  planDuration: PLAN_DURATION;
  planUpdateDate: string;
  subsStartDate: string;
  subsEndDate: string;
  status: SUBSCRIPTION_STATUS;
  statusUpdateDate: string;
  isOverDue: boolean;
};

export type Discount = {
  id: string;
  amount: string;
  description?: string;
  type: 'percentage' | 'flat';
  enabled_for_checkout: boolean;
  code?: string;
  currency_code?: string;
  recur: boolean;
  maximum_recurring_intervals?: number;
  usage_limit?: number;
  expires_at?: string;
  restrict_to?: Array<string>;
  status: 'active' | 'inactive';
  time_used: number;
  created_at: string;
  updated_at: string;
};

export type TransactionId = {
  transactionId: string;
};

export type ApiEndpoint = {
  path: string;
  name: string;
  category: string;
};

export type ApiEndpoints = Record<ApiCategory, Array<ApiEndpoint>>;

export type UserInvoice = {
  transactionId: string;
  generatedDate: string;
  planName: string;
  planType: string;
  planDuration: string | null;
};

export type UserInvoices = Array<UserInvoice>;

export type OrganizationUsageRecord = {
  date: string;
  usedCredits: number;
  userEmail: string;
  planName: string | null;
};

export type OrganizationUsageHistory = {
  [email: string]: OrganizationUsageRecord[];
};

export type ApiEndpointsCreditsConsumption = {
  [key: string]: {
    name: string;
    creditsConsumption: number[];
  };
};

export type PublicPlan = Omit<Plan, 'paddleId'>;

export type PublicPlans = {
  creditPlans: Array<PublicPlan>;
  monthlySubPlans: Array<PublicPlan>;
  yearlySubPlans: Array<PublicPlan>;
};

// ************************* Types for swr api response date *******************************

export type PriceEstimationFormType = {
  selectedPlanType: CALCULATOR_PLAN_TYPES;
  selectedEndpoint: null | string;
  selectedPlan: null | string;
  selectedPlanAllowedCredits: null | number;
  selectedIntervalIndex: number;
  selectIsIpGeoLocationOption: boolean;
  selectedBaseCurrency: BASE_CURRENCY;
  bulkTotalNumber: string;
  totalSuggestions: string;
  totalSSLLookups: string;
  selectedIpGeolocationOption: IP_GEOLOCATION_OPTIONS | null;
  symbolsPerRequest: string;
};

export type SuggestedPlanType = Plan & {
  selectedApis: { apiId: string }[];
};

export type PlanSuggestionFormType = {
  selectedPlanType: CALCULATOR_PLAN_TYPES;
  apiRows: CalculatorEndpoints;
};

export type CurrencyUpdateIntervalIndex = 0 | 1 | 2 | 3;

export type EndpointCalculationData = {
  apiEndpoint: PRICING_ENDPOINT_ID;
  currencyUpdateIntervalIndex?: CurrencyUpdateIntervalIndex;
  estimatedRequests: number;
  averageLookupsPerRequest?: number | null;
  baseCurrency?: BASE_CURRENCY;
  includeAdditionalIpInfo?: boolean;
  averageDomainSuggestionsPerRequest?: number | null;
  // averageLookupsPerRequest?: number | null;
  additionalIpInfo?: IP_GEOLOCATION_OPTIONS;
  symbolsPerRequest?: number | null;
};

export type CalculatorEndpoints = Array<{
  id: PRICING_ENDPOINT_ID;
  data: EndpointCalculationData;
}>;

export type SignupSuccessFeedback = {
  message: string;
  loggedIn: boolean;
};

export type postTaskOptions = {
  priority?: 'user-visible' | 'background' | 'user-blocking';
  signal?: AbortSignal;
  delay?: number;
};

export type ApiCreditData = {
  apiName: string;
};

export type APIDocumentationItem = {
  name: string;
  href: string;
  description?: string;
  logo?: (props: { width?: string; height?: string }) => React.ReactElement;
  isShowInDocs: boolean;
};

export type ProductCategory = {
  heading: string;
  subheadings: Array<APIDocumentationItem>;
};

export type ProductsCategoriesTestPages = {
  heading: string;
  subheadings: Array<{ name: string; href: string; method?: string }>;
};

export type IconSizeProps = {
  width?: string;
  height?: string;
};

export type OrgPlan = {
  name: string;
  price: number | null;
  features: Array<string>;
  duration: PLAN_DURATION;
  button: () => ReactNode;
};

export type JwtPayload = {
  sub: string;
  role: USER_ROLE;
  iat: number;
  exp: number;
  apiKey: string;
  organizationId?: string;
};
