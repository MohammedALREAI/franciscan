import {Container} from "@/components/Container";
import ExpandingSection from "@/components/ExpandingSection";
import Title from "@/components/Title";

export const CompleteSections = ({data}) => {
  return (
    <div className="white-background-flourish">
      <Container>
        <Title title="A Complete Catechetical Formation" className="text-base md:text-xl" />

        {data
          ?.filter((post) => post?.type === "program")
          .map((post, i) => (
            <ExpandingSection
              index={i}
              expanded={post?.acf.expanded}
              title={post?.title?.rendered}
              content={post?.content?.rendered}
              key={post?.id}
              url={post?.acf?.hasOwnProperty("url") ? post.acf.url : ""}
              img={
                post?.featured_media !== 0
                  ? post?.better_featured_image?.source_url
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
    </div>
  );
};
