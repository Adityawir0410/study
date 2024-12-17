export default function docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  let title;
  if (params.slug?.length === 1) {
    title = `feature ${params.slug [0]}`;
  }
  if (params.slug?.length === 2) {
    title = `feature ${params.slug [0]} concept ${params.slug [1]}`;
  }

  if (params.slug?.length === 3) {
    title =
      `feature ${params.slug [0]} concept ${params.slug [1]} example ${params.slug [2]}`;
  }
  return (
    <div>
      <h1>Navbar</h1>
      <p>{title}</p>
      <h2>Footer</h2>
    </div>
  );
}
