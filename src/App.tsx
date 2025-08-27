import { useState } from "react";

// ---- brand assets ---------------------------------------------------------
// If you want to show a real logo/headshot, set these to valid image URLs
// (e.g. https://.../logo.png) or to full data URLs like
//   data:image/png;base64,AAAA...
// Leaving them as empty strings shows the built‑in fallbacks.
const LOGO_SRC: string = "";
const HEADSHOT_SRC: string = "";

// ---- types ----------------------------------------------------------------
interface FaqItem { q: string; a: string }
interface FaqSection { category: string; items: FaqItem[] }

// ---- accordion ------------------------------------------------------------
function AccordionItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-gray-900">{q}</span>
        <span className="ml-4 select-none text-2xl leading-none">{open ? "–" : "+"}</span>
      </button>
      {open && (
        <div className="pb-5 text-gray-700 whitespace-pre-line">{a}</div>
      )}
    </div>
  );
}

// ---- data -----------------------------------------------------------------
const faqs: FaqSection[] = [
  {
    category: "BUYERS – GETTING STARTED",
    items: [
      {
        q: "What is an assumable mortgage?",
        a:
          "An assumable mortgage lets a homebuyer take over the seller’s existing loan terms, with no cost to the seller. Many government-backed loans—especially FHA and VA—are assumable, and millions of these mortgages are available.",
      },
      {
        q: "Why is an assumable mortgage valuable?",
        a:
          "When market rates are high, assuming a loan with a rate as low as ~2% can save buyers thousands per month versus taking a new loan near today’s ~7% averages. A low-rate assumable mortgage can make a dream home affordable.",
      },
    ],
  },
  {
    category: "APPROVALS FAQ",
    items: [
      {
        q: "How do I qualify for an assumable mortgage?",
        a:
          "You must meet current FHA or VA requirements for the loan you’re assuming. Typically this means: minimum credit score around 580 (most lenders prefer 620–640), debt-to-income ratio under FHA’s 50% max, plus standard docs (employment history, income explanations per applicant, and verified assets for any required down payment).",
      },
      {
        q: "Do I need a pre-approval?",
        a:
          "Yes. Most listing agents require pre-approval before considering offers. After acceptance, the seller’s servicer also underwrites you—reviewing credit, DTI, and other financial factors—to confirm you meet minimum requirements.",
      },
      {
        q: "Do I need to make a down payment?",
        a:
          "You must cover the seller’s equity (purchase price minus the remaining mortgage balance). That equity can be paid in cash as a down payment or financed with a second mortgage.",
      },
      {
        q: "What if I don’t have enough to cover the down payment amount?",
        a:
          "You can use gap financing by taking a second mortgage for the remaining balance. You will make two payments (assumed first mortgage + second). Often the blended rate across both loans is still lower than getting one new mortgage at today’s higher rates. Many listings include a calculator to model the blended rate and payment.",
      },
      {
        q: "Can I put more money down to lower my payment?",
        a:
          "Extra money does not change the assumed first mortgage’s payoff schedule—it only reduces its outstanding balance. If you use a second mortgage, putting more down reduces how much you borrow on the second and can lower your total monthly payments.",
      },
      {
        q: "What is the process for obtaining a second mortgage with an assumable mortgage?",
        a:
          "Apply for approval to assume the seller’s mortgage and, in parallel, apply for the second mortgage to cover the remaining funds. Once both are approved, they are finalized at closing. For down-payment support, a HELOAN can be used as a 2nd-lien option to cover part of the required amount.",
      },
      {
        q: "How does a second mortgage work with an assumable mortgage?",
        a:
          "The second mortgage bridges the gap between the sale price and the assumable balance. It’s secured by the home’s equity. Buyers benefit by using the lower rate of the assumable mortgage for most of the financing, with the second (often higher‑rate) loan covering the rest—typically yielding a favorable blended rate and lower payment than a single new market‑rate loan.",
      },
      {
        q: "Can the second mortgage cover closing costs in an assumable mortgage transaction?",
        a:
          "Generally the second is used to finance part of the purchase price, but some lenders allow rolling closing costs into the second mortgage to reduce upfront cash.",
      },
      {
        q: "Does it have to be my primary home to assume a mortgage?",
        a:
          "VA assumptions do not require the property to be your primary residence—useful for investors. You must buy in your name and cover the seller’s equity; the seller may need to forgo their entitlement until payoff. FHA assumptions require the property to be your primary residence for at least one year (living there 6+ months per year).",
      },
      {
        q: "Can I assume a VA loan if I’m not a veteran?",
        a:
          "Yes. Non‑veterans can assume a VA loan if they meet VA lender criteria. When a qualified buyer assumes from a veteran/active‑duty seller and later pays off or refinances the loan, the veteran’s entitlement is restored for future use.",
      },
      {
        q: "Can I assume a mortgage when purchasing a home for my child or family member?",
        a:
          "Yes—so long as you meet the lender’s qualifications for the assumed loan.",
      },
      {
        q: "MIP—what is it, and why can’t it be removed?",
        a:
          "MIP (Mortgage Insurance Premium) is required on FHA‑backed loans to protect lenders. For loans closed on/after June 3, 2013: if original down payment >10%, MIP ends after 11 years; if <10%, MIP lasts for the life of the loan.",
      },
      {
        q: "How does a second mortgage function in conjunction with an assumable mortgage?",
        a:
          "It provides funds to bridge the difference between sale price and assumable balance and is secured against home equity (same concept as above).",
      },
      {
        q: "What are the benefits of combining a second mortgage with an assumable mortgage?",
        a:
          "The combined structure can deliver a lower blended interest rate and lower monthly payments than one new market‑rate loan, since most of the financing sits at the assumable loan’s lower rate.",
      },
      {
        q: "Blended rate—what does it mean when discussing a second mortgage?",
        a:
          "It’s the weighted‑average interest rate across the first (assumed) and second mortgages. Weights are based on each loan’s amount.",
      },
      {
        q: "How does using a second mortgage with an assumable mortgage affect monthly payments?",
        a:
          "Often monthly payments are lower than taking a single new mortgage at today’s rates because the blended rate (weighted between the assumable and second loans) is typically more favorable. Always review your personal situation with a mortgage professional.",
      },
      {
        q: "How is a HELOAN different from a HELOC?",
        a:
          "Both are second mortgages, but a HELOAN is a lump‑sum with a fixed rate—useful for purchases and gives the same payment every month (clear all‑in cost). A HELOC is a revolving line of credit, typically variable rate, used as needed and generally not used for purchases.",
      },
      {
        q: "Does the seller have any liability in a sale that includes a mortgage assumption?",
        a:
          "A release of liability is filed when the mortgage transfers. The seller’s name is removed from the note after the assumption; their credit is unaffected going forward and mortgage activity is no longer associated with them.",
      },
    ],
  },
];

// Basic dev-time sanity checks (acts like tiny “tests” in the browser console)
if (typeof window !== "undefined") {
  console.assert(Array.isArray(faqs) && faqs.length > 0, "FAQ data should be a non-empty array");
  console.assert(faqs.every(s => Array.isArray(s.items)), "Each FAQ section must have an items array");
}

// ---- app ------------------------------------------------------------------
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="border-b border-gray-200 bg-white/60 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          {/* Left: logo */}
          <div className="flex items-center gap-3">
            {LOGO_SRC ? (
              <img src={LOGO_SRC} alt="Onyx Homes logo" className="h-8 w-auto" />
            ) : (
              <div className="text-xl tracking-widest font-semibold">ONYX<span className="font-normal">HOMES</span></div>
            )}
          </div>

          {/* Right: headshot + contact */}
          <div className="flex items-center gap-3">
            {HEADSHOT_SRC ? (
              <img src={HEADSHOT_SRC} alt="Sarah Drake headshot" className="h-12 w-12 rounded-full object-cover ring-1 ring-gray-200" />
            ) : (
              <div className="h-12 w-12 rounded-full bg-gray-200 grid place-items-center text-gray-600 font-semibold">SD</div>
            )}
            <div className="leading-tight text-right">
              <div className="font-semibold text-gray-900">Sarah Drake</div>
              <div className="text-sm text-gray-600">Sarah@OnyxHomes.com</div>
              <div className="text-sm text-gray-600">(949) 776-0042 · DRE #02247803</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h1>
        <p className="mt-2 text-gray-600">Learn about assumable mortgages and how approvals, second mortgages, and payments work.</p>

        <div className="mt-10 space-y-12">
          {faqs.map((section) => (
            <section key={section.category}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">{section.category}</h2>
              <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
                {section.items.map((item, idx) => (
                  <AccordionItem key={idx} q={item.q} a={item.a} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 text-xs text-gray-400">Content for educational purposes only. Confirm details with your lender/servicer.</footer>
      </main>
    </div>
  );
}

