import Container from '../../components/container/container';
/* eslint-disable-next-line */
export interface BlogProps {}

export function Blog(props: BlogProps) {
  return (
    <>
      <Container>
        <div className="wrapper">
          <h1>Bloğum çok yakında yayında!</h1>
        </div>
      </Container>
      <style jsx>{`
        .wrapper {
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}

export default Blog;
