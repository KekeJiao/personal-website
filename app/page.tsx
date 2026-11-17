import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Contact } from "@/components/sections/contact"
import { Intro } from "@/components/sections/intro"
import { Rates } from "@/components/sections/rates"
import { Work } from "@/components/sections/work"

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-sm bg-foreground px-4 py-2 text-sm text-background focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Intro />
        <Work />
        <Rates />
        <Contact />
      </main>

      <SiteFooter />
    </>
  )
}
