import {Container} from "@/components/Container";
import ExpandingSection from "@/components/ExpandingSection";
import {Section} from "@/components/Section";

export const MinistrySection = ({data}) => {
  return (
    <Section className="white-background-flourish  py-2">
      <Container>
        <div className="flex items-center w-full ">
          {data
            ?.filter((post) => post.slug === "courses-section-3")
            .map((post) => (
              <div
                key={post.id}
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered,
                }}
              />
            ))}
        </div>
        {data
          ?.filter((post) => post.type === "track")
          .map((post) => (
            <ExpandingSection
              title={post?.title.rendered}
              content={post?.content.rendered}
              key={post?.id}
              url={post?.acf.hasOwnProperty("url") ? post?.acf?.url : ""}
              img={
                post?.featured_media !== 0
                  ? post?.better_featured_image.source_url
                  : ""
              }
              imgAlt={
                post?.featured_media !== 0
                  ? post?.better_featured_image?.alt_text
                  : ""
              }
              imgTitle={post?.featured_media !== 0 ? post?.title?.rendered : ""}
            />
          ))}
      </Container>
    </Section>
  );
};
