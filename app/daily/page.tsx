import { DashboardShell, PageHeader, PostDetailCard, Stat, StatusPill, StorySchedule } from "@/app/components";
import { formatCounts, storyPlanForLaunchDay } from "@/lib/data";
import { getDashboardData } from "@/lib/notion";

export default async function DailyPage() {
  const data = await getDashboardData();
  const counts = formatCounts(data.launchPosts);

  return (
    <DashboardShell data={data}>
      <PageHeader eyebrow="Daily calendar view" title="30-day posting desk">
        <p>
          Each launch day is separated into Feed Posts, Reels, and Stories. Real Notion fields are shown when present;
          missing dates, times, captions, and Cloudinary URLs stay visible as production gaps.
        </p>
      </PageHeader>

      <section className="statsGrid">
        <Stat label="Launch days" value={data.launchPosts.length} note="One primary Content Production Board item per launch day." />
        <Stat label="Feed posts" value={(counts.Static || 0) + (counts.Carousel || 0) + (counts["Static + Stories"] || 0)} note="Static, carousel, and static plus story executions." />
        <Stat label="Reel days" value={(counts.Reel || 0) + (counts["Founder Reel"] || 0)} note="Short-form video days pulled from the calendar." />
        <Stat label="Story system" value={data.stories.length} note="Recurring weekly story rhythm mapped across the 30 days." />
      </section>

      <nav className="dayJump" aria-label="Jump to launch day">
        {data.launchPosts.map((post) => (
          <a key={post.day} href={`#day-${post.day}`}>{post.day}</a>
        ))}
      </nav>

      <section className="dailyStack">
        {data.launchPosts.map((post) => {
          const story = storyPlanForLaunchDay(post.day, data.stories);
          const hasReel = post.format.includes("Reel");

          return (
            <article className="dayRow" id={`day-${post.day}`} key={post.day}>
              <div className="dayRail">
                <span>Day</span>
                <strong>{post.day}</strong>
                <StatusPill tone={hasReel ? "info" : "neutral"}>{post.format}</StatusPill>
              </div>
              <section className="dayLane">
                <h2>Feed Posts</h2>
                <PostDetailCard post={post} />
              </section>
              <section className="dayLane">
                <h2>Reels</h2>
                {hasReel ? (
                  <PostDetailCard post={post} surface="reel" />
                ) : (
                  <div className="emptyLane">
                    <StatusPill>No reel scheduled</StatusPill>
                    <p>This launch day does not have a dedicated Reel in the Content Production Board.</p>
                  </div>
                )}
              </section>
              <section className="dayLane">
                <h2>Stories</h2>
                <StorySchedule story={story} />
              </section>
            </article>
          );
        })}
      </section>
    </DashboardShell>
  );
}
