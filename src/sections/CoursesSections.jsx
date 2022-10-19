import Title from "@/components/Title";
import fahIcon from "@/images/fah-img.jpg";
import Image from "next/image";
import Link from "next/link";
export const CoursesSections = ({data}) => {
  return (
    <>
      <Title title="Courses" />
      <div className="black-text white-background-flourish py-4">
        <div className="container mx-auto">
          <div className="flex font-light">
            {data
              .filter((post) => post.slug === "courses-intro")
              .map((post) => (
                <div
                  key={post.id}
                  className="text-xl md:text-2xl lg:text-3xl"
                  dangerouslySetInnerHTML={{
                    __html: post.content.rendered,
                  }}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="red-background-flourish text-white ">
        <div className="container mx-auto grid grid-cols-1 gap-4 overflow-hidden py-2 md:grid-cols-3">
          <div className=" flex max-h-[88%]  max-w-[88%]  flex-col items-center py-2 justify-center">
            <Image
              className="responsive-img"
              style={{margin: "0 auto", width: "400px"}}
              src={fahIcon}
              alt="Speaking the Truth in Love Conference Flyer."
              title="Speaking the Truth in Love"
            />
            <a
              href="http://en.calameo.com/read/00005685416f121522341"
              title="Franciscan at Home"
              target="_blank"
            >
              <button
                className="btn waves-effect waves-light btn-inverted-white"
                style={{
                  margin: "0 auto",
                  marginTop: "16px",
                  display: "block",
                }}
              >
                Learn More
              </button>
            </a>
          </div>
          <div className="col-span-2 flex max-w-[88%]  flex-col justify-center">
            <div className=" flex  flex-col justify-center">
              <Link
                href="https://franciscanathome.com/"
                title="Franciscan at Home"
                target="_blank"
                className=""
              >
                <Title
                  title="Franciscan at Home"
                  className="text-base md:text-2xl"
                />
              </Link>
              <span className="my-2 block text-center text-base md:text-xl">
                Online Learning at Your Convenience
              </span>
              <a
                href="https://franciscanathome.com/"
                title="Franciscan at Home"
                target="_blank"
                className="my-2 flex justify-center"
              >
                <button className="bg-['#a61f26'] hover:bg-['#a61f10']  transform  border-2 px-5 py-3 text-base font-medium text-white shadow-sm transition duration-300 hover:-rotate-6 hover:scale-110">
                  Come Explore
                </button>
              </a>

              <p className="my-2 text-base">
                The Institute’s collection of offerings includes workshops for
                general catechists, parish catechetical leaders, RCIA directors
                and teams, Catholic school teachers, youth ministers, and campus
                ministers. The Institute also offers workshops for priests and
                deacons, formation for the ministry of parenting, skills
                development for those in pro-life ministry, and training in
                first proclamation for anyone engaged in aspects of
                evangelization and outreach. This makes available a rich and
                varied corpus of many hundreds of workshops spread across all
                these ministry areas, which can accessed by individuals, or used
                in any way a diocese wishes. Come explore!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
