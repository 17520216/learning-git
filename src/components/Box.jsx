import BoxChapter from "./BoxChapter";
import Container from "./Container";

export default function Box({ title }) {
  let chapter = [
    {
      title: "Back - End Developer",
      caption: "Fulltime",
      money: "$2.000",
      slug: "backend",
    },
    {
      title: "Front - End Developer",
      caption: "Fulltime",
      money: "$1.500",
      slug: "frontend",
    },
    {
      // dark={true}
      title: "Digital Designer",
      caption: "Fulltime",
      money: "$800",
      slug: "design",
    },
    {
      slug: "copywriter",
      title: "Copywriter Fresher",
      caption: "Fulltime",
      money: "$500",
    },
    ,
    {
      slug: "UX-UI",
      // dark={true}
      title: "UI/UX Designer",
      caption: "Fulltime",
      money: "$800",
    },
  ];
  return (
    <>
      <div className="sectionChapter">
        <Container>
          {title && <h2 className="other">Other Job Opening</h2>}
          <div className="box">
            {chapter.map((e, i) => (
              <BoxChapter key={i} {...e} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
