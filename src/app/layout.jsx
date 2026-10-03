import 'styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import { GeistMono } from 'geist/font/mono';

import { CodeTabsProvider } from 'contexts/code-tabs-context';
import { TabsProvider } from 'contexts/tabs-context';
import { TopbarProvider } from 'contexts/topbar-context';

import { inter, esbuild } from './fonts';
import { HomepageVisitProvider } from './homepage-visit-context';
import ThemeProvider from './theme-provider';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

// Theme class set client-side by next-themes; suppressHydrationWarning avoids server/client mismatch.
// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <html
    lang="en"
    className={`${inter.variable} ${esbuild.variable} ${GeistMono.variable} dark`}
    suppressHydrationWarning
  >
    <head />
    <body>
      <ThemeProvider>
        <HomepageVisitProvider>
          <TopbarProvider>
            <TabsProvider>
              <CodeTabsProvider>{children}</CodeTabsProvider>
            </TabsProvider>
          </TopbarProvider>
        </HomepageVisitProvider>
      </ThemeProvider>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
