import { getDashboardData } from "@/lib/notion";
import { designRecipes, formatCounts, notionSources, palette, type LaunchPost } from "@/lib/data";

function Metric({ label, value, note }: { label: string; value: string | number; note: string }) {
  return (
    <article className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{note}</p>
    </article>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function Mockup({ post }: { post: LaunchPost }) {
  const isReel = post.format.includes("Reel");
  const isCarousel = post.format === "Carousel";
  const isDark = [1, 3, 8, 15, 19, 23, 28, 30].includes(post.day);
  return (
    <article className={`mockup ${isDark ? "mockupDark" : ""} ${isReel ? "mockupReel" : ""}`}>
      <div className="mockCanvas">
        <div className="mockTop">
          <span>Day {post.day}</span>
          <span>{post.format}</span>
        </div>
        <div className="mockMedia" aria-hidden="true">
          <span>{isReel ? "9:16" : isCarousel ? "Carousel" : "Feed"}</span>
        </div>
        <h3>{post.hook}</h3>
        <p>{post.pillar}</p>
        <div className="mockRule" />
      </div>
      <div className="mockMeta">
        <strong>{post.title}</strong>
        <p>{post.asset}</p>
        <span>{post.cta}</span>
      </div>
    </article>
  );
}

export default async function Page() {
  const data = await getDashboardData();
  const counts = formatCounts();
  const firstNine = data.launchPosts.filter((post) => post.day <= 9);

  return (
    <main>
      <header className="hero" id="top">
        <nav className="topbar">
          <a href="#top" className="wordmark">Hair Solutions Co.</a>
          <div>
            <a href="#calendar">Calendar</a>
            <a href="#mockups">Mockups</a>
            <a href="#systems">Systems</a>
          </div>
        </nav>
        <section className="heroGrid">
          <div>
            <p className="eyebrow">Social media marketing command center</p>
            <h1>Instagram rebrand launch, translated into one working dashboard.</h1>
            <p className="lede">
              A Crown Harbor social system for visualizing the color rulebook, the 30-day launch calendar,
              every planned post mockup, recurring Stories, Reels, asset needs, metrics, and DM intelligence.
            </p>
            <div className="heroActions">
              <a href="#mockups" className="button">Review mockups</a>
              <a href="#rulebook" className="button ghost">Open rulebook</a>
            </div>
          </div>
          <aside className="syncCard">
            <span className={data.synced ? "syncLive" : "syncSeed"}>{data.synced ? "Live sync" : "Seed snapshot"}</span>
            <h2>Notion hub mapped</h2>
            <p>{data.syncNote}</p>
            <small>Last refresh: {data.updatedAt}</small>
          </aside>
        </section>
      </header>

      <section className="section metricsBand">
        <Metric label="Launch posts" value={data.launchPosts.length} note="30-day reset burst from the Content Production Board." />
        <Metric label="Reel ideas" value={data.reels.length} note="Discovery engine and reusable founder/product formats." />
        <Metric label="Story days" value={data.stories.length} note="Daily recurring structure for trust, interaction, and routing." />
        <Metric label="Weekly loop" value={data.metricWeeks.length} note="90-day learning path after the launch burst." />
      </section>

      <section className="section split" id="rulebook">
        <div>
          <p className="eyebrow">Crown Harbor rulebook</p>
          <h2>Social design rules merged from the platform spec and palette rulebook.</h2>
          <p>
            Social is more immediate than the website, but the palette stays disciplined. Harbor Slate leads action
            and authority. Forest Depth carries trust. Ivory Silk and Ash Ivory do the working surface. Crown Sapphire
            structures education. Champagne is a micro-cue. Emerald Palace is a rare cameo, not a system color.
          </p>
        </div>
        <div className="paletteGrid">
          {palette.map((color) => (
            <article key={color.name} className="swatch">
              <span style={{ background: color.hex }} />
              <strong>{color.name}</strong>
              <code>{color.hex}</code>
              <p>{color.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section recipeGrid">
        {designRecipes.map((recipe) => (
          <article className="recipe" key={recipe.name}>
            <span>{recipe.name}</span>
            <h3>{recipe.bestFor}</h3>
            <p>{recipe.surface}</p>
            <small>Avoid: {recipe.avoid}</small>
          </article>
        ))}
      </section>

      <section className="section launchArc">
        <div>
          <p className="eyebrow">Launch command center</p>
          <h2>30-day strategic arc</h2>
        </div>
        <article>
          <strong>Days 1-9</strong>
          <span>Identity and proof</span>
          <p>Brand, founder, category, product proof, hairline realism, trust, and next step.</p>
        </article>
        <article>
          <strong>Days 10-21</strong>
          <span>Objection handling</span>
          <p>Toupee myth, base types, maintenance, density, fit concern, and buying online.</p>
        </article>
        <article>
          <strong>Days 22-30</strong>
          <span>Decision and routing</span>
          <p>Comparison, color, proof, care, order trust, Q&A, and next phase.</p>
        </article>
      </section>

      <section className="section" id="calendar">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Content calendar</p>
            <h2>30 planned launch posts</h2>
          </div>
          <div className="countPills">
            {Object.entries(counts).map(([format, count]) => <Pill key={format}>{format}: {count}</Pill>)}
          </div>
        </div>
        <div className="calendarGrid">
          {data.launchPosts.map((post) => (
            <article key={post.day} className="calendarCard">
              <span>Day {post.day}</span>
              <h3>{post.title}</h3>
              <p>{post.pillar}</p>
              <footer>
                <Pill>{post.format}</Pill>
                <small>{post.metric}</small>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section firstNine">
        <div>
          <p className="eyebrow">Grid reset</p>
          <h2>First 9 posts as the profile-intent system</h2>
          <p>
            The first nine posts introduce the new visual standard, answer the immediate trust questions, and prepare
            the pinned-post handoff from identity/proof to Start Here routing.
          </p>
        </div>
        <div className="nineGrid">
          {firstNine.map((post) => <div key={post.day}><span>{post.day}</span><p>{post.hook}</p></div>)}
        </div>
      </section>

      <section className="section" id="mockups">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Visual mockup wall</p>
            <h2>Every launch post as a Crown Harbor creative card</h2>
          </div>
          <p className="headerNote">These are layout-direction mockups, not final exports. They show format, hierarchy, palette recipe, CTA, and asset need for each planned post.</p>
        </div>
        <div className="mockupGrid">
          {data.launchPosts.map((post) => <Mockup post={post} key={post.day} />)}
        </div>
      </section>

      <section className="section systems" id="systems">
        <div>
          <p className="eyebrow">Execution systems</p>
          <h2>Reels, Stories, assets, metrics, and DM intelligence</h2>
        </div>
        <div className="systemColumns">
          <article>
            <h3>Reels queue</h3>
            {data.reels.slice(0, 8).map((reel) => (
              <details key={reel.title}>
                <summary>{reel.title}</summary>
                <p>{reel.hook}</p>
                <small>{reel.priority} · {reel.cta}</small>
              </details>
            ))}
          </article>
          <article>
            <h3>Stories rhythm</h3>
            {data.stories.map((story) => (
              <div className="storyRow" key={story.day}>
                <strong>{story.day}</strong>
                <span>{story.type}</span>
                <small>{story.frames} frames · {story.sticker}</small>
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="section tableSection">
        <div>
          <p className="eyebrow">Asset and consent control</p>
          <h2>Production needs before final publishing</h2>
        </div>
        <div className="tableWrap">
          <table>
            <thead><tr><th>Asset</th><th>Format</th><th>Consent</th><th>Use</th></tr></thead>
            <tbody>
              {data.assetNeeds.map((asset) => (
                <tr key={asset.name}>
                  <td>{asset.name}</td>
                  <td>{asset.format}</td>
                  <td>{asset.consent}</td>
                  <td>{asset.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section intelligence">
        <article>
          <p className="eyebrow">DM intelligence</p>
          <h2>Customer questions become content routes.</h2>
          <div className="objectionList">
            {data.objections.map((item) => (
              <div key={item.question}>
                <strong>{item.question}</strong>
                <p>{item.response}</p>
                <small>{item.category} · {item.reel ? "Reel" : "No reel"} · {item.carousel ? "Carousel" : "No carousel"} · {item.faq ? "FAQ" : "No FAQ"}</small>
              </div>
            ))}
          </div>
        </article>
        <article>
          <p className="eyebrow">90-day loop</p>
          <h2>What the calendar optimizes toward after launch.</h2>
          <div className="weekList">
            {data.metricWeeks.map((week) => (
              <div key={week.week}>
                <strong>{week.week}</strong>
                <p>{week.notes}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section sourceMap">
        <div>
          <p className="eyebrow">Source map</p>
          <h2>How the Notion hub becomes the Site.</h2>
        </div>
        {notionSources.map((source) => (
          <article key={source.name}>
            <strong>{source.name}</strong>
            <p>{source.role}</p>
            <code>{source.id}</code>
          </article>
        ))}
      </section>
    </main>
  );
}
