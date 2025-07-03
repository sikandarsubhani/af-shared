import {
  ASNIcon,
  AstronomyApiIcon,
  AvailableIcon,
  BarGraphIcon,
  BulkDNSLookupIcon,
  BulkDocumentsIcon,
  BulkIpLocationLookupIcon,
  BulkWhoIsLookupIcon,
  CommodityIcon,
  ConvertIcon,
  CurrencyExchangeIcon,
  DNSIcon,
  FluctuationIcon,
  HistoricalCurrencyConverterIcon,
  HistoricIcon,
  IPIcon,
  IpLocationLookupIcon,
  LocalCurrencyIcon,
  ReverseDNSLookupIcon,
  ReverseIcon,
  ScreenshotIcon,
  SSLCertificateChainLookupIcon,
  SSLIcon,
  SuggestIcon,
  TimeSeriesIcon,
  TimeZoneConvertIcon,
  TimeZoneIcon,
  UserAgentApiIcon,
  WhoIsHistoricalLookupIcon,
  WhoIsLookupIcon,
} from '../components/Icons';
import { ProductCategory, ProductsCategoriesTestPages } from '../types/types';

// Placeholder exports that will be populated by repositories
export let APIDocsUrls: Array<{ title: string; link: string }> = [];
export let toolsUrls: Array<{ title: string; link: string }> = [];
export let navigationLinksPublic: Array<{ href: string; label: string }> = [];
export let navigationLinksPrivate: Array<{ href: string; label: string }> = [];

// Function to set navigation data from repositories
export function setNavigationData(data: {
  APIDocsUrls: Array<{ title: string; link: string }>;
  toolsUrls: Array<{ title: string; link: string }>;
  navigationLinksPublic: Array<{ href: string; label: string }>;
  navigationLinksPrivate: Array<{ href: string; label: string }>;
}): void {
  APIDocsUrls.length = 0;
  APIDocsUrls.push(...data.APIDocsUrls);
  
  toolsUrls.length = 0;
  toolsUrls.push(...data.toolsUrls);
  
  navigationLinksPublic.length = 0;
  navigationLinksPublic.push(...data.navigationLinksPublic);
  
  navigationLinksPrivate.length = 0;
  navigationLinksPrivate.push(...data.navigationLinksPrivate);
}
  {
    heading: 'WHOIS APIs',
    subheadings: [
      {
        name: 'Domain WHOIS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.WHOISDomainLookup),

        logo: WhoIsLookupIcon,
        description: 'Retrieve the WHOIS Data for any domain',
      },
      {
        name: 'IP WHOIS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.WHOISIPLookup),
        logo: IPIcon,
        description: 'Access the WHOIS Data for any IP',
      },
      {
        name: 'ASN Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.ASNLookup),
        logo: ASNIcon,
        description:
          'Get detailed ASN information, including block ranges, routing policies, contacts, and both structured and raw WHOIS data for any ASN.',
      },

      {
        name: 'Domain WHOIS Historical Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.DomainWHOISHistoryLookup),
        logo: WhoIsHistoricalLookupIcon,
        description: 'Get all the historical WHOIS records of a domain',
      },
      {
        name: 'Domain WHOIS Reverse Lookup',
        logo: ReverseIcon,
        description:
          'Get all the domains registered by a particular company or owner, or access the domains with specific keywords in their domain names',

        isShowInDocs: true,
        href: pageUrl(PAGE.ReverseWHOIS),
      },
      {
        name: 'Bulk Domain WHOIS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.BulkWHOISLookup),
        logo: BulkWhoIsLookupIcon,
        description:
          'Retrieve WHOIS data of multiple domains in a single request',
      },
    ],
  },
  {
    heading: 'DNS APIs',
    subheadings: [
      {
        name: 'DNS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.DNSLookup),
        logo: DNSIcon,
        description:
          'Get A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME DNS records for any hostname',
      },
      {
        name: 'Historical DNS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.DNSHistoryLookup),
        logo: HistoricIcon,
        description:
          'Get all historical A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME DNS records of a hostname',
      },
      {
        name: 'Reverse DNS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.ReverseDNSLookup),
        logo: ReverseDNSLookupIcon,
        description:
          'Retrieve all the hostnames associated with any particular A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME DNS records. For instance, you can access all the hostnames hosted on any IP/CIDR notation, all the domain names using Cloudflare name servers, and all the domain names using Google Mailbox',
      },
      {
        name: 'Bulk DNS Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.BulkDNSLookup),

        logo: BulkDNSLookupIcon,
        description:
          'Retrieve A, AAAA, MX, NS, SOA, SPF, TXT, and CNAME DNS records of multiple hostnames in a single request',
      },
    ],
  },
  {
    heading: 'SSL APIs',
    subheadings: [
      {
        name: 'SSL Certificate Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.SSLCertificateLookup),
        logo: SSLIcon,
        description:
          'Retrieve the SSL certificate and any hidden information embedded within it for a domain.',
      },
      {
        name: 'SSL Certificate Chain Lookup',
        isShowInDocs: false,
        logo: SSLCertificateChainLookupIcon,
        description:
          'Retrieve all certificates from the domain to the root Certificate Authority (CA) of a domain.',
        href: pageUrl(PAGE.SSLCertificateLookup),
      },
    ],
  },
  {
    heading: 'Domain Availability APIs',
    subheadings: [
      {
        name: 'Domain Availability API',
        isShowInDocs: true,
        href: pageUrl(PAGE.DomainSearch),
        logo: AvailableIcon,
        description:
          'Check whether a domain is available for registration or not. ',
      },
      {
        logo: SuggestIcon,
        name: 'Check Domain Availability with Suggestions',
        description:
          'Check domain availability and receive suggestions for related domains. ',
        href: pageUrl(PAGE.DomainSearch),
        isShowInDocs: false,
      },
      {
        name: 'Bulk Domain Availability API',
        isShowInDocs: true,
        logo: BulkDocumentsIcon,
        description:
          'Check the availability of multiple domains in a single request.',
        href: pageUrl(PAGE.BulkDomainChecker),
      },
    ],
  },
  {
    heading: 'Screenshot APIs',
    subheadings: [
      {
        name: 'Screenshot API',
        href: pageUrl(PAGE.WebsiteScreenshot),
        isShowInDocs: true,
        logo: ScreenshotIcon,
        description:
          'Capture full-page screenshots and videos of websites, simulate devices, inject custom code, block cookie banners, and record scrollable content as GIF, MP4, or WebM with flexible settings.',
      },
      {
        name: 'Bulk Screenshot API',
        href: pageUrl(PAGE.BulkScreenshotApi),
        isShowInDocs: true,
        logo: BulkDocumentsIcon,
        description:
          'Capture screenshots of multiple websites in a single request.',
      },
    ],
  },
  {
    heading: 'Currency APIs',
    subheadings: [
      {
        name: 'Currencies Exchange Rates API',
        isShowInDocs: true,
        href: pageUrl(PAGE.ExchangeRate),
        logo: CurrencyExchangeIcon,
        description:
          'Retrieve currency exchange rates with USD as the default base currency.',
      },
      {
        name: 'Currencies Historical Exchange Rates',
        isShowInDocs: false,
        href: pageUrl(PAGE.ExchangeRate),
        logo: BarGraphIcon,
        description:
          'Retrieve historical currency exchange rates for a specific date with USD as the default base currency.',
      },
      {
        name: 'Currency Converter API',
        isShowInDocs: true,
        href: pageUrl(PAGE.CurrencyConverter),
        logo: ConvertIcon,
        description:
          'Convert any amount from one currency to another using the current exchange rate.',
      },
      {
        name: 'Currency Converter on Historical Price',
        isShowInDocs: false,
        href: pageUrl(PAGE.CurrencyConverter),
        logo: HistoricalCurrencyConverterIcon,
        description:
          'Convert any amount from one currency to another using the historical exchange rate for a specific date.',
      },
      {
        name: 'Currency Time Series API',
        isShowInDocs: true,
        href: pageUrl(PAGE.CurrencyTimeSeries),
        logo: TimeSeriesIcon,
        description:
          'Retrieve historical exchange rates for a specific duration of a currency pair.',
      },
      {
        name: 'Currency Fluctuation API',
        isShowInDocs: true,
        href: pageUrl(PAGE.CurrencyFluctuation),
        logo: FluctuationIcon,
        description:
          'Retrieve currency fluctuations for all specified currencies over a specific duration and base currency.',
      },
      {
        name: 'Geolocalized Currency Converter',
        isShowInDocs: true,
        href: pageUrl(PAGE.GeoCurrencyConverter),
        logo: LocalCurrencyIcon,
        description:
          'Convert any amount from one currency to the local currency based on IP address location or using the client IP address location, using the current exchange rate.',
      },
    ],
  },
  {
    heading: 'Commodity APIs',
    subheadings: [
      {
        name: 'Live Commodity Prices',
        logo: CommodityIcon,
        isShowInDocs: true,
        href: pageUrl(PAGE.LiveCommodityPrices),
        description:
          'Get real-time prices for agricultural, energy, and metal commodities with support for custom currencies—perfect for trading apps and financial dashboards.',
      },
      {
        name: 'Commodity Historical Prices',
        isShowInDocs: true,
        href: pageUrl(PAGE.HistoricalCommodityRates),
        logo: BarGraphIcon,
        description: `Track historical commodity prices for gold, oil, cocoa, and more — from 1990 to today.`,
      },
      {
        name: 'Commodity Fluctuation API',
        isShowInDocs: true,
        href: pageUrl(PAGE.CommodityFluctuationData),
        logo: FluctuationIcon,
        description:
          'Calculate percentage price changes in commodities over any custom date range. Use the Commodity Fluctuation API for market summaries and price shift detection.',
      },
      {
        name: 'Commodity Time Series API',
        isShowInDocs: true,
        href: pageUrl(PAGE.TimeSeriesCommodityData),
        logo: TimeSeriesIcon,
        description:
          'Retrieve historical commodity prices for a specific duration of a commodity symbol.',
      },
    ],
  },
  {
    heading: 'Timezone APIs',
    subheadings: [
      {
        name: 'Timezone Lookup',
        isShowInDocs: true,
        href: pageUrl(PAGE.TimeZoneLookup),
        logo: TimeZoneIcon,
        description:
          'Retrieve current time, date, and timezone-related information by specifying a timezone name, location address, location coordinates, IP address, or use the client IP address if no parameter is passed.',
      },
      {
        name: 'Timezone Converter',
        isShowInDocs: true,
        href: pageUrl(PAGE.TimeZoneConverter),
        logo: TimeZoneConvertIcon,
        description:
          'Convert any timestamp from one timezone to another using timezone names, location coordinates, or location addresses.',
      },
    ],
  },

  {
    heading: 'User Agent APIs',
    subheadings: [
      {
        name: 'User Agent Parser',
        isShowInDocs: true,
        href: pageUrl(PAGE.UserAgentParser),
        logo: () => UserAgentApiIcon({ width: '2rem', height: '2rem' }),
        description:
          'Obtain accurate browser, device, and operating system details by parsing a User Agent String.',
      },
      {
        name: 'Bulk User Agent Parser',
        isShowInDocs: true,
        href: pageUrl(PAGE.BulkUserAgentParser),
        logo: () => BulkDocumentsIcon({ width: '2rem', height: '2rem' }),
        description:
          'Retrieve the browser, device, and operating system details of multiple user-agent strings in a single request.',
      },
    ],
  },

  {
    heading: 'Other APIs',
    subheadings: [
      {
        name: 'Astronomy API',
        isShowInDocs: true,
        href: pageUrl(PAGE.AstronomyData),
        logo: AstronomyApiIcon,
        description:
          'Retrieve sunrise and sunset times, current position of the moon, and other related information by specifying a location address, location coordinates, IP address, or using the client IP address if no parameter is passed.',
      },
    ],
  },
];

export const productsCategories = apiList.map(cat => {
  return {
    ...cat,
    subheadings: cat.subheadings.filter(api => api.isShowInDocs),
  };
});

export const APIDocsUrls = apiList
  .filter(api => !['General'].includes(api.heading))
  .map(api => ({
    title: api.heading,
    link: api.subheadings[0].href,
  }));

export const HomePageAPICatalogue = apiList.filter(
  api => !['General'].includes(api.heading)
);

export const toolsUrls = [
  {
    title: 'Formatters & Beautifiers',
    link: `${pageUrl(PAGE.Tools)}#formatters-beautifiers`,
  },
  {
    title: 'Converters & Optimizers',
    link: `${pageUrl(PAGE.Tools)}#converters-optimizers`,
  },
  {
    title: 'Viewers & Validators',
    link: `${pageUrl(PAGE.Tools)}#viewers-validators`,
  },
];

export const productsCategoriesTestPages: Array<ProductsCategoriesTestPages> = [
  {
    heading: 'General',
    subheadings: [
      {
        name: 'Credits Usage API',
        href: pageUrl(PAGE.CreditsUsageApiTest),
        method: 'GET',
      },
    ],
  },
  {
    heading: 'Geolocation APIs',
    subheadings: [
      {
        name: 'IP Geolocation Lookup API',
        href: pageUrl(PAGE.IPLocatorTest),
        method: 'GET',
      },
      {
        name: 'Bulk IP Geolocation Lookup',
        href: pageUrl(PAGE.BulkIPLookupTest),
        method: 'POST',
      },
    ],
  },
  {
    heading: 'WHOIS APIs',
    subheadings: [
      {
        name: 'Domain WHOIS Lookup',
        href: pageUrl(PAGE.WHOISDomainLookupTest),
        method: 'GET',
      },
      {
        name: 'IP WHOIS Lookup',
        href: pageUrl(PAGE.WHOISIPLookupTest),
        method: 'GET',
      },
      {
        name: 'ASN Lookup',
        href: pageUrl(PAGE.ASNLookupTest),
        method: 'GET',
      },
      {
        name: 'Domain WHOIS Historical Lookup',
        href: pageUrl(PAGE.DomainWHOISHistoryLookupTest),
        method: 'GET',
      },
      {
        name: 'Domain WHOIS Reverse Lookup',
        href: pageUrl(PAGE.ReverseWHOISTest),
        method: 'GET',
      },
      {
        name: 'Bulk Domain WHOIS Lookup',
        href: pageUrl(PAGE.BulkWHOISLookupTest),
        method: 'POST',
      },
    ],
  },
  {
    heading: 'DNS APIs',
    subheadings: [
      { name: 'DNS Lookup', href: pageUrl(PAGE.DNSLookupTest), method: 'GET' },
      {
        name: 'Historical DNS Lookup',
        href: pageUrl(PAGE.DNSHistoryLookupTest),
        method: 'GET',
      },
      {
        name: 'Reverse DNS Lookup',
        href: pageUrl(PAGE.ReverseDNSLookupTest),
        method: 'GET',
      },
      {
        name: 'Bulk DNS Lookup',
        href: pageUrl(PAGE.BulkDNSLookupTest),
        method: 'POST',
      },
    ],
  },
  {
    heading: 'SSL APIs',
    subheadings: [
      {
        name: 'SSL Certificate Lookup',
        href: pageUrl(PAGE.SSLCertificateLookupTest),
        method: 'GET',
      },
      {
        name: 'SSL Certificate Chain Lookup',
        href: pageUrl(PAGE.SSLCertificateChainLookupTest),
        method: 'GET',
      },
    ],
  },
  {
    heading: 'Domain Availability APIs',
    subheadings: [
      {
        name: 'Domain Availability',
        href: pageUrl(PAGE.DomainSearchTest),
        method: 'GET',
      },
      {
        name: 'Domain Availability with Suggestions',

        href: pageUrl(PAGE.DomainSearchSuggestTest),
        method: 'GET',
      },
      {
        name: 'Bulk Domain Availability',
        href: pageUrl(PAGE.BulkDomainCheckerTest),
        method: 'POST',
      },
    ],
  },
  {
    heading: 'Screenshot APIs',
    subheadings: [
      {
        name: 'Website Screenshot API',
        href: pageUrl(PAGE.WebsiteScreenshotTest),
        method: 'GET',
      },
      {
        name: 'Bulk Screenshot API',
        href: pageUrl(PAGE.BulkScreenshotApiTest),
        method: 'POST',
      },
    ],
  },
  {
    heading: 'Currency APIs',
    subheadings: [
      {
        name: 'Latest Exchange Rates',
        href: pageUrl(PAGE.ExchangeRateTest),
        method: 'GET',
      },
      {
        name: 'Historical Exchange Rates',
        href: pageUrl(PAGE.HistoricalExchangeRateTest),
        method: 'GET',
      },
      {
        name: 'Currency Converter Latest',
        href: pageUrl(PAGE.CurrencyConverterTest),
        method: 'GET',
      },
      {
        name: 'Currency Converter Historical',
        href: pageUrl(PAGE.HistoricalCurrencyConverterTest),
        method: 'GET',
      },

      {
        name: 'Currency Time Series API',
        href: pageUrl(PAGE.CurrencyTimeSeriesTest),
        method: 'GET',
      },
      {
        name: 'Currency Fluctuation API',
        href: pageUrl(PAGE.CurrencyFluctuationTest),
        method: 'GET',
      },
      {
        name: 'Geolocalized Currency Converter',
        href: pageUrl(PAGE.GeoCurrencyConverterTest),
        method: 'GET',
      },

      {
        name: 'Currency Supported',
        href: pageUrl(PAGE.CurrencySupportedTest),
        method: 'GET',
      },
      {
        name: 'Currency Symbols',
        href: pageUrl(PAGE.CurrencySymbolsTest),
        method: 'GET',
      },
      {
        name: 'Currency Historical Data Limits',
        href: pageUrl(PAGE.CurrencyHistoricalDataLimitTest),
        method: 'GET',
      },
    ],
  },
  {
    heading: 'Commodity APIs',
    subheadings: [
      {
        name: 'Live Commodity Prices',
        href: pageUrl(PAGE.LiveCommodityPricesTest),
        method: 'GET',
      },
      {
        name: 'Historical Commodity Prices API',
        href: pageUrl(PAGE.HistoricalCommodityRatesTest),
        method: 'GET',
      },
      {
        name: 'Commodity Fluctuation API',
        href: pageUrl(PAGE.CommodityFluctuationDataTest),
        method: 'GET',
      },
      {
        name: 'Commodity Time Series API',
        href: pageUrl(PAGE.TimeSeriesCommodityDataTest),
        method: 'GET',
      },
      {
        name: 'Commodity Symbols',
        href: pageUrl(PAGE.CommoditySymbolsTest),
        method: 'GET',
      },
    ],
  },
  {
    heading: 'Timezone APIs',
    subheadings: [
      {
        name: 'Timezone Lookup',
        href: pageUrl(PAGE.TimeZoneLookupTest),
        method: 'GET',
      },
      {
        name: 'Timezone Converter',
        href: pageUrl(PAGE.TimeZoneConverterTest),
        method: 'GET',
      },
    ],
  },
  {
    heading: 'GeoDB APIs',
    subheadings: [
      {
        name: 'GeoDB Countries API',
        href: pageUrl(PAGE.CountriesTest),
        method: 'GET',
      },
      {
        name: 'GeoDB Country Details API',
        href: pageUrl(PAGE.CountryDetailsTest),
        method: 'GET',
      },
      {
        name: 'GeoDB Regions API',
        href: pageUrl(PAGE.RegionsTest),
        method: 'GET',
      },
      {
        name: 'GeoDB Subregions API',
        href: pageUrl(PAGE.SubregionsTest),
        method: 'GET',
      },
      {
        name: 'GeoDB Admin Levels API',
        href: pageUrl(PAGE.AdminLevelsTest),
        method: 'GET',
      },
      {
        name: 'GeoDB Admin Units API',
        href: pageUrl(PAGE.AdminUnitsTest),
        method: 'GET',
      },
      {
        name: 'GeoDB Admin Units Details API',
        href: pageUrl(PAGE.AdminUnitsDetailsTest),
        method: 'GET',
      },
      {
        name: 'GeoDB Cities API',
        href: pageUrl(PAGE.CitiesTest),
        method: 'GET',
      },
    ],
  },
  {
    heading: 'Zip Codes APIs',
    subheadings: [
      {
        name: 'Zip Code Lookup API',
        href: pageUrl(PAGE.ZipCodeLookupTest),
        method: 'GET',
      },
      {
        name: 'ZIP Code Search City API',
        href: pageUrl(PAGE.SearchCityTest),
        method: 'GET',
      },
      {
        name: 'ZIP Code Search Region API',
        href: pageUrl(PAGE.SearchRegionTest),
        method: 'GET',
      },
      {
        name: 'ZIP Code Search Radius API',
        href: pageUrl(PAGE.SearchRadiusTest),
        method: 'GET',
      },
      {
        name: 'ZIP Code Distance API',
        href: pageUrl(PAGE.DistanceTest),
        method: 'GET',
      },
      {
        name: 'ZIP Code Distance Match API',
        href: pageUrl(PAGE.DistanceMatchTest),
        method: 'GET',
      },
    ],
  },
  {
    heading: 'User Agent APIs',
    subheadings: [
      {
        name: 'User Agent Parser',
        href: pageUrl(PAGE.UserAgentParserTest),
        method: 'GET',
      },
      {
        name: 'Bulk User Agent Parser',
        href: pageUrl(PAGE.BulkUserAgentParserTest),
        method: 'POST',
      },
    ],
  },
  {
    heading: 'Other APIs',
    subheadings: [
      {
        name: 'Astronomy API',
        href: pageUrl(PAGE.AstronomyDataTest),
        method: 'GET',
      },
    ],
  },
];

export const navigationLinksPublic: Array<{ href: string; label: string }> = [
  { href: pageUrl(PAGE.APIFreaks), label: 'Documentation' },
  { href: pageUrl(PAGE.APIPlansPricingOneOff), label: 'Pricing' },
  { href: pageUrl(PAGE.Resources), label: 'Resources' },
  { href: pageUrl(PAGE.Tools), label: 'Tools' },
  { href: pageUrl(PAGE.ContactUs), label: 'Contact us' },
];

export const navigationLinksPrivate: Array<{ href: string; label: string }> = [
  { href: pageUrl(PAGE.APIFreaks), label: 'Documentation' },
  { href: pageUrl(PAGE.Resources), label: 'Resources' },
  { href: pageUrl(PAGE.CreditsUsageApiTest), label: 'Try APIs' },
  { href: pageUrl(PAGE.Tools), label: 'Tools' },
  { href: pageUrl(PAGE.ContactUs), label: 'Contact us' },
];
