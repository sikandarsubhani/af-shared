import { HeadingLevel } from '../types/types';

export const HEADER_HEIGHT = 98;
export const PRIVATE_HEADER_HEIGHT = 71;

export const SUPPORT_EMAIL_ADDRESS = 'support@apifreaks.com';

export const MAX_FREE_ORGANIZATION_MEMBERS = 10;
export const PER_EXTRA_MEMBER_COST = 5;

export const RECAPTCHA_V3_KEY = '6LceqgIqAAAAAK9Rv8am6Au72v3OGz9anDBSnV_B';
export const RECAPTCHA_V2_KEY = '6LdGqgIqAAAAAOP28YdfeOnnbFwW2BLSdC0hrDNs';

export const FREE_CREDITS = 10000;

export const CREDITS_INTERVALS = [
  '24 hours',
  '1 hour',
  '10 minute',
  '1 minute',
];

export const SSL_LOOKUP_CHAINS = [3, 4];

export const enum TAG {
  Blog = 'blog',
  Tutorial = 'tutorial',
  Guide = 'guide',
}

export const enum PAGE {
  HomePage = 'home',
  GeoCurrencyConverter = 'geo-localized-currency-conversion',
  CurrencySymbolsTest = 'currency-symbols-test',
  CurrencySupportedTest = 'currency-supported-test',
  CurrencyHistoricalDataLimitTest = 'currency-historical-data-limit-test',
  LiveCommodityPrices = 'live-commodity-prices',
  HistoricalCommodityRates = 'historical-commodity-rates',
  CommodityFluctuationData = 'commodity-fluctuation',
  TimeSeriesCommodityData = 'commodity-time-series',
  Resources = 'resources',
  Blogs = 'blogs',
  Blog = 'blog',
  Tutorials = 'tutorials',
  Tutorial = 'tutorial',
  Guides = 'guides',
  Guide = 'guide',
  About = 'about',
  Terms = 'terms',
  ContactUs = 'contact-us',
  PrivacyPolicy = 'privacy-policy',
  Login = 'login',
  Signup = 'signup',
  SignupThanks = 'signup-thanks',
  GithubLogin = 'github-login',
  AccountVerification = 'account-verification',
  ForgotPassword = 'forgot-password',
  OrganizationMemberSetPassword = 'organization-member-set-password',
  OrganizationInvitationAccept = 'organization-invitation-accept',
  PaddlePayment = 'paddle-payment',
  Dashboard = 'dashboard',
  Profile = 'profile',
  BillingAndSubscription = 'billing-and-subscription',
  UsageDetails = 'usage',
  MemberUsageDetails = 'member-usage',
  EditAccount = 'edit-account',
  Organization = 'organization',
  EditOrganization = 'edit-organization',
  OrganizationApiRestrictions = 'organization-api-restrictions',
  EditContact = 'edit-contact',
  ResetPassword = 'reset-password',
  OrganizationSubscriptionSuccess = 'organization-subscription-success',
  APIPlansPricingOneOff = 'api-plans-one-off',
  APIPlansPricingMonthly = 'api-plans-monthly',
  APIPlansPricingYearly = 'api-plans-yearly',
  OrganizationPlans = 'organization-plans',
  Payments = 'payments',
  SubscriptionCreditsUsage = 'subscription-credits-usage',
  OrganizationSubscriptionCreditsUsage = 'organization-subscription-credits-usage',
  ActiveThrottleLimit = 'active-throttling-limit',
  PricingCalculator = 'pricing-calculator',
  PublicPricingCalculator = 'public-pricing-calculator',
  IPWhiteListing = 'ip-whitelisting',
  APIs = 'apis-page',

  // Documentation Pages
  APIFreaks = 'apifreaks',
  OrganizationAndTeams = 'organization-and-teams',
  CreditsUsageApi = 'credits-usage-api',
  WHOISDomainLookup = 'whois-domain-lookup',
  WHOISIPLookup = 'whois-ip-lookup',
  ASNLookup = 'asn-lookup',
  DomainWHOISHistoryLookup = 'domain-whois-history-lookup',
  ReverseWHOIS = 'reverse-whois',
  BulkWHOISLookup = 'bulk-whois-lookup',
  BulkUserAgentParser = 'bulk-user-agent-parser',
  DNSLookup = 'dns-lookup',
  DNSHistoryLookup = 'dns-history-lookup',
  ReverseDNSLookup = 'reverse-dns-lookup',
  BulkDNSLookup = 'bulk-dns-lookup',
  SSLCertificateLookup = 'ssl-certificate-lookup',
  DomainSearch = 'domain-search',
  BulkDomainChecker = 'bulk-domain-checker',
  ExchangeRate = 'currency-rate',
  CurrencyConverter = 'currency-converter',
  CurrencyTimeSeries = 'currency-time-series',
  CurrencyFluctuation = 'currency-fluctuation',
  IPLocator = 'ip-locator',
  BulkIPLookup = 'bulk-ip-lookup',
  TimeZoneLookup = 'timezone-lookup',
  TimeZoneConverter = 'timezone-converter',
  AstronomyData = 'astronomy-data',
  UserAgentParser = 'user-agent-parser',

  // Endpoint Test Pages
  CreditsUsageApiTest = 'credits-usage-api-test',
  WHOISDomainLookupTest = 'whois-domain-lookup-test',
  WHOISIPLookupTest = 'whois-ip-lookup-test',
  ASNLookupTest = 'asn-lookup-test',
  DomainWHOISHistoryLookupTest = 'domain-whois-history-lookup-test',
  ReverseWHOISTest = 'reverse-whois-test',
  BulkWHOISLookupTest = 'bulk-whois-lookup-test',
  BulkUserAgentParserTest = 'bulk-user-agent-parser-test',
  DNSLookupTest = 'dns-lookup-test',
  DNSHistoryLookupTest = 'dns-history-lookup-test',
  ReverseDNSLookupTest = 'reverse-dns-lookup-test',
  BulkDNSLookupTest = 'bulk-dns-lookup-test',
  SSLCertificateLookupTest = 'ssl-certificate-lookup-test',
  SSLCertificateChainLookupTest = 'ssl-certificate-chain-lookup-test',
  DomainSearchTest = 'domain-search-test',
  DomainSearchSuggestTest = 'domain-search-suggest-test',
  BulkDomainCheckerTest = 'bulk-domain-checker-test',
  ExchangeRateTest = 'currency-rate-test',
  HistoricalExchangeRateTest = 'historical-currency-rate-test',
  CurrencyConverterTest = 'currency-converter-test',
  HistoricalCurrencyConverterTest = 'historical-currency-converter-test',
  GeoCurrencyConverterTest = 'geolocalized-currency-converter-test',
  CurrencyTimeSeriesTest = 'currency-time-series-test',
  CurrencyFluctuationTest = 'currency-fluctuation-test',
  IPLocatorTest = 'ip-locator-test',
  BulkIPLookupTest = 'bulk-ip-lookup-test',
  TimeZoneLookupTest = 'timezone-lookup-test',
  TimeZoneConverterTest = 'timezone-converter-test',
  AstronomyDataTest = 'astronomy-data-test',
  UserAgentParserTest = 'user-agent-parser-test',
  LiveCommodityPricesTest = 'live-commodity-prices-test',
  HistoricalCommodityRatesTest = 'historical-commodity-prices-test',
  CommodityFluctuationDataTest = 'commodity-fluctuation-test',
  TimeSeriesCommodityDataTest = 'commodity-time-series-test',
  CommoditySymbolsTest = 'commodity-symbols-test',
  WebsiteScreenshot = 'website-screenshot-api',
  WebsiteScreenshotTest = 'website-screenshot-test',
  BulkScreenshotApi = 'bulk-screenshot-api',
  BulkScreenshotApiTest = 'bulk-screenshot-test',
  AdminLevelsTest = 'admin-level-test',
  AdminUnitsTest = 'admin-unit-test',
  AdminUnitsDetailsTest = 'admin-unit-details-test',
  CitiesTest = 'cities-test',
  CountriesTest = 'countries-test',
  CountryDetailsTest = 'country-details-test',
  SubregionsTest = 'subregions-test',
  RegionsTest = 'regions-test',

  ZipCodeLookupTest = 'zipcode-lookup-test',
  SearchRadiusTest = 'search-radius-test',
  SearchCityTest = 'search-city-test',
  SearchRegionTest = 'search-region-test',
  DistanceTest = 'distance test',
  DistanceMatchTest = 'distance-match-test',

  AdminDashboardClients = 'admin-dashboard-clients',
  AdminDashboardClientDetails = 'admin-dashboard-client-details',
  AdminDashboardPlans = 'admin-dashboard-plans',
  AdminDashboardDiscounts = 'admin-discounts',
  AdminDashboardOrganizationPlans = 'admin-dashboard-organization-plans',
  AddNewPlans = 'add-new-plan',
  AddNewOrganizationPlans = 'add-new-organization-plan',
  ClientUsageHistory = 'client-usage-history',
  AdminAddOrganization = 'admin-add-organization',
  AdminAllOrganizations = 'admin-all-organizations',
  AdminViewOrganization = 'admin-view-organization',
  AdminOrganizationApiRestrictions = 'admin-organization-api-restrictions',
  AdminOrganizationUsageHistory = 'admin-organization-usage-history',

  //swagger
  Swagger = 'swagger',
  // Tools
  Tools = 'tools',
}

export const PAGE_URLS: Readonly<
  Partial<
    Record<PAGE, string | ((data: Record<string, string | number>) => string)>
  >
> = {
  [PAGE.HomePage]: '/',
  [PAGE.About]: '/about',
  [PAGE.Resources]: '/resources',
  [PAGE.Tools]: '/tools',
  [PAGE.Blogs]: '/resources/blogs',
  [PAGE.Blog]: ({ slug }) => `/resources/blogs/${slug}`,
  [PAGE.Tutorials]: '/resources/tutorials',
  [PAGE.Tutorial]: ({ slug }) => `/resources/tutorials/${slug}`,
  [PAGE.Guides]: '/resources/guides',
  [PAGE.Guide]: ({ slug }) => `/resources/guides/${slug}`,
  [PAGE.Terms]: '/terms',
  [PAGE.ContactUs]: '/contact',
  [PAGE.PrivacyPolicy]: '/privacy-policy',
  [PAGE.Login]: '/login',
  [PAGE.Signup]: '/signup',
  [PAGE.SignupThanks]: `/signup-success`,
  [PAGE.GithubLogin]: '/github-login',

  [PAGE.AccountVerification]: '/email-verification',
  [PAGE.ForgotPassword]: '/forgot-password',
  [PAGE.APIPlansPricingOneOff]: '/pricing/api-plans/one-off',
  [PAGE.APIPlansPricingMonthly]: '/pricing/api-plans/monthly',
  [PAGE.APIPlansPricingYearly]: '/pricing/api-plans/yearly',
  [PAGE.OrganizationPlans]: '/pricing/org-teams-plans',
  [PAGE.OrganizationMemberSetPassword]: '/set-password',
  [PAGE.OrganizationInvitationAccept]: ({ token }) =>
    `/organization-invitation-accept/${token}`,
  [PAGE.PaddlePayment]: '/paddle/payment',
  [PAGE.Dashboard]: '/dashboard',
  [PAGE.Profile]: '/profile',
  [PAGE.BillingAndSubscription]: '/billing-and-subscription',
  [PAGE.UsageDetails]: '/usage',
  [PAGE.MemberUsageDetails]: '/organization/member/usage-history',
  [PAGE.EditAccount]: '/profile/edit-account',
  [PAGE.EditContact]: '/profile/edit-contact',
  [PAGE.OrganizationSubscriptionSuccess]: ({ id }) =>
    `/organization-subscription-success/${id}`,
  [PAGE.ResetPassword]: '/reset-password',
  [PAGE.Organization]: '/organization',
  [PAGE.EditOrganization]: '/organization/edit',
  [PAGE.OrganizationApiRestrictions]: '/organization/api-restrictions',
  [PAGE.IPWhiteListing]: '/organization/ip-whitelisting',
  [PAGE.Payments]: '/payments',
  [PAGE.SubscriptionCreditsUsage]: '/usage/subscription-credits',
  [PAGE.OrganizationSubscriptionCreditsUsage]:
    '/organization/subscription-credits-usage',
  [PAGE.ActiveThrottleLimit]: '/active-throttling-limit',
  [PAGE.PricingCalculator]: '/pricing-calculator',
  [PAGE.PublicPricingCalculator]: '/pricing/calculator',
  [PAGE.APIs]: '/api',
  // Documentation Page Urls
  [PAGE.APIFreaks]: '/docs',
  [PAGE.OrganizationAndTeams]: '/docs/organization',
  [PAGE.CreditsUsageApi]: '/api/usage-credits',
  [PAGE.WHOISDomainLookup]: '/api/whois-domain-lookup',
  [PAGE.WHOISIPLookup]: '/api/whois-ip-lookup',
  [PAGE.ASNLookup]: '/api/asn-lookup',
  [PAGE.DomainWHOISHistoryLookup]: '/api/domain-whois-history-lookup',
  [PAGE.ReverseWHOIS]: '/api/reverse-whois',
  [PAGE.BulkWHOISLookup]: '/api/bulk-whois-lookup',
  [PAGE.DNSLookup]: '/api/dns-lookup',
  [PAGE.DNSHistoryLookup]: '/api/dns-history-lookup',
  [PAGE.ReverseDNSLookup]: '/api/reverse-dns-lookup',
  [PAGE.BulkDNSLookup]: '/api/bulk-dns-lookup',
  [PAGE.SSLCertificateLookup]: '/api/ssl-certificate-lookup',
  [PAGE.DomainSearch]: '/api/domain-search',
  [PAGE.BulkDomainChecker]: '/api/bulk-domain-checker',
  [PAGE.ExchangeRate]: '/api/currency-rate',
  [PAGE.CurrencyConverter]: '/api/currency-converter',
  [PAGE.GeoCurrencyConverter]: '/api/geolocalized-currency-conversion',
  [PAGE.CurrencyTimeSeries]: '/api/currency-time-series',
  [PAGE.CurrencyFluctuation]: '/api/currency-fluctuation',
  [PAGE.CurrencySymbolsTest]: '/api/currency-symbols/test',
  [PAGE.CurrencySupportedTest]: '/api/currency-supported/test',
  [PAGE.CurrencyHistoricalDataLimitTest]:
    '/api/currency-historical-data-limit/test',
  [PAGE.IPLocator]: '/api/ip-locator',
  [PAGE.BulkIPLookup]: '/api/bulk-ip-lookup',
  [PAGE.TimeZoneLookup]: '/api/timezone-lookup',
  [PAGE.TimeZoneConverter]: '/api/timezone-converter',
  [PAGE.AstronomyData]: '/api/astronomy-data',
  [PAGE.UserAgentParser]: '/api/user-agent-parser',
  [PAGE.BulkUserAgentParser]: '/api/bulk-user-agent-parser',
  [PAGE.LiveCommodityPrices]: '/api/commodity-prices',
  [PAGE.HistoricalCommodityRates]: '/api/historical-commodity-prices',
  [PAGE.CommodityFluctuationData]: '/api/commodity-fluctuation',
  [PAGE.TimeSeriesCommodityData]: '/api/commodity-time-series',
  [PAGE.WebsiteScreenshot]: '/api/website-screenshot',
  [PAGE.WebsiteScreenshotTest]: '/api/website-screenshot/test',
  [PAGE.BulkScreenshotApi]: '/api/bulk-screenshot',
  [PAGE.BulkScreenshotApiTest]: '/api/bulk-screenshot/test',
  [PAGE.LiveCommodityPricesTest]: '/api/commodity-prices/test',
  [PAGE.HistoricalCommodityRatesTest]: '/api/historical-commodity-prices/test',
  [PAGE.CommodityFluctuationDataTest]: '/api/commodity-fluctuation/test',
  [PAGE.TimeSeriesCommodityDataTest]: '/api/commodity-time-series/test',
  [PAGE.CommoditySymbolsTest]: '/api/commodity-symbols/test',
  [PAGE.AdminDashboardClients]: '/dashboard/clients',
  [PAGE.AdminDashboardClientDetails]: '/dashboard/client-details',
  [PAGE.AdminDashboardPlans]: '/dashboard/plans',
  [PAGE.AdminDashboardDiscounts]: '/dashboard/discounts',
  [PAGE.AdminDashboardOrganizationPlans]: '/dashboard/organization-plans',
  [PAGE.AddNewPlans]: '/dashboard/add-plan',
  [PAGE.AddNewOrganizationPlans]: '/dashboard/add-organization-plan',
  [PAGE.ClientUsageHistory]: '/dashboard/client-usage',
  [PAGE.AdminAddOrganization]: '/dashboard/add-organization',
  [PAGE.AdminAllOrganizations]: '/dashboard/organizations',
  [PAGE.AdminViewOrganization]: ({ organizationId }) =>
    `/dashboard/organizations/${organizationId}`,
  [PAGE.AdminOrganizationApiRestrictions]: ({ organizationId }) =>
    `/dashboard/organizations/${organizationId}/api-restrictions`,
  [PAGE.AdminOrganizationUsageHistory]: ({ organizationId }) =>
    `/dashboard/organizations/${organizationId}/usage-history`,

  //swagger
  [PAGE.Swagger]: '/api/swagger',
};

export const BreadCrumbNames: Readonly<Partial<Record<PAGE, string>>> = {
  // Resources Pages
  [PAGE.Resources]: 'Resources',
  [PAGE.Blogs]: 'Blogs',
  [PAGE.Guides]: 'Guides',
  [PAGE.Tutorials]: 'Tutorials',
  [PAGE.Blog]: 'Blog',
  [PAGE.Guide]: 'Guide',
  [PAGE.Tutorial]: 'Tutorial',
  // Docs Pages
  [PAGE.APIFreaks]: 'Docs',
  [PAGE.APIs]: 'APIs',
  [PAGE.OrganizationAndTeams]: 'Organization & Teams',
  [PAGE.CreditsUsageApi]: 'Credits Usage API',
  [PAGE.WHOISDomainLookup]: 'WHOIS Domain Lookup',
  [PAGE.WHOISIPLookup]: 'WHOIS IP Lookup',
  [PAGE.ASNLookup]: 'ASN Lookup',
  [PAGE.DomainWHOISHistoryLookup]: 'Domain WHOIS History Lookup',
  [PAGE.ReverseWHOIS]: 'Reverse WHOIS Lookup',
  [PAGE.BulkWHOISLookup]: 'Bulk WHOIS Lookup',
  [PAGE.DNSLookup]: 'DNS Lookup',
  [PAGE.DNSHistoryLookup]: 'DNS History Lookup',
  [PAGE.ReverseDNSLookup]: 'Reverse DNS Lookup',
  [PAGE.BulkDNSLookup]: 'Bulk DNS Lookup',
  [PAGE.SSLCertificateLookup]: 'SSL Certificate Lookup',
  [PAGE.DomainSearch]: 'Domain Search API',
  [PAGE.BulkDomainChecker]: 'Bulk Domain Checker',
  [PAGE.ExchangeRate]: 'Exchange Rate API',
  [PAGE.CurrencyConverter]: 'Currency Converter API',
  [PAGE.GeoCurrencyConverter]: 'Geolocalized Currency Converter',
  [PAGE.CurrencyTimeSeries]: 'Currency Time Series API',
  [PAGE.CurrencyFluctuation]: 'Currency Fluctuation API',
  [PAGE.IPLocator]: 'IP Locator',
  [PAGE.BulkIPLookup]: 'Bulk IP Lookup',
  [PAGE.TimeZoneLookup]: 'Time Zone Lookup',
  [PAGE.TimeZoneConverter]: 'Time Zone Converter',
  [PAGE.AstronomyData]: 'Astronomy Data API',
  [PAGE.UserAgentParser]: 'User Agent Parser',
  [PAGE.BulkUserAgentParser]: 'Bulk User Agent Parser',
  // Docs Testing Pages
  [PAGE.CreditsUsageApiTest]: 'Credits Usage API Playground',
  [PAGE.WHOISDomainLookupTest]: 'WHOIS Domain Lookup Playground',
  [PAGE.WHOISIPLookupTest]: 'WHOIS IP Lookup Playground',
  [PAGE.ASNLookupTest]: 'ASN Lookup Playground',
  [PAGE.DomainWHOISHistoryLookupTest]: 'Domain WHOIS History Lookup Playground',
  [PAGE.ReverseWHOISTest]: 'Reverse WHOIS Lookup Playground',
  [PAGE.BulkWHOISLookupTest]: 'Bulk WHOIS Lookup Playground',
  [PAGE.DNSLookupTest]: 'DNS Lookup Playground',
  [PAGE.DNSHistoryLookupTest]: 'DNS History Lookup Playground',
  [PAGE.ReverseDNSLookupTest]: 'Reverse DNS Lookup Playground',
  [PAGE.BulkDNSLookupTest]: 'Bulk DNS Lookup Playground',
  [PAGE.SSLCertificateLookupTest]: 'SSL Certificate Lookup Playground',
  [PAGE.SSLCertificateChainLookupTest]:
    'SSL Certificate Chain Lookup Playground',
  [PAGE.DomainSearchTest]: 'Domain Search API Playground',
  [PAGE.DomainSearchSuggestTest]: 'Domain Search Suggest API Playground',
  [PAGE.BulkDomainCheckerTest]: 'Bulk Domain Checker Playground',
  [PAGE.ExchangeRateTest]: 'Exchange Rate API Playground',
  [PAGE.HistoricalExchangeRateTest]: 'Historical Exchange Rate API Playground',
  [PAGE.CurrencyConverterTest]: 'Currency Converter API Playground',
  [PAGE.HistoricalCurrencyConverterTest]:
    'Historical Currency Converter Playground',
  [PAGE.GeoCurrencyConverterTest]: 'Geolocalized Currency Converter Playground',
  [PAGE.CurrencyTimeSeriesTest]: 'Currency Time Series API Playground',
  [PAGE.CurrencyFluctuationTest]: 'Currency Fluctuation API Playground',
  [PAGE.IPLocatorTest]: 'IP Locator Playground',
  [PAGE.BulkIPLookupTest]: 'Bulk IP Lookup Playground',
  [PAGE.TimeZoneLookupTest]: 'Time Zone Lookup Playground',
  [PAGE.TimeZoneConverterTest]: 'Time Zone Converter Playground',
  [PAGE.AstronomyDataTest]: 'Astronomy Data API Playground',
  [PAGE.UserAgentParserTest]: 'User Agent Parser Playground',
  [PAGE.BulkUserAgentParserTest]: 'Bulk User Agent Parser Playground',
  [PAGE.LiveCommodityPrices]: 'Live Commodity Prices',
  [PAGE.HistoricalCommodityRates]: 'Historical Commodity Rates',
  [PAGE.CommodityFluctuationData]: 'Commodity Fluctuation Data',
  [PAGE.TimeSeriesCommodityData]: 'Time Series Commodity Data',
  [PAGE.WebsiteScreenshot]: 'Website Screenshot API',
  [PAGE.WebsiteScreenshotTest]: 'Website Screenshot API Playground',
  [PAGE.BulkScreenshotApi]: 'Bulk Screenshot API',
  [PAGE.BulkScreenshotApiTest]: 'Bulk Screenshot API Playground',
  [PAGE.LiveCommodityPricesTest]: 'Latest Commodity Rates Playground',
  [PAGE.HistoricalCommodityRatesTest]: 'Historical Commodity Rates Playground',
  [PAGE.CommodityFluctuationDataTest]: 'Commodity Fluctuation Data Playground',
  [PAGE.TimeSeriesCommodityDataTest]: 'Time Series Commodity Data Playground',

  [PAGE.AdminLevelsTest]: 'Admin Levels Test',
  [PAGE.AdminUnitsTest]: 'Admin Units Test',
  [PAGE.AdminUnitsDetailsTest]: 'Admin Units Details Test',
  [PAGE.CitiesTest]: 'Cities Test',
  [PAGE.CountriesTest]: 'Countries Test',
  [PAGE.CountryDetailsTest]: 'Country Test',
  [PAGE.SubregionsTest]: 'Subregions Test',
  [PAGE.RegionsTest]: 'Regions Test',

  [PAGE.ZipCodeLookupTest]: 'Zip Code Lookup Test',
  [PAGE.SearchRadiusTest]: 'Search Radius Test',
  [PAGE.SearchCityTest]: 'Search City Test',
  [PAGE.SearchRegionTest]: 'Search Region Test',
  [PAGE.DistanceTest]: 'Distance Test',
  [PAGE.DistanceMatchTest]: 'Distance Match Test',
};

export const ENDPOINT_TESTING_PAGE_URLS: Readonly<
  Partial<Record<PAGE, string>>
> = {
  [PAGE.CreditsUsageApiTest]: getEndpointUrlForApiPage(PAGE.CreditsUsageApi),
  [PAGE.WHOISDomainLookupTest]: getEndpointUrlForApiPage(
    PAGE.WHOISDomainLookup
  ),
  [PAGE.WHOISIPLookupTest]: getEndpointUrlForApiPage(PAGE.WHOISIPLookup),
  [PAGE.ASNLookupTest]: getEndpointUrlForApiPage(PAGE.ASNLookup),
  [PAGE.DomainWHOISHistoryLookupTest]: getEndpointUrlForApiPage(
    PAGE.DomainWHOISHistoryLookup
  ),
  [PAGE.ReverseWHOISTest]: getEndpointUrlForApiPage(PAGE.ReverseWHOIS),
  [PAGE.GeoCurrencyConverterTest]: getEndpointUrlForApiPage(
    PAGE.GeoCurrencyConverter
  ),
  [PAGE.BulkWHOISLookupTest]: getEndpointUrlForApiPage(PAGE.BulkWHOISLookup),
  [PAGE.DNSLookupTest]: getEndpointUrlForApiPage(PAGE.DNSLookup),
  [PAGE.DNSHistoryLookupTest]: getEndpointUrlForApiPage(PAGE.DNSHistoryLookup),
  [PAGE.ReverseDNSLookupTest]: getEndpointUrlForApiPage(PAGE.ReverseDNSLookup),
  [PAGE.BulkDNSLookupTest]: getEndpointUrlForApiPage(PAGE.BulkDNSLookup),
  [PAGE.SSLCertificateLookupTest]: getEndpointUrlForApiPage(
    PAGE.SSLCertificateLookup
  ),
  [PAGE.SSLCertificateChainLookupTest]:
    '/api/ssl-certificate-chain-lookup/test',
  [PAGE.DomainSearchTest]: getEndpointUrlForApiPage(PAGE.DomainSearch),
  [PAGE.DomainSearchSuggestTest]: '/api/domain-search-with-suggestions/test',
  [PAGE.BulkDomainCheckerTest]: getEndpointUrlForApiPage(
    PAGE.BulkDomainChecker
  ),
  [PAGE.ExchangeRateTest]: getEndpointUrlForApiPage(PAGE.ExchangeRate),
  [PAGE.HistoricalExchangeRateTest]: '/api/historical-currency-rate/test',
  [PAGE.CurrencyConverterTest]: getEndpointUrlForApiPage(
    PAGE.CurrencyConverter
  ),
  [PAGE.HistoricalCurrencyConverterTest]:
    '/api/historical-currency-converter/test',
  [PAGE.CurrencyTimeSeriesTest]: getEndpointUrlForApiPage(
    PAGE.CurrencyTimeSeries
  ),
  [PAGE.CurrencyFluctuationTest]: getEndpointUrlForApiPage(
    PAGE.CurrencyFluctuation
  ),
  [PAGE.IPLocatorTest]: getEndpointUrlForApiPage(PAGE.IPLocator),
  [PAGE.BulkIPLookupTest]: getEndpointUrlForApiPage(PAGE.BulkIPLookup),
  [PAGE.TimeZoneLookupTest]: getEndpointUrlForApiPage(PAGE.TimeZoneLookup),
  [PAGE.TimeZoneConverterTest]: getEndpointUrlForApiPage(
    PAGE.TimeZoneConverter
  ),
  [PAGE.AstronomyDataTest]: getEndpointUrlForApiPage(PAGE.AstronomyData),
  [PAGE.UserAgentParserTest]: getEndpointUrlForApiPage(PAGE.UserAgentParser),
  [PAGE.BulkUserAgentParserTest]: getEndpointUrlForApiPage(
    PAGE.BulkUserAgentParser
  ),
  [PAGE.AdminLevelsTest]: '/api/geo-admin-levels/test',
  [PAGE.AdminUnitsTest]: '/api/geo-admin-units/test',
  [PAGE.AdminUnitsDetailsTest]: '/api/geo-admin-units-details/test',
  [PAGE.CitiesTest]: '/api/geo-cities/test',
  [PAGE.CountriesTest]: '/api/geo-countries/test',
  [PAGE.CountryDetailsTest]: '/api/geo-country-details/test',
  [PAGE.SubregionsTest]: '/api/geo-subregions/test',
  [PAGE.RegionsTest]: '/api/geo-regions/test',

  [PAGE.ZipCodeLookupTest]: '/api/zipcode-lookup/test',
  [PAGE.SearchCityTest]: '/api/zipcode-search-city/test',
  [PAGE.SearchRadiusTest]: '/api/zipcode-search-radius/test',
  [PAGE.SearchRegionTest]: '/api/zipcode-search-region/test',
  [PAGE.DistanceTest]: '/api/zipcode-distance/test',
  [PAGE.DistanceMatchTest]: '/api/zipcode-distance-match/test',
};

function getEndpointUrlForApiPage(page: PAGE): string {
  // Using pageUrl function gives error. Maybe because of circular dependency.
  return PAGE_URLS[page] + '/test';
}

export const DYNAMIC_PAGE_URL_REGEXES: Partial<Record<PAGE, RegExp>> = {
  [PAGE.OrganizationInvitationAccept]:
    /\/organization-invitation-accept\/[^/]+$/,
  [PAGE.OrganizationSubscriptionSuccess]:
    /\/organization-subscription-success\/[^/]+$/,
  [PAGE.AdminViewOrganization]: /^\/dashboard\/organizations\/[^/]+$/,
  [PAGE.AdminOrganizationApiRestrictions]:
    /^\/dashboard\/organizations\/[^/]+\/api-restrictions$/,
  [PAGE.AdminOrganizationUsageHistory]:
    /^\/dashboard\/organizations\/[^/]+\/usage-history$/,
};

export const enum API_ENDPOINT {
  Account = 'account',
  ContactDetails = 'contact-details',
  ContactUs = 'contact-us',
  AccountPassword = 'account-password',
  SendAccountDeletionCode = 'send-account-deletion-code',
  SSOUser = 'sso-user',
  NewsletterSubscription = 'newsletter-subscription',
  ApiKey = 'api-key',
  BulkUserAgent = 'bulk-user-agent-parser',
  ApiKeyReset = 'api-key-reset',
  ForgotPassword = 'forgot-password',
  GithubLogin = 'github-login',
  Login = 'login',
  GoogleLogin = 'google-login',
  Logout = 'logout',
  PasswordReset = 'password-reset',
  ResendAccountVerificationCode = 'resend-account-verification-code',
  ResendPasswordResetCode = 'resend-password-reset-code',
  Signup = 'signup',
  VerifyAccount = 'verify-account',
  Client = 'client',
  AllAccounts = 'all-accounts',
  SwitchAccount = 'switch-account',
  OrganizationMemberSetPassword = 'organization-member-set-password',
  Invoices = 'invoices',
  InvoicesCount = 'invoices-count',
  InvoiceDownload = 'invoice-download',
  OneOffCreditsInfo = 'one-off-credits-info',
  MaintainerOneOffCreditsInfo = 'maintainer-one-off-credits-info',
  Plans = 'plans',
  PublicPlans = 'public-plans',
  OrganizationPlans = 'organization-plans',
  ApiSubscription = 'api-subscription',
  ApiSubscriptionCancel = 'api-subscription-cancel',
  ApiSubscriptionDeactivate = 'api-subscription-deactivate',
  ApiSubscriptionResume = 'api-subscription-resume',
  ApiSubscriptionTransactionId = 'api-subscription-transaction-id',
  OrganizationSubscription = 'organization-subscription',
  OrganizationSubscriptionCancel = 'organization-subscription-cancel',
  OrganizationSubscriptionDeactivate = 'organization-subscription-deactivate',
  OrganizationSubscriptionResume = 'organization-subscription-resume',
  OrganizationSubscriptionTransactionId = 'organization-subscription-transaction-id',
  ApiSubscriptionInfo = 'api-subscription-info',
  MaintainerSubscriptionInfo = 'maintainer-subscription-info',
  OrganizationSubscriptionInfo = 'organization-subscription-info',
  AdminOrganization = 'admin-organization',
  MaintainerOrganization = 'maintainer-organization',
  MemberOrganization = 'member-organization',
  OrganizationLeave = 'organization-leave',
  MainOrgLeave = 'maint-org-leave',
  ApiEndpoints = 'api-endpoints',
  MaintApiEndpoints = 'maint-endpoints',
  OrganizationApiRestrictions = 'organization-api-restrictions',
  MaintainerApiRestrictions = 'maintainer-api-restrictions',
  MemberApiRestrictions = 'member-api-restrictions',
  MaintainerMemberApiRestrictions = 'maintainer-member-api-restrictions',
  OrganizationInvitee = 'organization-invitee',
  OrganizationInvitees = 'organization-invitees',
  MaintainerOrganizationInvitees = 'maintainer-organization-invitees',
  OrganizationMembers = 'organization-members',
  MaintainerOrganizationMembers = 'maint-organization-members',
  MaintainerOrgMember = 'maint-organization-member',
  OrganizationMember = 'organization-member',
  OrganizationMemberApiRestrictions = 'organization-member-api-restrictions',
  OneOffCreditsUsageHistory = 'one-off-credits-usage-history',
  CurrentPeriodSubscriptionCreditsUsage = 'current-period-subscription-credits-usage',
  SubscriptionCreditsUsageHistory = 'subscription-credits-usage-history',
  OrganizationOneOffCreditsUsageHistory = 'organization-one-off-credits-usage-history',
  CurrentPeriodOrganizationSubscriptionCreditsUsage = 'current-period-organization-subscription-credits-usage',
  CurrentPeriodMaintainerSubscriptionCreditsUsage = 'current-period-maintainer-subscription-credits-usage',
  OrganizationSubscriptionCreditsUsageHistory = 'organization-subscription-credits-usage-history',
  MaintainerSubscriptionCreditsUsageHistory = 'maintainer-subscription-credits-usage-history',
  AdminClients = 'admin-clients',
  AdminClientById = 'admin-client-by-id',
  AdminClientByAPIKey = 'admin-client-by-apikey',
  PaidPlansClients = 'paid-plans-clients',
  DeletedClients = 'deleted-clients',
  InactiveClients = 'inactive-clients',
  CancelSubscriptionClients = 'cancel-subscription-clients',
  DeactivateSubscriptionClients = 'deactivate-subscription-clients',
  OverDueSubscriptionClients = 'overdue-subscription-clients',
  SpecificPlansClients = 'specific-plans-clients',
  AllOrganizationAdmins = 'all-organization-admins',
  ManagePlans = 'manage-plans',
  ManageOrganizationPlans = 'manage-organization-plans',
  AdminDiscounts = 'admin-discounts',
  SignUpInvite = 'signup-invite',
  ClientContactDetails = 'client-contact-details',
  ClientResetAPIKey = 'client-reset-apikey',
  ClientActivateAccount = 'client-activate-account',
  ClientAssignAdminRole = 'client-assign-admin-role',
  ClientRestoreAccount = 'client-restore-account',
  ClientResetPassword = 'client-reset-password',
  GeneratePaymentLink = 'generate-payment-link',
  ClientSubscriptionDetails = 'client-subscription-details',
  ClientSubscriptionCancel = 'client-subscription-cancel',
  ClientSubscriptionResume = 'client-subscription-resume',
  ClientSubscriptionDeactivate = 'client-subscription-deactivate',
  ClientSubscriptionAllowSurcharge = 'client-subscription-allow-surcharge',
  AdminOrganizationDetails = 'admin-organization-details',
  AdminAddOrganization = 'admin-add-organization',
  ClientOneOffCredits = 'client-one-off-credits',
  ClientSubscriptionUsageHistory = 'client-subscription-usage-history',
  ClientOneOffUsageHistory = 'client-oneoff-usage-history',
  AdminAllOrganizations = 'admin-all-organizations',
  AdminDeleteOrganizationMember = 'admin-delete-organization-member',
  AdminClientUpdateSubscription = 'admin-client-update-subscription',
  AdminClientAssignSubscriptionPlan = 'admin-assign-subscription-plan',
  AdminClientAssignOneOffPlan = 'admin-assign-one-off-plan',
  AdminClientOrganizationSubscription = 'admin-assign-organization-plan',
  AdminClientSetAssignOneOffCredits = 'admin-set-one-off-credits',
  AdminClientSetAssignSubscriptionCredits = 'admin-subscription-off-credits',
  ClientOrganizationAPIRestrictions = 'client-organization-api-restrictions',
  AdminOrganizationAPIRestrictions = 'admin-organization-api-restrictions',
  AdminOrganizationOneOffUsage = 'admin-organization-one-off-usage',
  AdminOrganizationSubscriptionUsage = 'admin-organization-subscription-usage',
  AdminOrganizationApiEndpoints = 'admin-organization-api-endpoints',
  ActiveThrottleLimit = 'active-throttling-limit',
  ApiEndpointsCreditsConsumption = 'api-endpoints-credits-consumption',
  PublicApiEndpointsCreditsConsumption = 'public-api-endpoints-credits-consumption',
  MaintainerOneOffCreditsUsageHistory = 'maintainer-one-off-credits-usage-history',
  OrganizationIpWhitelist = 'organization-ip-whitelist',
  MaintainerIpWhitelist = 'maintainer-ip-whitelist',
  GetSession = 'get-session',
}

export const API_ENDPOINTS: Readonly<
  Record<
    API_ENDPOINT,
    string | ((data: Record<string, string | number>) => string)
  >
> = {
  [API_ENDPOINT.Account]: '/account',
  [API_ENDPOINT.ContactUs]: '/contact',
  [API_ENDPOINT.ContactDetails]: '/account/contact-details',
  [API_ENDPOINT.AccountPassword]: '/account/password',
  [API_ENDPOINT.SendAccountDeletionCode]: '/account/send-deletion-code',
  [API_ENDPOINT.SSOUser]: '/account/sso-user',
  [API_ENDPOINT.NewsletterSubscription]: '/account/newsletter-subscription',
  [API_ENDPOINT.ApiKey]: ({ apiKeyId }) => `/api-key/${apiKeyId}`,
  [API_ENDPOINT.ApiKeyReset]: '/api-key/reset',
  [API_ENDPOINT.ForgotPassword]: '/auth/forgot-password',
  [API_ENDPOINT.Login]: '/auth/login',
  [API_ENDPOINT.GithubLogin]: '/auth/github-login',
  [API_ENDPOINT.GoogleLogin]: '/auth/google-login',
  [API_ENDPOINT.Logout]: '/auth/logout',
  [API_ENDPOINT.PasswordReset]: '/auth/password-reset',
  [API_ENDPOINT.BulkUserAgent]: '/bulk-user-agent-parser',
  [API_ENDPOINT.ResendAccountVerificationCode]:
    '/auth/resend-account-verification-code',
  [API_ENDPOINT.ResendPasswordResetCode]: '/auth/resend-password-reset-code',
  [API_ENDPOINT.Signup]: '/auth/signup',
  [API_ENDPOINT.GetSession]: '/auth/get-session',
  [API_ENDPOINT.VerifyAccount]: '/auth/verify-account',
  [API_ENDPOINT.Client]: '/client',
  [API_ENDPOINT.AllAccounts]: '/client/accounts',
  [API_ENDPOINT.SwitchAccount]: '/client/switch-account',
  [API_ENDPOINT.OrganizationMemberSetPassword]: '/password/set',
  [API_ENDPOINT.Invoices]: '/invoices',
  [API_ENDPOINT.InvoicesCount]: '/invoices/count',
  [API_ENDPOINT.InvoiceDownload]: ({ invoiceId }) =>
    `/invoices/${invoiceId}/download`,
  [API_ENDPOINT.OneOffCreditsInfo]: '/one-off-credits-info',
  [API_ENDPOINT.MaintainerOneOffCreditsInfo]: '/org-maint/one-off-credits-info',

  [API_ENDPOINT.ApiEndpoints]: '/org-admin/api-endpoints',
  [API_ENDPOINT.MaintApiEndpoints]: '/org-maint/api-endpoints',

  [API_ENDPOINT.AdminOrganizationApiEndpoints]:
    '/admin/organizations/api-endpoints',
  [API_ENDPOINT.OrganizationMember]: '/org-admin/member',
  [API_ENDPOINT.MaintainerOrgMember]: '/org-maint/member',

  [API_ENDPOINT.MemberApiRestrictions]: '/org-admin/member/api-restrictions',
  [API_ENDPOINT.MaintainerMemberApiRestrictions]:
    '/org-maint/member/api-restrictions',
  [API_ENDPOINT.OrganizationSubscription]:
    '/org-admin/organization-subscription',
  [API_ENDPOINT.OrganizationSubscriptionCancel]:
    '/org-admin/organization-subscription/cancel',
  [API_ENDPOINT.OrganizationSubscriptionDeactivate]:
    '/org-admin/organization-subscription/deactivate',
  [API_ENDPOINT.OrganizationSubscriptionResume]:
    '/org-admin/organization-subscription/resume',
  [API_ENDPOINT.OrganizationSubscriptionTransactionId]:
    '/org-admin/organization-subscription/transactionId',
  [API_ENDPOINT.OrganizationOneOffCreditsUsageHistory]:
    '/org-admin/one-off-credits-usage-history',
  [API_ENDPOINT.MaintainerOneOffCreditsUsageHistory]:
    '/org-maint/one-off-credits-usage-history',
  [API_ENDPOINT.OrganizationSubscriptionCreditsUsageHistory]:
    '/org-admin/subscription-credits-usage-history',
  [API_ENDPOINT.MaintainerSubscriptionCreditsUsageHistory]:
    '/org-maint/subscription-credits-usage-history',
  [API_ENDPOINT.OneOffCreditsUsageHistory]: '/usage-history/one-off-credits',
  [API_ENDPOINT.SubscriptionCreditsUsageHistory]:
    '/usage-history/subscription-credits',
  [API_ENDPOINT.AdminOrganization]: '/org-admin/organization',
  [API_ENDPOINT.MaintainerOrganization]: '/org-maint/organization',

  [API_ENDPOINT.OrganizationApiRestrictions]:
    '/org-admin/organization/api-restrictions',
  [API_ENDPOINT.MaintainerApiRestrictions]:
    '/org-maint/organization/api-restrictions',
  [API_ENDPOINT.OrganizationInvitee]: '/org-admin/organization/invitee',
  [API_ENDPOINT.OrganizationInvitees]: '/org-admin/organization/invitees',
  [API_ENDPOINT.MaintainerOrganizationInvitees]:
    '/org-maint/organization/invitees',
  [API_ENDPOINT.OrganizationMembers]: '/org-admin/organization/members',
  [API_ENDPOINT.MaintainerOrganizationMembers]:
    '/org-maint/organization/members',
  [API_ENDPOINT.MemberOrganization]: '/org-member/organization',
  [API_ENDPOINT.OrganizationLeave]: '/org-member/organization/leave',
  [API_ENDPOINT.MainOrgLeave]: '/org-maint/organization/leave',

  [API_ENDPOINT.OrganizationPlans]: '/organization-plans',
  [API_ENDPOINT.OrganizationSubscriptionInfo]:
    '/organization-subscription-info',
  [API_ENDPOINT.Plans]: '/plans',
  [API_ENDPOINT.PublicPlans]: '/public/plans',
  [API_ENDPOINT.ApiSubscription]: '/subscription',
  [API_ENDPOINT.ApiSubscriptionCancel]: '/subscription/cancel',
  [API_ENDPOINT.ApiSubscriptionDeactivate]: '/subscription/deactivate',
  [API_ENDPOINT.ApiSubscriptionResume]: '/subscription/resume',
  [API_ENDPOINT.ApiSubscriptionTransactionId]: '/subscription/transactionId',
  [API_ENDPOINT.ApiSubscriptionInfo]: '/subscription-info',
  [API_ENDPOINT.MaintainerSubscriptionInfo]: '/org-maint/subscription-info',

  [API_ENDPOINT.OrganizationMemberApiRestrictions]:
    '/org-member/api-restrictions',
  [API_ENDPOINT.AdminClients]: '/admin/clients',
  [API_ENDPOINT.AdminClientById]: '/admin/clients/accountId',
  [API_ENDPOINT.AdminClientByAPIKey]: '/admin/clients/get-by-apikey',
  [API_ENDPOINT.SpecificPlansClients]: '/admin/specific-plans-clients',
  [API_ENDPOINT.PaidPlansClients]: '/admin/paid-plans-clients',
  [API_ENDPOINT.DeletedClients]: '/admin/deleted-clients',
  [API_ENDPOINT.InactiveClients]: '/admin/inactive-clients',
  [API_ENDPOINT.CancelSubscriptionClients]:
    '/admin/cancelled-subscription-clients',
  [API_ENDPOINT.DeactivateSubscriptionClients]:
    '/admin/deactivated-subscription-clients',
  [API_ENDPOINT.OverDueSubscriptionClients]:
    '/admin/overdue-subscription-clients',
  [API_ENDPOINT.AllOrganizationAdmins]: '/admin/organization-admins',
  [API_ENDPOINT.ManagePlans]: '/admin/plans',
  [API_ENDPOINT.ManageOrganizationPlans]: '/admin/organization-plans',
  [API_ENDPOINT.AdminDiscounts]: '/admin/discounts',
  [API_ENDPOINT.SignUpInvite]: '/admin/signup-invitation',
  [API_ENDPOINT.ClientContactDetails]: '/admin/clients/contact-details',
  [API_ENDPOINT.ClientResetAPIKey]: '/admin/clients/reset-apikey',
  [API_ENDPOINT.ClientActivateAccount]: '/admin/clients/activate-account',
  [API_ENDPOINT.ClientAssignAdminRole]: '/admin/clients/assign-admin-role',
  [API_ENDPOINT.ClientRestoreAccount]: '/admin/clients/restore-deleted-account',
  [API_ENDPOINT.ClientResetPassword]: '/admin/clients/reset-password',
  [API_ENDPOINT.GeneratePaymentLink]:
    '/admin/clients/generate-plan-payment-link',
  [API_ENDPOINT.ClientSubscriptionDetails]: ({ subscriptionId }) =>
    `/admin/clients/subscription/${subscriptionId}`,
  [API_ENDPOINT.ClientSubscriptionCancel]: ({ subscriptionId }) =>
    `/admin/clients/subscription/${subscriptionId}/cancel`,
  [API_ENDPOINT.ClientSubscriptionResume]: ({ subscriptionId }) =>
    `/admin/clients/subscription/${subscriptionId}/resume`,
  [API_ENDPOINT.ClientSubscriptionDeactivate]: ({ subscriptionId }) =>
    `/admin/clients/subscription/${subscriptionId}/deactivate`,
  [API_ENDPOINT.ClientSubscriptionAllowSurcharge]: ({ subscriptionId }) =>
    `/admin/clients/subscription/${subscriptionId}/allow-surcharge`,
  [API_ENDPOINT.AdminOrganizationDetails]: ({ organizationId }) =>
    `/admin/organizations/${organizationId}`,
  [API_ENDPOINT.AdminAddOrganization]: '/admin/organizations',
  [API_ENDPOINT.ClientOneOffCredits]: ({ oneOffId }) =>
    `/admin/clients/one-off-credits/${oneOffId}`,
  [API_ENDPOINT.ClientOneOffUsageHistory]:
    '/admin/clients/one-off-credits/usage-history',
  [API_ENDPOINT.ClientSubscriptionUsageHistory]:
    '/admin/clients/subscription/usage-history',
  [API_ENDPOINT.AdminAllOrganizations]: '/admin/organizations',
  [API_ENDPOINT.AdminDeleteOrganizationMember]: ({ organizationId }) =>
    `/admin/organizations/${organizationId}/member`,
  [API_ENDPOINT.AdminClientUpdateSubscription]: ({ subscriptionId, planId }) =>
    `/admin/clients/subscription/${subscriptionId}/update/${planId}`,
  [API_ENDPOINT.AdminClientAssignSubscriptionPlan]:
    '/admin/clients/subscription/assign-plan/',
  [API_ENDPOINT.AdminClientAssignOneOffPlan]:
    '/admin/clients/one-off-credits/assign-plan/',
  [API_ENDPOINT.AdminClientOrganizationSubscription]:
    '/admin/clients/organization-subscription',
  [API_ENDPOINT.AdminClientSetAssignOneOffCredits]: ({ oneOffId }) =>
    `/admin/clients/one-off-credits/${oneOffId}/set-assigned-credits`,
  [API_ENDPOINT.AdminClientSetAssignSubscriptionCredits]: ({
    subscriptionId,
  }) => `/admin/clients/subscription/${subscriptionId}/set-assigned-credits`,
  [API_ENDPOINT.ClientOrganizationAPIRestrictions]: ({ organizationId }) =>
    `/admin/organizations/${organizationId}/member/api-restrictions`,
  [API_ENDPOINT.AdminOrganizationAPIRestrictions]: ({ organizationId }) =>
    `/admin/organizations/${organizationId}/api-restrictions`,
  [API_ENDPOINT.AdminOrganizationOneOffUsage]: ({ organizationId }) =>
    `/admin/organizations/${organizationId}/one-off-usage`,
  [API_ENDPOINT.AdminOrganizationSubscriptionUsage]: ({ organizationId }) =>
    `/admin/organizations/${organizationId}/subscription-usage`,
  [API_ENDPOINT.CurrentPeriodSubscriptionCreditsUsage]:
    '/usage-history/subscription-credits/current-period',
  [API_ENDPOINT.CurrentPeriodOrganizationSubscriptionCreditsUsage]:
    '/org-admin/usage/subscription-credits/current-period',
  [API_ENDPOINT.CurrentPeriodMaintainerSubscriptionCreditsUsage]:
    '/org-maint/usage/subscription-credits/current-period',
  [API_ENDPOINT.ActiveThrottleLimit]: '/active-throttling-limit',
  [API_ENDPOINT.ApiEndpointsCreditsConsumption]:
    '/plans/endpoints-credit-consumption',
  [API_ENDPOINT.PublicApiEndpointsCreditsConsumption]:
    '/public/plans/endpoints-credit-consumption',
  [API_ENDPOINT.OrganizationIpWhitelist]:
    '/org-admin/organization/ip-whitelist',
  [API_ENDPOINT.MaintainerIpWhitelist]: '/org-maint/organization/ip-whitelist',
};

export const DYNAMIC_API_ENDPOINT_REGEXES: Partial<
  Readonly<Record<API_ENDPOINT, RegExp>>
> = {
  [API_ENDPOINT.ApiKey]: /^\/api-key\/[^/]+$/,
  [API_ENDPOINT.InvoiceDownload]: /^\/invoices\/[^/]+\/download$/,
  [API_ENDPOINT.AdminOrganizationDetails]: /^\/admin\/organizations\/[^/]+$/,
  [API_ENDPOINT.AdminDeleteOrganizationMember]:
    /^\/admin\/organizations\/[^/]+\/member$/,
  [API_ENDPOINT.ClientSubscriptionDetails]:
    /^\/admin\/clinets\/subscription\/[^/]+$/,
  [API_ENDPOINT.ClientSubscriptionCancel]:
    /^\/admin\/clinets\/subscription\/[^/]+\/cancel$/,
  [API_ENDPOINT.ClientSubscriptionResume]:
    /^\/admin\/clinets\/subscription\/[^/]+\/resume$/,
  [API_ENDPOINT.ClientSubscriptionDeactivate]:
    /^\/admin\/clinets\/subscription\/[^/]+\/deactivate$/,
  [API_ENDPOINT.ClientSubscriptionAllowSurcharge]:
    /^\/admin\/clinets\/subscription\/[^/]+\/allow-surcharge$/,
  [API_ENDPOINT.ClientOneOffCredits]:
    /^\/admin\/clients\/one-off-credits\/[^/]+$/,
  [API_ENDPOINT.AdminClientUpdateSubscription]:
    /^\/admin\/clients\/subscription\/[^/]+\/update\/[^/]+$/,
  [API_ENDPOINT.AdminClientAssignOneOffPlan]:
    /^\/admin\/clients\/one-off-credits\/assign-plan\/[^/]+$/,
  [API_ENDPOINT.AdminClientSetAssignOneOffCredits]:
    /^\/admin\/clients\/one-off-credits\/[^/]+\/set-assigned-credits$/,
  [API_ENDPOINT.AdminClientSetAssignSubscriptionCredits]:
    /^\/admin\/clients\/subscription\/[^/]+\/set-assigned-credits$/,
  [API_ENDPOINT.ClientOrganizationAPIRestrictions]:
    /^\/admin\/organizations\/[^/]+\/member\/api-restrictions$/,
  [API_ENDPOINT.AdminOrganizationAPIRestrictions]:
    /^\/admin\/organizations\/[^/]+\/api-restrictions$/,
  [API_ENDPOINT.AdminOrganizationOneOffUsage]:
    /^\/admin\/organizations\/[^/]+\/one-off-usage$/,
  [API_ENDPOINT.AdminOrganizationSubscriptionUsage]:
    /^\/admin\/organizations\/[^/]+\/subscription-usage$/,
};

export const enum API_ENDPOINT_AF {
  PublicPricingPlans = 'public-pricing-endpoint',
}

export const API_ENDPOINTS_AF: Record<
  API_ENDPOINT_AF,
  string | ((data: Record<string, string | number>) => string)
> = {
  [API_ENDPOINT_AF.PublicPricingPlans]: '/pricing/plans/get',
};

export const enum ERROR_TYPE {
  ServerError = 'server-error',
  ValidationError = 'validation-error',
  CaptchaValidationError = 'captcha-validation-required',
}

export const enum SUBSCRIPTION_PLANS {
  Monthly = 'monthlySubPlans',
  Yearly = 'yearlySubPlans',
  OneOff = 'creditPlans',
}

export const enum USER_ROLE {
  USER = 'user',
  ADMIN = 'admin',
  ORG_ADMIN = 'org_admin',
  ORG_MEMBER = 'org_mem',
  ORG_MAINT = 'org_maint',
  // This role is for prospective organization members who are sent invitations to join and set their passwords
  PASSWORD_RESET = 'pass_rst_req',
}

export const enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const enum SUBSCRIPTION_UPDATE_TYPE {
  Upgrade = 'upgrade',
  Downgrade = 'downgrade',
}

export const enum SUBSCRIPTION_TYPE {
  Api = 'api-sub',
  Organization = 'org-sub',
}

export const enum PLAN_DURATION {
  Monthly = 'monthly',
  Annually = 'yearly',
}

export const enum SUBSCRIPTION_STATUS {
  Active = 'active',
  Cancelled = 'cancelled',
  Deactivated = 'deactivated',
  Overdue = 'overdue',
}

export const enum CAPTCHA_VERSION {
  V2 = 'v2',
  V3 = 'v3',
}

export const enum LOGIN_METHOD {
  Website = 'website',
  Google = 'google',
  Github = 'github',
}

export const enum LOGIN_IN_ERROR_TYPES {
  InvalidCredentials = 'Invalid Credentials',
  Unverified = 'Account Not Verified',
  NotFound = 'Account Not Found',
  AccountDeleted = 'Account Deleted',
}

export type API_CATEGORY = string;

// It is being used as object
export enum PlanType {
  ONE_OFF = 'one_off',
  SUBSCRIPTION = 'subs',
}

// It is being used as Object
export enum DiscountType {
  Percentage = 'percentage',
  Flat = 'flat',
}

// It is being used as object
export enum PlanDuration {
  MONTHLY_SUB = 'month',
  YEARLY_SUB = 'year',
}

export const enum SORT_ORDER {
  Asc = 'asc',
  Desc = 'desc',
}

export const enum CALCULATOR_PLAN_TYPES {
  OneOff = 'creditPlans',
  Subscription = 'monthlySubPlans',
}

export const enum BASE_CURRENCY {
  USD = 'USD',
  Other = 'Non-USD',
}

export const enum IP_GEOLOCATION_OPTIONS {
  GeoUserAgentParsing = 'Geolocation + User-Agent Parsing',
  GeoIpSecurityInfo = 'Geolocation + IP Security Info',
  GeoIpHostnameDetails = 'Geolocation + IP Hostname Details',
}

export const TABLE_OF_CONTENT_ENTRIES = {
  documentation: (headingLevel: HeadingLevel = 2) => ({
    title: 'Documentation',
    id: 'documentation',
    heading: `h${headingLevel}`,
  }),
  apiEndpoint: (headingLevel: HeadingLevel = 3) => ({
    title: 'API Endpoint',
    id: 'api-endpoint',
    heading: `h${headingLevel}`,
  }),
  apiRequest: (headingLevel: HeadingLevel = 3) => ({
    title: 'API Request',
    id: 'api-request',
    heading: `h${headingLevel}`,
  }),
  apiResponse: (headingLevel: HeadingLevel = 3) => ({
    title: 'API Response',
    id: 'api-response',
    heading: `h${headingLevel}`,
  }),
  httpErrorCodes: (headingLevel: HeadingLevel = 3) => ({
    title: 'HTTP Error Codes',
    id: 'http-status',
    heading: `h${headingLevel}`,
  }),
  howToGuides: (headingLevel: HeadingLevel = 2) => ({
    title: 'How-To-Guides',
    id: 'how-to-guides',
    heading: `h${headingLevel}`,
  }),
};

export const enum PRICING_ENDPOINT_ID {
  DomainWHOISLookup = 'domain_whois_lookup',
  IPWHOISLookup = 'ip_whois_lookup',
  ASNWHOISLookup = 'asn_whois_lookup',
  DomainWHOISHistory = 'domain_whois_history',
  DomainWHOISReverse = 'domain_whois_reverse',
  BulkDomainWHOISLookup = 'bulk_domain_whois_lookup',
  DNSLookup = 'dns_lookup',
  DNSHistory = 'dns_history',
  DNSReverse = 'dns_reverse',
  BulkDNSLookup = 'bulk_dns_lookup',
  SSLLookup = 'ssl_lookup',
  SSLChainLookup = 'ssl_chain_lookup',
  DomainAvailability = 'domain_availability',
  DomainAvailabilityWithSuggestions = 'domain_availability_suggestions',
  BulkDomainAvailability = 'bulk_domain_availability',
  LatestCurrencyRates = 'latest_currency_rates',
  HistoricalCurrencyRates = 'historical_currency_rates',
  LatestRateConverter = 'latest_rate_currency_converter',
  HistoricalRateConverter = 'historical_rate_currency_converter',
  LocalizedCurrencyConverter = 'localized_currency_converter',
  CurrencyTimeSeries = 'time-series_currency_data',
  CurrencyFluctuation = 'currency_fluctuation_data',
  IPGeolocationLookup = 'ip_geolocation_lookup',
  BulkIPGeolocationLookup = 'bulk_ip_geolocation_lookup',
  TimezoneLookup = 'time-zone_api',
  TimezoneConverter = 'time-zone_converter_api',
  UserAgentParser = 'user-agent_api',
  BulkUserAgentParser = 'bulk_user-agent_api',
  AstronomyLookup = 'astronomy_api',
  LatestCommodityRates = 'latest_commodity_rates',
  HistoricalCommodityRates = 'historical_commodity_rates',
  CommodityFluctuationData = 'commodity_fluctuation_data',
  TimeSeriesCommodityData = 'time-series_commodity_data',
  ScreenshotApi = 'screenshot_api',
  BulkScreenshotApi = 'bulk_screenshot_api',
  ZipCodeLookup = 'zipcode_lookup',
  ZipCodeSearchByCity = 'zipcode_search_by_city',
  ZipCodeSearchByRegion = 'zipcode_search_by_region',
  ZipCodeSearchByRadius = 'zipcode_search_by_radius',
  ZipCodeDistance = 'zipcode_distance',
  ZipCodeDistanceMatch = 'zipcode_distance_match',
  GeodbAdminLevels = 'geodb_admin_levels',
  GeodbAdminUnits = 'geodb_admin_units',
  GeodbAdminUnitDetails = 'geodb_admin_unit_details',
  GeodbCities = 'geodb_cities',
  GeodbCountries = 'geodb_countries',
  GeodbCountryDetails = 'geodb_country_details',
  GeodbRegions = 'geodb_regions',
  GeodbSubregions = 'geodb_subregions',
  VATRatesIp = 'vat_rates_ip',
  VATRatesCountry = 'vat_rates_country',
  EmailValidation = 'email_validation_single',
  BulkEmailValidation = 'email_validation_bulk',
}

export const PRICING_ENDPOINT_ID_BY_NAME: Readonly<
  Record<string, PRICING_ENDPOINT_ID>
> = {
  'IP Geolocation Lookup': PRICING_ENDPOINT_ID.IPGeolocationLookup,
  'Bulk IP Geolocation Lookup': PRICING_ENDPOINT_ID.BulkIPGeolocationLookup,
  'Domain WHOIS Lookup': PRICING_ENDPOINT_ID.DomainWHOISLookup,
  'IP WHOIS Lookup': PRICING_ENDPOINT_ID.IPWHOISLookup,
  'ASN WHOIS Lookup': PRICING_ENDPOINT_ID.ASNWHOISLookup,
  'Domain WHOIS Historical Lookup': PRICING_ENDPOINT_ID.DomainWHOISHistory,
  'Domain WHOIS Reverse Lookup': PRICING_ENDPOINT_ID.DomainWHOISReverse,
  'Bulk Domain WHOIS Lookup': PRICING_ENDPOINT_ID.BulkDomainWHOISLookup,
  'DNS Lookup': PRICING_ENDPOINT_ID.DNSLookup,
  'Historical DNS Lookup': PRICING_ENDPOINT_ID.DNSHistory,
  'Reverse DNS Lookup': PRICING_ENDPOINT_ID.DNSReverse,
  'Bulk DNS Lookup': PRICING_ENDPOINT_ID.BulkDNSLookup,
  'SSL Certificate Lookup': PRICING_ENDPOINT_ID.SSLLookup,
  'SSL Certificate Chain Lookup': PRICING_ENDPOINT_ID.SSLChainLookup,
  'Check Domain Availability': PRICING_ENDPOINT_ID.DomainAvailability,
  'Check Domain Availability with Suggestions':
    PRICING_ENDPOINT_ID.DomainAvailabilityWithSuggestions,
  'Check Domain Availability in Bulk':
    PRICING_ENDPOINT_ID.BulkDomainAvailability,

  'Currencies Exchange Rates': PRICING_ENDPOINT_ID.LatestCurrencyRates,
  'Currencies Historical Exchange Rates':
    PRICING_ENDPOINT_ID.HistoricalCurrencyRates,
  'Currency Converter on Latest Price': PRICING_ENDPOINT_ID.LatestRateConverter,
  'Currency Converter on Historical Price':
    PRICING_ENDPOINT_ID.HistoricalRateConverter,
  'Geolocalized Currency Converter':
    PRICING_ENDPOINT_ID.LocalizedCurrencyConverter,
  'Currencies Time Series Data': PRICING_ENDPOINT_ID.CurrencyTimeSeries,
  'Currencies Fluctuation': PRICING_ENDPOINT_ID.CurrencyFluctuation,
  'Timezone API': PRICING_ENDPOINT_ID.TimezoneLookup,
  'Timezone Converter API': PRICING_ENDPOINT_ID.TimezoneConverter,
  'User-Agent API': PRICING_ENDPOINT_ID.UserAgentParser,
  'Bulk User-Agent API': PRICING_ENDPOINT_ID.BulkUserAgentParser,
  'Astronomy API': PRICING_ENDPOINT_ID.AstronomyLookup,
  'Commodity Rates': PRICING_ENDPOINT_ID.LatestCommodityRates,
  'Historical Commodity Rates': PRICING_ENDPOINT_ID.HistoricalCommodityRates,
  'Commodity Fluctuation Data': PRICING_ENDPOINT_ID.CommodityFluctuationData,
  'Commodity Time Series Data': PRICING_ENDPOINT_ID.TimeSeriesCommodityData,
  'VAT Rates by IP': PRICING_ENDPOINT_ID.VATRatesIp,
  'VAT Rates by Country': PRICING_ENDPOINT_ID.VATRatesCountry,
  'Email Validation API': PRICING_ENDPOINT_ID.EmailValidation,
  'Bulk Email Validation API': PRICING_ENDPOINT_ID.BulkEmailValidation,
};
